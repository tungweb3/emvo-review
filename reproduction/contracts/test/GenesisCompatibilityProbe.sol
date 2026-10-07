// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {EmberSink} from "../EmberSink.sol";

interface IBurnFrom {
    function burnFrom(address account, uint256 amount) external;
}

/// @notice TEST ONLY; not Genesis final contract or an approved EMBER issuance.
/// @dev Local/Sepolia probe deliberately omits qualification, free-claim capacity,
/// appearance commitments, reveal, admin and operational mint policy.
contract GenesisCompatibilityProbe is ERC721, ReentrancyGuard {
    using SafeERC20 for IERC20;

    enum Mode { Burn, Consume }
    IERC20 public immutable token;
    address public immutable sink;
    uint256 public immutable costPerMint;
    uint256 public immutable maxSupply;
    Mode public immutable mode;
    uint256 public totalMinted;

    event FixtureForge(address indexed user, uint256 quantity, uint256 cost, Mode mode);

    constructor(address token_, uint256 cost_, uint256 supplyCap_, Mode mode_)
        ERC721("TEST ONLY Genesis Probe", "TESTGEN")
    {
        require(block.chainid == 31337 || block.chainid == 11155111, "TEST_CHAIN_ONLY");
        require(token_.code.length != 0, "TOKEN_CODE_REQUIRED");
        require(cost_ != 0 && supplyCap_ != 0, "FIXTURE_PARAMS_REQUIRED");
        token = IERC20(token_);
        costPerMint = cost_;
        maxSupply = supplyCap_;
        mode = mode_;
        sink = mode_ == Mode.Consume ? address(new EmberSink(token_)) : address(0);
    }

    function mintWithEmber(uint256 quantity) external nonReentrant {
        require(quantity != 0 && quantity <= maxSupply - totalMinted, "QUANTITY_OR_SUPPLY");
        uint256 cost = quantity * costPerMint; // checked uint256 arithmetic
        uint256 firstId = totalMinted;
        totalMinted += quantity; // effects before external calls; all revert atomically
        uint256 balanceBefore = token.balanceOf(msg.sender);
        uint256 supplyBefore = token.totalSupply();
        require(balanceBefore >= cost, "BALANCE_REQUIRED");
        if (mode == Mode.Burn) {
            IBurnFrom(address(token)).burnFrom(msg.sender, cost);
            require(supplyBefore >= cost && token.totalSupply() == supplyBefore - cost,
                "EXACT_SUPPLY_BURN_REQUIRED");
        } else {
            uint256 sinkBefore = token.balanceOf(sink);
            token.safeTransferFrom(msg.sender, sink, cost);
            require(token.balanceOf(sink) == sinkBefore + cost, "EXACT_RECEIVE_REQUIRED");
            require(token.totalSupply() == supplyBefore, "CONSUME_SUPPLY_CHANGED");
        }
        require(token.balanceOf(msg.sender) == balanceBefore - cost, "EXACT_DEBIT_REQUIRED");
        for (uint256 i; i < quantity; ++i) {
            _safeMint(msg.sender, firstId + i);
        }
        emit FixtureForge(msg.sender, quantity, cost, mode);
    }
}

/// @notice Test wallet to exercise ERC-721 callback rejection/reentry.
contract ProbeWallet is IERC721Receiver {
    IERC20 public immutable token;
    GenesisCompatibilityProbe public immutable probe;
    bool public rejectMint;
    bool public tryReentry;
    bool public reentrySucceeded;
    bytes public reentryReturnData;
    uint256 public rejectAt;
    uint256 public receivedCount;

    constructor(address token_, address probe_) {
        require(block.chainid == 31337 || block.chainid == 11155111, "TEST_CHAIN_ONLY");
        token = IERC20(token_);
        probe = GenesisCompatibilityProbe(probe_);
    }

    function approve(uint256 value) external { token.approve(address(probe), value); }
    function mint(uint256 quantity) external { probe.mintWithEmber(quantity); }
    function configure(bool rejectMint_, bool tryReentry_) external {
        rejectMint = rejectMint_;
        tryReentry = tryReentry_;
    }
    function configureRejectAt(uint256 ordinal) external { rejectAt = ordinal; }

    function onERC721Received(address, address, uint256, bytes calldata)
        external returns (bytes4)
    {
        require(msg.sender == address(probe), "EXPECTED_PROBE");
        require(!rejectMint, "REJECT_FIXTURE_MINT");
        receivedCount += 1;
        require(rejectAt == 0 || receivedCount != rejectAt, "REJECT_NTH_FIXTURE_MINT");
        if (tryReentry) {
            (bool success, bytes memory returnData) = address(probe).call(
                abi.encodeCall(GenesisCompatibilityProbe.mintWithEmber, (1)));
            reentrySucceeded = success;
            reentryReturnData = returnData;
        }
        return IERC721Receiver.onERC721Received.selector;
    }
}

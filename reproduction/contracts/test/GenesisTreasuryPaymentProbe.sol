// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/// @notice TEST ONLY: user-selected paid mint sends tokens to the issuing wallet.
/// @dev Omits Free/Remediation qualification, production prices, metadata and admin.
/// No deployment authorization. Self-payment policy is not a production decision.
contract GenesisTreasuryPaymentProbe is ERC721, ReentrancyGuard {
    using SafeERC20 for IERC20;
    IERC20 public immutable token;
    address public immutable paymentRecipient;
    uint256 public immutable costPerMint;
    uint256 public immutable maxSupply;
    uint256 public totalMinted;

    event FixturePaidForge(address indexed payer, address indexed recipient, uint256 quantity, uint256 cost);

    constructor(address token_, address recipient_, uint256 cost_, uint256 cap_)
        ERC721("TEST ONLY Treasury Payment Genesis", "TESTPAY")
    {
        require(block.chainid == 31337 || block.chainid == 11155111, "TEST_CHAIN_ONLY");
        require(token_.code.length != 0, "TOKEN_CODE_REQUIRED");
        require(recipient_ != address(0) && recipient_ != address(this), "INVALID_RECIPIENT");
        require(cost_ != 0 && cap_ != 0, "FIXTURE_PARAMS_REQUIRED");
        token = IERC20(token_);
        paymentRecipient = recipient_;
        costPerMint = cost_;
        maxSupply = cap_;
    }

    function mintWithEmber(uint256 quantity) external nonReentrant {
        require(msg.sender != paymentRecipient, "SELF_PAYMENT_POLICY_UNDECIDED");
        require(quantity != 0 && quantity <= maxSupply - totalMinted, "QUANTITY_OR_SUPPLY");
        uint256 cost = quantity * costPerMint;
        uint256 firstId = totalMinted;
        totalMinted += quantity;
        uint256 payerBefore = token.balanceOf(msg.sender);
        uint256 recipientBefore = token.balanceOf(paymentRecipient);
        uint256 supplyBefore = token.totalSupply();
        require(payerBefore >= cost, "BALANCE_REQUIRED");
        token.safeTransferFrom(msg.sender, paymentRecipient, cost);
        require(token.balanceOf(paymentRecipient) == recipientBefore + cost, "EXACT_RECEIVE_REQUIRED");
        require(token.balanceOf(msg.sender) == payerBefore - cost, "EXACT_DEBIT_REQUIRED");
        require(token.totalSupply() == supplyBefore, "SUPPLY_MUST_NOT_CHANGE");
        for (uint256 i; i < quantity; ++i) _safeMint(msg.sender, firstId + i);
        emit FixturePaidForge(msg.sender, paymentRecipient, quantity, cost);
    }
}

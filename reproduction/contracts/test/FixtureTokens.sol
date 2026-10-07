// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {IERC721Receiver} from "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

/// @notice TEST ONLY adversarial tokens; numbers and powers are not EMBER policy.
contract FixtureToken is ERC20Burnable, IERC721Receiver {
    uint8 private immutable _fixtureDecimals;
    uint256 public recipientFeeBps;
    uint256 public senderFeeBps;
    address public feeCollector;
    address public hookTarget;
    bytes public hookData;
    bool public propagateHookFailure;
    bool public hookSucceeded;
    bytes public hookReturnData;

    constructor(uint8 decimals_, uint256 supply, address recipient)
        ERC20("TEST ONLY Token", "TESTTOKEN")
    {
        require(block.chainid == 31337 || block.chainid == 11155111, "TEST_CHAIN_ONLY");
        _fixtureDecimals = decimals_;
        _mint(recipient, supply);
    }
    function decimals() public view override returns (uint8) { return _fixtureDecimals; }
    function approveAsToken(address spender, uint256 value) external {
        this.approve(spender, value); // adversarial hook caller owns sufficient funds/allowance
    }
    function mintAsToken(address probe, uint256 quantity) external {
        (bool success,) = probe.call(abi.encodeWithSignature("mintWithEmber(uint256)", quantity));
        require(success, "FIXTURE_MINT_FAILED");
    }
    function onERC721Received(address, address, uint256, bytes calldata)
        external pure returns (bytes4)
    {
        return IERC721Receiver.onERC721Received.selector; // test attack caller can receive NFT
    }
    function setFees(uint256 receiveFee, uint256 debitFee, address collector) external {
        require(receiveFee <= 10000 && debitFee <= 10000 && collector != address(0));
        recipientFeeBps = receiveFee;
        senderFeeBps = debitFee;
        feeCollector = collector;
    }
    function setHook(address target, bytes calldata data, bool propagateFailure) external {
        hookTarget = target;
        hookData = data;
        propagateHookFailure = propagateFailure;
    }
    function transferFrom(address from, address to, uint256 value)
        public virtual override returns (bool)
    {
        bool result = super.transferFrom(from, to, value);
        if (hookTarget != address(0)) {
            (bool success, bytes memory returnData) = hookTarget.call(hookData);
            hookSucceeded = success;
            hookReturnData = returnData;
            if (propagateHookFailure) require(success, "FIXTURE_HOOK_REVERT");
        }
        return result;
    }
    function _update(address from, address to, uint256 value) internal override {
        if (from != address(0) && to != address(0)
            && (recipientFeeBps != 0 || senderFeeBps != 0)) {
            uint256 receiveFee = value * recipientFeeBps / 10000;
            uint256 debitFee = value * senderFeeBps / 10000;
            super._update(from, feeCollector, receiveFee + debitFee);
            super._update(from, to, value - receiveFee);
        } else {
            super._update(from, to, value);
        }
    }
}

contract NoBurnToken is ERC20 {
    constructor(uint256 supply, address recipient) ERC20("TEST No Burn", "TESTNB") {
        require(block.chainid == 31337 || block.chainid == 11155111, "TEST_CHAIN_ONLY");
        _mint(recipient, supply);
    }
}

contract FalseReturnToken is FixtureToken {
    constructor(uint8 d, uint256 s, address r) FixtureToken(d, s, r) {}
    function transferFrom(address, address, uint256) public pure override returns (bool) {
        return false;
    }
}

contract FakeTransferToken is FixtureToken {
    constructor(uint8 d, uint256 s, address r) FixtureToken(d, s, r) {}
    function transferFrom(address, address, uint256) public pure override returns (bool) {
        return true; // interface success without actual delivery: must be rejected
    }
}

contract NoReturnToken is FixtureToken {
    constructor(uint8 d, uint256 s, address r) FixtureToken(d, s, r) {}
    function transferFrom(address from, address to, uint256 value)
        public override returns (bool)
    {
        super.transferFrom(from, to, value);
        assembly ("memory-safe") { return(0, 0) }
    }
}

contract FakeBurnToken is FixtureToken {
    constructor(uint8 d, uint256 s, address r) FixtureToken(d, s, r) {}
    function burnFrom(address, uint256) public pure override {}
}

contract MalformedReturnToken is FixtureToken {
    constructor(uint8 d, uint256 s, address r) FixtureToken(d, s, r) {}
    function transferFrom(address from, address to, uint256 value)
        public override returns (bool)
    {
        super.transferFrom(from, to, value);
        assembly ("memory-safe") { mstore(0, 1) return(31, 1) }
    }
}

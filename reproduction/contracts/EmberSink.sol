// SPDX-License-Identifier: MIT
pragma solidity 0.8.30;

/// @notice Candidate non-upgradeable token sink. No owner, withdrawals or rescue.
/// @dev Receiving tokens does not reduce ERC-20 totalSupply. A token's own upgrade,
/// confiscation or rebasing powers require independent verification of that token.
/// No deployment of this candidate has been authorized or performed.
contract EmberSink {
    address public immutable token;

    constructor(address token_) {
        require(token_.code.length != 0, "TOKEN_CODE_REQUIRED");
        token = token_;
    }
}

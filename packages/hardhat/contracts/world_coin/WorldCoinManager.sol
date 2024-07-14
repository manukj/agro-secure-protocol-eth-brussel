// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import { WorldCoinVerification } from "../WorldcoinVerification.sol";


contract WorldCoinManager {
	/// @dev The WorldCoinVerification contract instance
	WorldCoinVerification public worldCoinVerification;

	/// @dev Mapping to keep track of registered users
	mapping(address => bool) public registeredUsers;

	/// @dev Event emitted when a user is registered
	event UserRegistered(address indexed user);

	/// @param _worldCoinVerification The address of the deployed WorldCoinVerification contract
	constructor(WorldCoinVerification _worldCoinVerification) {
		worldCoinVerification = _worldCoinVerification;
	}

	/// @param signal An arbitrary input from the user, usually the user's wallet address (check README for further details)
	/// @param root The root of the Merkle tree (returned by the JS widget)
	/// @param nullifierHash The nullifier hash for this proof, preventing double signaling (returned by the JS widget)
	/// @param proof The zero-knowledge proof that demonstrates the claimer is registered with World ID (returned by the JS widget)
	function verifyAndRegister(
		address signal,
		uint256 root,
		uint256 nullifierHash,
		uint256[8] calldata proof
	) public {
		// Perform verification using the WorldCoinVerification contract
		worldCoinVerification.verifyAndExecute(
			signal,
			root,
			nullifierHash,
			proof
		);

		// Register the user if they haven't been registered yet
		if (!registeredUsers[signal]) {
			registeredUsers[signal] = true;
			emit UserRegistered(signal);
		}
	}
}

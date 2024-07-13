// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import { FunctionsClient } from "@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import { ConfirmedOwner } from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import { FunctionsRequest } from "@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";

/** deployed address 
Sepolio : 0x8e6030023C1454fFbc2EF18c0da14809Fe95F7E0
 */

contract WeatherRiskFunctionsConsumer is FunctionsClient, ConfirmedOwner {
	using FunctionsRequest for FunctionsRequest.Request;

	// State variables to store the last request ID, response, and error
	bytes32 public s_lastRequestId;
	bytes public s_lastResponse;
	bytes public s_lastError;

	// Custom error type
	error UnexpectedRequestID(bytes32 requestId);

	// Event to log responses
	event Response(
		bytes32 indexed requestId,
		uint256 riskFactor,
		bytes response,
		bytes err
	);

	// Router address - Hardcoded for Optimism
	// Check to get the router address for your supported network https://docs.chain.link/chainlink-functions/supported-networks
	address router = 0xC17094E3A1348E5C7544D4fF8A36c28f2C6AAE28;

	// JavaScript source code
	// Fetch weather and soil data and calculate risk factor.

	uint32 gasLimit = 300000;

	// donID - Hardcoded for Optimism
	// Check to get the donID for your supported network https://docs.chain.link/chainlink-functions/supported-networks
	bytes32 donID =
		0x66756e2d6f7074696d69736d2d7365706f6c69612d3100000000000000000000;

	// State variable to store the returned risk factor
	uint256 public riskFactor;

	/**
	 * @notice Initializes the contract with the Chainlink router address and sets the contract owner
	 */
	constructor() FunctionsClient(router) ConfirmedOwner(msg.sender) {}

	/**
	 * @notice Sends an HTTP request for weather and soil data
	 * @param subscriptionId The ID for the Chainlink subscription
	 * @param args The arguments to pass to the HTTP request
	 * @return requestId The ID of the request
	 */
	function sendRequest(
		string memory source,
		uint64 subscriptionId,
		string[] calldata args
	) external onlyOwner returns (bytes32 requestId) {
		FunctionsRequest.Request memory req;
		req.initializeRequestForInlineJavaScript(source); // Initialize the request with JS code
		if (args.length > 0) req.setArgs(args); // Set the arguments for the request

		// Send the request and store the request ID
		s_lastRequestId = _sendRequest(
			req.encodeCBOR(),
			subscriptionId,
			gasLimit,
			donID
		);

		return s_lastRequestId;
	}

	/**
	 * @notice Callback function for fulfilling a request
	 * @param requestId The ID of the request to fulfill
	 * @param response The HTTP response data
	 * @param err Any errors from the Functions request
	 */
	function fulfillRequest(
		bytes32 requestId,
		bytes memory response,
		bytes memory err
	) internal override {
		if (s_lastRequestId != requestId) {
			revert UnexpectedRequestID(requestId); // Check if request IDs match
		}
		// Update the contract's state variables with the response and any errors
		s_lastResponse = response;
		riskFactor = abi.decode(response, (uint256));
		s_lastError = err;

		// Emit an event to log the response
		emit Response(requestId, riskFactor, s_lastResponse, s_lastError);
	}
}

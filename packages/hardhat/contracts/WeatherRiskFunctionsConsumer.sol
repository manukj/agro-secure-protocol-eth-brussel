// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {FunctionsClient} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/shared/access/ConfirmedOwner.sol";
import {FunctionsRequest} from "@chainlink/contracts/src/v0.8/functions/v1_0_0/libraries/FunctionsRequest.sol";


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

    // Router address - Hardcoded for Sepolia
    // Check to get the router address for your supported network https://docs.chain.link/chainlink-functions/supported-networks
    address router = 0xb83E47C2bC239B3bf370bc41e1459A34b41238D0;

    // JavaScript source code
    // Fetch weather and soil data and calculate risk factor.
    string source =
        "const token = args[0];"
        "const locationid = args[1];"
        "const startdate = args[2];"
        "const enddate = args[3];"
        "const datatypeid = 'TAVG';"
        "const appid = args[4];"
        "const cityName = args[5];"
        "// -------------------------- Weather Risk Factor  --------------------------"
        "const url = `https://www.ncei.noaa.gov/cdo-web/api/v2/data?datasetid=GHCND&locationid=${locationid}&startdate=${startdate}&enddate=${enddate}&datatypeid=${datatypeid}&limit=30`;"
        "const noaaResponse = await Functions.makeHttpRequest({"
        "url: url,"
        "headers: { 'token': token },"
        "});"
        "if (noaaResponse.error) { throw Error('NOAA request failed'); }"
        "const weatherData = noaaResponse.data;"
        "function calculateWeatherRisk(data) {"
        "const extremeHigh = 35;"
        "const extremeLow = 0;"
        "let extremeCount = 0;"
        "for (const entry of data.results) {"
        "const value = entry.value;"
        "if (value > extremeHigh || value < extremeLow) { extremeCount += 1; }"
        "}"
        "const totalEvents = data.results.length;"
        "const riskFactor = totalEvents > 0 ? extremeCount / totalEvents : 0;"
        "return riskFactor;"
        "}"
        "const weatherRiskFactor = calculateWeatherRisk(weatherData);"
        "// -------------------------- Lat Long --------------------------"
        "const cityResponse = await Functions.makeHttpRequest({"
        "url: `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${appid}`,"
        "});"
        "if (cityResponse.error) { throw Error('City request failed'); }"
        "const city = cityResponse.data[0];"
        "const lat = city.lat;"
        "const lon = city.lon;"
        "// -------------------------- Soil Risk Factor --------------------------"
        "const soilUrl = `https://rest.isric.org/soilgrids/v2.0/properties/query?lon=${lon}&lat=${lat}&property=clay&property=sand&property=silt&depth=0-5cm&depth=0-30cm&depth=5-15cm&value=mean`;"
        "const soilResponse = await Functions.makeHttpRequest({"
        "url: soilUrl,"
        "});"
        "if (soilResponse.error) { throw Error('Soil properties request failed'); }"
        "const soilData = soilResponse.data;"
        "const weightClay = 0.3;"
        "const weightSand = 0.4;"
        "const weightSilt = 0.3;"
        "function extractMeanValue(response, layerName) {"
        "const layer = response.properties.layers.find(l => l.name === layerName);"
        "if (layer) {"
        "const depthRange = layer.depths.find(d => d.label === '0-5cm');"
        "return depthRange && depthRange.values.mean ? depthRange.values.mean / layer.unit_measure.d_factor : 0;"
        "}"
        "return 0;"
        "}"
        "const clayMean = extractMeanValue(soilData, 'clay');"
        "const sandMean = extractMeanValue(soilData, 'sand');"
        "const siltMean = extractMeanValue(soilData, 'silt');"
        "const soilFactor = (weightClay * clayMean) + (weightSand * sandMean) + (weightSilt * siltMean);"
        "// -------------------------- Total Risk Factor --------------------------"
        "const riskFactor = 100 * (weatherRiskFactor + soilFactor);"
        "return Functions.encodeUint256(Math.round(riskFactor));";

    // Callback gas limit
    uint32 gasLimit = 300000;

    // donID - Hardcoded for Sepolia
    // Check to get the donID for your supported network https://docs.chain.link/chainlink-functions/supported-networks
    bytes32 donID =
        0x66756e2d657468657265756d2d7365706f6c69612d3100000000000000000000;

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

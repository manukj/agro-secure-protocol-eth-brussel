
# Agro Secure Protocol

![logo](https://github.com/user-attachments/assets/5d06a644-a94c-4fca-a96e-22c473b2c6e8)


WeatherRiskFunctionsConsumer : 0x61D178043F1998e1C2FBf378d438100b6f23095E

InsuranceManager : 0xacAdeD0792E374950301aeb83679c2559FA62049

WorldCoinVerification : 0x303265791D01DFBacf88547022ba015b0B777694

ApprovalAuthority : 0xf7047ed56f0cC75512FfB21e568dB5A490eDE6d3

## Overview

Agro Secure Protocol is a blockchain-based insurance solution for farmers, designed to provide secure, transparent, and efficient insurance services. Utilizing World ID for proof of human-ness, Chainlink for data integration, and advanced risk assessment models, the protocol ensures fair premium calculations and reliable claim processing.

## Features

- **World ID Integration**: Ensures user authenticity.
- **Chainlink Oracles**: Provides reliable data from external sources.
- **Risk Assessment**: Advanced algorithms for accurate risk calculation.
- **Decentralized Claims Verification**: Multi-party authorization for claims processing.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/manukj/agro-secure-protocol-eth-brussel.git
   cd agro-secure-protocol-eth-brussel
   ```

2. **Install dependencies:**
   

3. **Compile the smart contracts:**
   

4. **Deploy the contracts:**
   

## Architecture

### World ID Verification

- **Biometric Verification**: Uses ZKSnark for privacy-preserving identity proof.
- **Sybil Resistance**: Ensures unique identity through robust verification mechanisms.

### Chainlink Integration

- **Data Fetching**: Collects location and crop data from Web2 APIs.
- **Data Provision**: Feeds reliable data to the Risk Factor Calculation module.

### Risk Factor Calculation

- **Data Analysis**: Assesses weather, yield, and pest risks.
- **Composite Risk Score**: Generates a comprehensive risk score for premium calculation.

### Premium Calculation

- **Premium Formula**: Calculates premiums based on the composite risk score.

### Claims Processing

- **Decentralized Verification**: Claims must be authorized by five parties.
- **Staking and Rewards**: Authorized parties stake coins and receive a percentage of the insured amount upon claim approval.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

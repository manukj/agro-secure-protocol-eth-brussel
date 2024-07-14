import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  11155420: {
    WeatherRiskFunctionsConsumer: {
      address: "0x61D178043F1998e1C2FBf378d438100b6f23095E",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "EmptyArgs",
          type: "error",
        },
        {
          inputs: [],
          name: "EmptySource",
          type: "error",
        },
        {
          inputs: [],
          name: "NoInlineSecrets",
          type: "error",
        },
        {
          inputs: [],
          name: "OnlyRouterCanFulfill",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "requestId",
              type: "bytes32",
            },
          ],
          name: "UnexpectedRequestID",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "OwnershipTransferRequested",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "id",
              type: "bytes32",
            },
          ],
          name: "RequestFulfilled",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "id",
              type: "bytes32",
            },
          ],
          name: "RequestSent",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "bytes32",
              name: "requestId",
              type: "bytes32",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "riskFactor",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "response",
              type: "bytes",
            },
            {
              indexed: false,
              internalType: "bytes",
              name: "err",
              type: "bytes",
            },
          ],
          name: "Response",
          type: "event",
        },
        {
          inputs: [],
          name: "acceptOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "requestId",
              type: "bytes32",
            },
            {
              internalType: "bytes",
              name: "response",
              type: "bytes",
            },
            {
              internalType: "bytes",
              name: "err",
              type: "bytes",
            },
          ],
          name: "handleOracleFulfillment",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "riskFactor",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "s_lastError",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "s_lastRequestId",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "s_lastResponse",
          outputs: [
            {
              internalType: "bytes",
              name: "",
              type: "bytes",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint64",
              name: "subscriptionId",
              type: "uint64",
            },
            {
              internalType: "string[]",
              name: "args",
              type: "string[]",
            },
          ],
          name: "sendRequest",
          outputs: [
            {
              internalType: "bytes32",
              name: "requestId",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    InsuranceManager: {
      address: "0x86787b859A83BBA59c1Fec17CB5dba3102CF4718",
      abi: [
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "insuranceAmount",
              type: "uint256",
            },
          ],
          name: "InsuranceClaimed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "insuranceAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "premiumPaid",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "validityPeriod",
              type: "uint256",
            },
          ],
          name: "InsuranceUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "insuranceAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "premiumPaid",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "validityPeriod",
              type: "uint256",
            },
          ],
          name: "NewInsurance",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_insuranceAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_validityPeriod",
              type: "uint256",
            },
          ],
          name: "addNewInsurance",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
          ],
          name: "checkValidity",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
          ],
          name: "claimInsurance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
          ],
          name: "getInsurance",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "id",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "insuranceAmount",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "premiumPaid",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "validityPeriod",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "startTime",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isValid",
                  type: "bool",
                },
                {
                  internalType: "bool",
                  name: "isClaimed",
                  type: "bool",
                },
              ],
              internalType: "struct InsuranceManager.Insured",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "insurances",
          outputs: [
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "insuranceAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "premiumPaid",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "validityPeriod",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "startTime",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isValid",
              type: "bool",
            },
            {
              internalType: "bool",
              name: "isClaimed",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
          ],
          name: "invalidateInsurance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_additionalValidityPeriod",
              type: "uint256",
            },
          ],
          name: "renewInsurance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_id",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_insuranceAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_validityPeriod",
              type: "uint256",
            },
          ],
          name: "updateInsurance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;

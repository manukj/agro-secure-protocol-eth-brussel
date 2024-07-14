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
      address: "0xacAdeD0792E374950301aeb83679c2559FA62049",
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
              internalType: "address",
              name: "insuredAddress",
              type: "address",
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
              internalType: "address",
              name: "insuredAddress",
              type: "address",
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
              internalType: "address",
              name: "insuredAddress",
              type: "address",
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
              internalType: "address",
              name: "_insuredAddress",
              type: "address",
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
              internalType: "address",
              name: "_insuredAddress",
              type: "address",
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
              internalType: "address",
              name: "_insuredAddress",
              type: "address",
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
              internalType: "address",
              name: "_insuredAddress",
              type: "address",
            },
          ],
          name: "getInsurance",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "insuredAddress",
                  type: "address",
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
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "insurances",
          outputs: [
            {
              internalType: "address",
              name: "insuredAddress",
              type: "address",
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
              internalType: "address",
              name: "_insuredAddress",
              type: "address",
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
              internalType: "address",
              name: "_insuredAddress",
              type: "address",
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
              internalType: "address",
              name: "_insuredAddress",
              type: "address",
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
    WorldCoinVerification: {
      address: "0x303265791D01DFBacf88547022ba015b0B777694",
      abi: [
        {
          inputs: [
            {
              internalType: "contract IWorldID",
              name: "_worldId",
              type: "address",
            },
            {
              internalType: "string",
              name: "_appId",
              type: "string",
            },
            {
              internalType: "string",
              name: "_actionId",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "nullifierHash",
              type: "uint256",
            },
          ],
          name: "DuplicateNullifier",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint256",
              name: "nullifierHash",
              type: "uint256",
            },
          ],
          name: "Verified",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "signal",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "root",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "nullifierHash",
              type: "uint256",
            },
            {
              internalType: "uint256[8]",
              name: "proof",
              type: "uint256[8]",
            },
          ],
          name: "verifyAndExecute",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
    ApprovalAuthority: {
      address: "0xf7047ed56f0cC75512FfB21e568dB5A490eDE6d3",
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
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "AuthorizedUserAdded",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
          ],
          name: "AuthorizedUserRemoved",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
          ],
          name: "addAuthorizedUser",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "authorizedUsers",
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
              internalType: "address",
              name: "_user",
              type: "address",
            },
          ],
          name: "isAuthorizedUser",
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
          inputs: [],
          name: "minFee",
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
              internalType: "address",
              name: "_user",
              type: "address",
            },
          ],
          name: "removeAuthorizedUser",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdrawFees",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;

"use client";

import { useEffect, useState } from "react";
// import { useWalletClient } from "wagmi";
import { useRouter, useSearchParams } from "next/navigation";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

enum Plan {
  SILVER = "SILVER",
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
}

const Quotes = () => {
  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("InsuranceManager");

  const router = useRouter();
  const { address } = useAccount();
  const searchParams = useSearchParams();
  const riskFactor = parseInt(searchParams.get("riskFactor") || "0") / 100;
  const baseFare = 1000;
  const baseFareWithRisk = baseFare * riskFactor + baseFare;
  const sliverAmount = ((baseFareWithRisk / 12) * 1) / 100; // 1 year
  const goldAmount = ((baseFareWithRisk / 12) * 0.9 * 2) / 100; // 2 years
  const platinumAmount = ((baseFareWithRisk / 12) * 0.8 * 5) / 100; // 5 years
  const sliverInsurredAmount = baseFareWithRisk * 1;
  const goldInsurredAmount = baseFareWithRisk * 2;
  const platinumInsurredAmount = baseFareWithRisk * 5;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handlePurchase = async (plan: Plan) => {
    console.log("address", address);

    const insuranceAmount =
      plan === Plan.SILVER ? sliverInsurredAmount : plan === Plan.GOLD ? goldInsurredAmount : platinumInsurredAmount;

    const validityPeriod = plan === Plan.SILVER ? 1 : plan === Plan.GOLD ? 2 : 5;

    console.log("data args", BigInt(insuranceAmount), BigInt(validityPeriod));
    console.log("datBigInt(insuranceAmount)a args", BigInt(insuranceAmount));
    try {
      await writeYourContractAsync({
        functionName: "addNewInsurance",
        args: [address!, BigInt(insuranceAmount), BigInt(validityPeriod)],
        value: BigInt(insuranceAmount),
      });
      setIsLoading(false);
      router.push("/");
    } catch (error) {
      console.log("error while calling the APi", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <div className="flex flex-col items-center min-h-screen bg-base-200 mt-4 rounded-md place-content-center">
          <h1 className="text-4xl font-bold mb-6">Available Plans</h1>
          <div className="flex flex-row justify-center gap-4">
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="/Eth silver.gif" className="rounded-xl" style={{ width: "100px", height: "100px" }} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">SILVER</h2>
                <p>
                  <span>1 year</span> Validity
                </p>
                <div className="flex flex-row text-4xl place-items-center">
                  {" "}
                  {sliverAmount.toFixed(2)} <p className="ml-2 text-gray-500 text-2xl"> GWEI / mo</p>
                </div>
                <p className="font-bold">Insurance Specifications: </p>
                <ul>
                  <li>Insured Amount - {sliverInsurredAmount.toFixed(2)} Gwei</li>
                  <li>Risk Factor - {riskFactor.toFixed(2)}</li>
                </ul>
                <p className="font-bold">Additional Coverage: </p>
                <ul>
                  <li>Access to weather forecasting tools</li>
                  <li>Basic agronomy advice</li>
                </ul>
              </div>
              <button
                className="btn btn-active btn-primary"
                onClick={() => {
                  handlePurchase(Plan.SILVER);
                }}
              >
                Purchase
              </button>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="/Eth gold.gif" className="rounded-xl" style={{ width: "100px", height: "100px" }} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">GOLD</h2>
                <p>
                  <span>2 year</span> Validity
                </p>
                <div className="flex flex-row text-4xl place-items-center">
                  {" "}
                  {goldAmount.toFixed(2)} <p className="ml-2 text-gray-500 text-2xl"> GWEI / mo</p>
                </div>
                <p className="font-bold">Insurance Specifications: </p>
                <ul>
                  <li>Insured Amount - {goldInsurredAmount.toFixed(2)} Gwei</li>
                  <li>Risk Factor - {riskFactor.toFixed(2)}</li>
                </ul>
                <p className="font-bold">Additional Coverage: </p>
                <ul>
                  <li>Advanced weather forecasting tools</li>
                  <li>Replanting coverage</li>
                </ul>
              </div>
              <button
                className="btn btn-active btn-primary"
                onClick={() => {
                  handlePurchase(Plan.GOLD);
                }}
              >
                Purchase
              </button>
            </div>

            <div className="card bg-base-100 w-96 shadow-xl">
              <figure className="px-10 pt-10">
                <img src="/Eth platinum.gif" className="rounded-xl" style={{ width: "100px", height: "100px" }} />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">PLATINUM</h2>
                <p>
                  <span>5 year</span> Validity
                </p>
                <div className="flex flex-row text-4xl place-items-center">
                  {" "}
                  {platinumAmount.toFixed(2)} <p className="ml-2 text-gray-500 text-2xl"> GWEI / mo</p>
                </div>
                <p className="font-bold">Insurance Specifications: </p>
                <ul>
                  <li>Insured Amount - {platinumInsurredAmount.toFixed(2)} GWEI</li>
                  <li>Risk Factor - {riskFactor.toFixed(2)}</li>
                </ul>
                <p className="font-bold">Additional Coverage: </p>
                <ul>
                  <li>Comprehensive agronomy support including field visits</li>
                  <li>Price protection against market fluctuations</li>
                </ul>
              </div>
              <button
                className="btn btn-active btn-primary"
                onClick={() => {
                  handlePurchase(Plan.PLATINUM);
                }}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quotes;

"use client";

import { useState } from "react";
// import { useWalletClient } from "wagmi";
import { useSearchParams } from "next/navigation";

const Quotes = () => {
  const searchParams = useSearchParams();
  const riskFactor = parseInt(searchParams.get("riskFactor") || "0") / 100;
  const baseFare = 100;
  const baseFareWithRisk = baseFare * riskFactor + baseFare;
  const sliverAmount = (baseFareWithRisk / 12) * 1;
  const goldAmount = (baseFareWithRisk / 12) * 0.9 * 2;
  const platinumAmount = (baseFareWithRisk / 12) * 0.8 * 5;

  // const { data: walletClient } = useWalletClient();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  setIsLoading(false);

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
                <p className="text-4xl">${sliverAmount.toFixed(2)}/mo</p>
                <p className="font-bold">Insurance Specifications: </p>
                <ul>
                  <li>Insured Amount - {sliverAmount.toFixed(2)}</li>
                  <li>Risk Factor - {riskFactor.toFixed(2)}</li>
                </ul>
                <p className="font-bold">Additional Coverage: </p>
                <ul>
                  <li>Access to weather forecasting tools</li>
                  <li>Basic agronomy advice</li>
                </ul>
              </div>
              <button className="btn btn-active btn-primary">Purchase</button>
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
                <p className="text-4xl">${goldAmount.toFixed(2)}/mo</p>
                <p className="font-bold">Insurance Specifications: </p>
                <ul>
                  <li>Insured Amount - {goldAmount.toFixed(2)}</li>
                  <li>Risk Factor - {riskFactor.toFixed(2)}</li>
                </ul>
                <p className="font-bold">Additional Coverage: </p>
                <ul>
                  <li>Advanced weather forecasting tools</li>
                  <li>Replanting coverage</li>
                </ul>
              </div>
              <button className="btn btn-active btn-primary">Purchase</button>
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
                <p className="text-4xl">${platinumAmount.toFixed(2)}/mo</p>
                <p className="font-bold">Insurance Specifications: </p>
                <ul>
                  <li>Insured Amount - {platinumAmount.toFixed(2)}</li>
                  <li>Risk Factor - {riskFactor.toFixed(2)}</li>
                </ul>
                <p className="font-bold">Additional Coverage: </p>
                <ul>
                  <li>Comprehensive agronomy support including field visits</li>
                  <li>Price protection against market fluctuations</li>
                </ul>
              </div>
              <button className="btn btn-active btn-primary">Purchase</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Quotes;

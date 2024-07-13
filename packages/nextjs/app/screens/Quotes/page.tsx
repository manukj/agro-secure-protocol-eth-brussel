"use client";

import { useEffect, useState } from "react";

const Quotes = () => {
  const baseFare = 100;
  let riskFactor;
  let actuallAmount;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    // mock api call add timer to show loading
    setTimeout(() => {
      riskFactor = Math.random() * 100; // decimal point
      actuallAmount = baseFare * riskFactor;
      console.log("Risk Factor: ", riskFactor);
      console.log("Actuall Amount: ", actuallAmount);
      setIsLoading(false);
      console.log("isLoading", isLoading);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen bg-base-200 mt-4 rounded-md justify-center">
      <h1 className="text-4xl font-bold mb-6">Choose Your Plan</h1>
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
            <p className="text-4xl">$10/mo</p>
            <p className="font-bold">Insured details: </p>
            <ul>
              <li>Crop Type</li>
              <li>Farm Location</li>
              <li>Farm Size</li>
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
            <p className="text-4xl">$20/mo</p>
            <p className="font-bold">Insured details: </p>
            <ul>
              <li>Crop Type </li>
              <li>Farm Location</li>
              <li>Farm Size</li>
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
            <p className="text-4xl">$30/mo</p>
            <p className="font-bold">Insured details: </p>
            <ul>
              <li>Crop Type </li>
              <li>Farm Location</li>
              <li>Farm Size</li>
            </ul>
          </div>
          <button className="btn btn-active btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;

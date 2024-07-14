"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoadingFromChainlink from "./loading_from_chainlink";
import { useWalletClient } from "wagmi";
import { useScaffoldContract, useScaffoldWatchContractEvent } from "~~/hooks/scaffold-eth";

const InsuranceDetails = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data: walletClient } = useWalletClient();

  const { data: riskFactorContract } = useScaffoldContract({
    contractName: "WeatherRiskFunctionsConsumer",
    walletClient,
  });

  useScaffoldWatchContractEvent({
    contractName: "WeatherRiskFunctionsConsumer",
    eventName: "Response",
    onLogs: logs => {
      logs.map(log => {
        const { requestId, riskFactor, response, err } = log.args;
        console.log("📡 requestId", requestId);
        console.log("📡 response", response);
        console.log("📡 err", err);
        console.log("📡 Calcuated riskFactor from Chain link", riskFactor);
        setIsLoading(false);
        const weatherRisk = Number(riskFactor) ?? 0 / 100;
        const farmFraction = farmSize * 0.1;
        const finalRiskFactor = weatherRisk + farmFraction;
        router.push("/screens/Quotes?riskFactor=" + finalRiskFactor);
      });
    },
  });

  const getRiskFactor = async () => {
    try {
      // const today = new Date();
      // const year = today.getFullYear();
      // const month = String(today.getMonth() + 1).padStart(2, "0");
      // const day = String(today.getDate()).padStart(2, "0");
      // const oneYearFromNow = new Date(today.setFullYear(today.getFullYear() + 1));
      // const currentDate = `${year}-${month}-${day}`;
      // const endDate = `${oneYearFromNow.getFullYear()}-${String(oneYearFromNow.getMonth() + 1).padStart(2, "0")}-${String(
      //   oneYearFromNow.getDate()
      // ).padStart(2, "0")}`;

      const args = [
        "YQlTRjeThZHzJkuQywBUaXUJjnxeWJOn",
        "FIPS:37",
        // currentDate,
        // endDate,
        "2020-01-01",
        "2020-12-31",
        "5690b6be4dbd92f1c1e62244a0785e95",
        location ?? "London",
      ];
      setIsLoading(true);
      await riskFactorContract?.write.sendRequest([BigInt(217), args]);
    } catch (e) {
      console.log("error while calling the APi", e);
    }
  };

  const [farmSize, setFarmSize] = useState(2);
  const [location, setLocation] = useState("");
  const minFarmSize = 1;
  const maxFarmSize = 20;
  const [displayedFarmSize, setDisplayedFarmSize] = useState(farmSize);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayedFarmSize(Number(e.target.value));
  };

  const handleRangeMouseUp = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setFarmSize(Number((e.target as HTMLInputElement).value));
  };

  const handleLocationChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setLocation(e.target.value); // Update location state when user types in the location input
  };

  return (
    <>
      {isLoading ? (
        <LoadingFromChainlink />
      ) : (
        <div className="flex items-center justify-center min-h-screen relative">
          <img src="/insurance_logo.svg" className="absolute top-40 left-10 h-80 " />
          <div className="card bg-base-100 w-100 shadow-xl rounded-md">
            <h1 className="text-2xl font-bold text-center mt-3">Insurance Form</h1>
            <div className="card-body">
              <div className="flex flex-col">
                <p>Farm Size: {displayedFarmSize}</p>
                <input
                  type="range"
                  min={minFarmSize}
                  max={maxFarmSize}
                  value={displayedFarmSize}
                  onChange={handleRangeChange}
                  onMouseUp={handleRangeMouseUp}
                  className="range"
                />
                <div className="flex justify-between mt-2">
                  <span>{minFarmSize}</span>
                  <span>{maxFarmSize}</span>
                </div>
                <div className="flex items-center mt-4">
                  <p className="mr-4">Farm Location: </p>
                  <input
                    type="text"
                    placeholder="Enter Location"
                    value={location}
                    onChange={handleLocationChange}
                    className="input input-bordered"
                  />
                </div>
                <p>Crop Type: </p>
                <select className="select select-bordered rounded-box shadow mt-2">
                  <option>Wheat</option>
                  <option>Rice</option>
                  <option>Maize</option>
                  <option>Barley</option>
                </select>
              </div>
            </div>
            <button className="btn btn-active btn-primary" onClick={getRiskFactor}>
              Get Quotes
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default InsuranceDetails;

"use client";

import { useAccount } from "wagmi";
import { useWalletClient } from "wagmi";
import { useScaffoldContract } from "~~/hooks/scaffold-eth";

const LoginScreen = () => {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { data: riskFactorContract } = useScaffoldContract({
    contractName: "WeatherRiskFunctionsConsumer",
    walletClient,
  });

  const readRiskFactor = async () => {
    try {
      const args = [
        "YQlTRjeThZHzJkuQywBUaXUJjnxeWJOn",
        "FIPS:37",
        "2020-01-01",
        "2020-12-31",
        "5690b6be4dbd92f1c1e62244a0785e95",
        "London",
      ];
      await riskFactorContract?.write.sendRequest([BigInt(217), args]);
    } catch (e) {
      console.log("error while calling the APi", e);
    }
  };

  console.log("address", address);
  return (
    <div className="h-full w-full flex place-content-center justify-items-center">
      {address ? (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <figure>
            <img src="/farm.png" width={200} height={200} />
          </figure>
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-bold">Agro Chain Protocol</h1>
          </div>
          <p>Get your crop Insured</p>
          <div className="card-actions justify-end">
            <div className="btn btn-primary">Get Insured</div>
            <div className="btn btn-primary">Claim</div>
          </div>
          <div className="btn btn-primary" onClick={readRiskFactor}>
            Read Risk Factor
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
export default LoginScreen;

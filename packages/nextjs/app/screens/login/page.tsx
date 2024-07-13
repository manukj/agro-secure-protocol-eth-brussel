"use client";

// import { useWalletClient } from "wagmi";
// import { useScaffoldContract } from "~~/hooks/scaffold-eth";
import ConnectWallet from "./components/connect_wallet";
import WorldcoinVerificationDialog from "./components/worldid_verification_dialog";
import { useAccount } from "wagmi";

const LoginScreen = () => {
  const { address } = useAccount();
  // const { data: walletClient } = useWalletClient();
  // const { data: riskFactorContract } = useScaffoldContract({
  //   contractName: "WeatherRiskFunctionsConsumer",
  //   walletClient,
  // });

  // const readRiskFactor = async () => {
  //   try {
  //     const args = [
  //       "YQlTRjeThZHzJkuQywBUaXUJjnxeWJOn",
  //       "FIPS:37",
  //       "2020-01-01",
  //       "2020-12-31",
  //       "5690b6be4dbd92f1c1e62244a0785e95",
  //       "London",
  //     ];
  //     await riskFactorContract?.write.sendRequest([BigInt(217), args]);
  //   } catch (e) {
  //     console.log("error while calling the APi", e);
  //   }
  // };

  console.log("address", address);
  return (
    <div className="h-screen w-screen flex place-content-center justify-items-center flex-col justify-center place-items-center">
      <figure>
        <img src="/farm.png" width={400} height={200} />
      </figure>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">Agro Chain Protocol</h1>
      </div>
      {address ? (
        <div className="flex flex-col items-center  text-center">
          <p>Get your crop Insured</p>
          <div className="card-actions justify-end">
            <div className="btn btn-primary w-30">Get Insured</div>
            <div className="btn border-black w-30">Claim</div>
          </div>
        </div>
      ) : (
        <ConnectWallet />
      )}
      <WorldcoinVerificationDialog
        appId={process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`}
        action={process.env.NEXT_PUBLIC_WLD_ACTION!}
        signal={"pass_addr_here"}
        onSuccess={result => console.log(result)}
      />
    </div>
  );
};
export default LoginScreen;

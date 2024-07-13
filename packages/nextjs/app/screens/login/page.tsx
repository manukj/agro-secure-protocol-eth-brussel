"use client";

import ConnectWallet from "./components/connect_wallet";
import { useAccount } from "wagmi";

const LoginScreen = () => {
  const { address } = useAccount();
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
        </div>
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
};
export default LoginScreen;

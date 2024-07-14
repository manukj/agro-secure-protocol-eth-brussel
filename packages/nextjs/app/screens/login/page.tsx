"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ConnectWallet from "./components/connect_wallet";
import WorldcoinVerificationDialog from "./components/worldid_verification_dialog";
import { useAccount } from "wagmi";
import { useAuthContext } from "~~/contexts/AuthContext";

const LoginScreen = () => {
  const router = useRouter();
  const { verifiedAddress, setVerifiedAddress } = useAuthContext();
  const { address, isConnecting } = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isConnecting) {
      setIsLoading(false);
    }
  }, [isConnecting]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex place-content-center justify-items-center flex-col justify-center place-items-center">
        <p>Please Wait...</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex place-content-center justify-items-center flex-col justify-center place-items-center">
      <figure>
        <img src="/farm.png" width={400} height={200} />
      </figure>
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold">Agro Chain Protocol</h1>
      </div>
      {address ? (
        <div className="flex flex-col items-center text-center">
          {verifiedAddress ? (
            <div className="flex flex-col items-center text-center">
              <p>Verfiied As Human </p>
              <div className="card-actions justify-end">
                <div
                  className="btn btn-primary w-30"
                  onClick={() => {
                    router.push("/screens/insuranceform");
                  }}
                >
                  Get Insured
                </div>
                <div className="btn border-black w-30">Claim</div>
              </div>
            </div>
          ) : (
            <WorldcoinVerificationDialog
              appId={process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`}
              action={process.env.NEXT_PUBLIC_WLD_ACTION!}
              signal={address}
              onSuccess={result => {
                console.log("📡 Verified", result);
                setVerifiedAddress(address);
              }}
            />
          )}
        </div>
      ) : (
        <ConnectWallet />
      )}
    </div>
  );
};

export default LoginScreen;

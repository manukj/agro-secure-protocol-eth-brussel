"use client";

import React, { useEffect, useState } from "react";
import ConnectWallet from "../login/components/connect_wallet";
import WorldcoinVerificationDialog from "../login/components/worldid_verification_dialog";
import ButtonComponent from "./components/button";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const DAO: React.FC = () => {
  const { writeContractAsync: writeToApprovalAuthority } = useScaffoldWriteContract("ApprovalAuthority");
  const { address } = useAccount();
  const [step1Completed, setStep1Completed] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);
  const [step3Completed, setStep3Completed] = useState(false);

  console.log("📡 Address", address);
  useEffect(() => {
    if (address) {
      console.log("📡 Address", address);
      setStep1Completed(true);
    }
  }, []);

  const stakeETH = async () => {
    try {
      await writeToApprovalAuthority({
        functionName: "addAuthorizedUser",
        args: [address],
        value: parseEther("0.01"),
      });
      setStep3Completed(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8 place-content-center">
      <h1 className="text-2xl font-bold mb-4">Become a DAO Member</h1>
      <p className="text-lg mb-8 text-center">You can become a DAO member, easily and safely in three simple steps</p>
      <div className="flex flex-row justify-around w-full max-w-4xl mt-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Step 1</h1>
          {address ? (
            <ButtonComponent
              text="Connect Wallet"
              onClick={() => {
                console.log(" coonect to wallet");
              }}
              disabled={true}
              completed={true}
            />
          ) : (
            <ConnectWallet />
          )}
          <p>Connect your wallet to the platform</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Step 2</h1>
          {step2Completed ? (
            <ButtonComponent
              text="Verify as Human"
              onClick={() => {
                console.log("veryify human");
              }}
              disabled={!step1Completed || step2Completed}
              completed={step2Completed}
            />
          ) : (
            <WorldcoinVerificationDialog
              appId={process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`}
              action={process.env.NEXT_PUBLIC_WLD_ACTION!}
              signal={address!}
              onSuccess={result => {
                console.log("📡 Verified", result);
                setStep2Completed(true);
              }}
            />
          )}
          <p>Verify your Human</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Step 3</h1>

          <ButtonComponent
            text="Stake ETH"
            onClick={stakeETH}
            disabled={!step2Completed || step3Completed}
            completed={step3Completed}
          />
          <p>Stake your ETH to become a DAO member</p>
        </div>
      </div>
    </div>
  );
};

export default DAO;

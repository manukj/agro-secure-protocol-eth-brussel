"use client";

import React from "react";
import { IDKitWidget, ISuccessResult, VerificationLevel } from "@worldcoin/idkit";
import { parseAbiParameters } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { decode } from "~~/lib/wld";

interface WorldcoinVerificationProps {
  appId: `app_${string}`;
  action: string;
  signal: string;
  onSuccess: (result: ISuccessResult) => void;
}

const WorldcoinVerificationDialog: React.FC<WorldcoinVerificationProps> = ({ appId, action, signal, onSuccess }) => {
  const { writeContractAsync: worldCoinVerification } = useScaffoldWriteContract("WorldCoinVerification");

  const { address } = useAccount();
  const handleVerify = async (proof: ISuccessResult) => {
    const args = [
      address!,
      proof.merkle_root
        ? decode<bigint>(parseAbiParameters("uint256")[0], (proof.merkle_root ?? "") as `0x${string}`)
        : 0n,
      proof.nullifier_hash
        ? decode<bigint>(parseAbiParameters("uint256")[0], (proof.nullifier_hash ?? "") as `0x${string}`)
        : 0n,
      proof.proof
        ? decode<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint]>(
            parseAbiParameters("uint256[8]")[0],
            (proof.proof ?? "") as `0x${string}`,
          )
        : [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n],
    ];

    console.log("📡 WorldCoinVerification", args);

    try {
      await worldCoinVerification({
        functionName: "verifyAndExecute",
        args: [
          address!,
          proof.merkle_root
            ? decode<bigint>(parseAbiParameters("uint256")[0], (proof.merkle_root ?? "") as `0x${string}`)
            : 0n,
          proof.nullifier_hash
            ? decode<bigint>(parseAbiParameters("uint256")[0], (proof.nullifier_hash ?? "") as `0x${string}`)
            : 0n,
          proof.proof
            ? decode<[bigint, bigint, bigint, bigint, bigint, bigint, bigint, bigint]>(
                parseAbiParameters("uint256[8]")[0],
                (proof.proof ?? "") as `0x${string}`,
              )
            : [0n, 0n, 0n, 0n, 0n, 0n, 0n, 0n],
        ],
      });
      onSuccess(proof);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <IDKitWidget
      app_id={appId}
      action={action}
      onSuccess={(proof: ISuccessResult) => {
        console.log("📡 printing proof onSuccess", proof);
      }}
      handleVerify={handleVerify}
      verification_level={VerificationLevel.Orb}
      signal={signal}
    >
      {({ open }) => (
        <button className="btn btn-primary w-30" onClick={open}>
          Verify that you are a Human being
        </button>
      )}
    </IDKitWidget>
  );
};

export default WorldcoinVerificationDialog;

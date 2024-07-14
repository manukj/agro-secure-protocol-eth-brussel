"use client";

import React from "react";
import { IDKitWidget, ISuccessResult, VerificationLevel } from "@worldcoin/idkit";

interface WorldcoinVerificationProps {
  appId: `app_${string}`;
  action: string;
  signal: string;
  onSuccess: (result: ISuccessResult) => void;
}

const WorldcoinVerificationDialog: React.FC<WorldcoinVerificationProps> = ({ appId, action, signal, onSuccess }) => {
  const handleVerify = async (result: ISuccessResult) => {
    console.log(result);
    //TODO : Call contract and verify the user
  };

  return (
    <IDKitWidget
      app_id={appId}
      action={action}
      onSuccess={onSuccess}
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

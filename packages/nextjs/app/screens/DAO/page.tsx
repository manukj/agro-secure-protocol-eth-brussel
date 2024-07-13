import React, { useState } from "react";
import ButtonComponent from "./components/button";

const DAO: React.FC = () => {
  const [step1Completed, setStep1Completed] = useState(false);
  const [step2Completed, setStep2Completed] = useState(false);
  const [step3Completed, setStep3Completed] = useState(false);

  const handleStep1Click = () => {
    setStep1Completed(true);
  };

  const handleStep2Click = () => {
    setStep2Completed(true);
  };

  const handleStep3Click = () => {
    setStep3Completed(true);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Become a DAO Member</h1>
      <p className="text-lg mb-8 text-center">You can become a DAO member, easily and safely in three simple steps</p>
      <div className="flex flex-row justify-around w-full max-w-4xl mt-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Step 1</h1>
          <ButtonComponent text="Connect Wallet" onClick={handleStep1Click} disabled={step1Completed} />
          <p>Connect your wallet to the platform</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Step 2</h1>
          <ButtonComponent
            text="Verify as Human"
            onClick={handleStep2Click}
            disabled={!step1Completed || step2Completed}
          />
          <p>Complete the verification process</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Step 3</h1>
          <ButtonComponent text="Stake ETH" onClick={handleStep3Click} disabled={!step2Completed || step3Completed} />
          <p>Stake your ETH to become a DAO member</p>
        </div>
      </div>
    </div>
  );
};

export default DAO;

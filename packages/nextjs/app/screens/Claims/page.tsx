"use client";

import { useState } from "react";
import ClaimApprove from "./components/claimApprove";
import GetClaim from "./components/getClaim";

const Claims = () => {
  const [isApproved, setIsApproved] = useState(false);
  const handleApproval = () => {
    setIsApproved(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {isApproved ? <ClaimApprove /> : <GetClaim />}
      <button onClick={handleApproval} className="mt-4 p-2 bg-blue-500 text-white rounded">
        Approve Claim
      </button>
    </div>
  );
};

export default Claims;

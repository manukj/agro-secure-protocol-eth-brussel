import React, { useState } from "react";

type Claim = {
  id: number;
  location: string;
  status: "Pending" | "Approved" | "Rejected";
};

const initialClaims: Claim[] = [
  { id: 1, location: "New York", status: "Pending" },
  { id: 2, location: "Los Angeles", status: "Pending" },
  { id: 3, location: "Chicago", status: "Pending" },
];

const ClaimList: React.FC = () => {
  const [claims, setClaims] = useState<Claim[]>(initialClaims);

  const approveClaim = (id: number) => {
    const updatedClaims: Claim[] = claims.map(claim => (claim.id === id ? { ...claim, status: "Approved" } : claim));
    setClaims(updatedClaims);
  };

  const rejectClaim = (id: number) => {
    const updatedClaims: Claim[] = claims.map(claim => (claim.id === id ? { ...claim, status: "Rejected" } : claim));
    setClaims(updatedClaims);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center">Claims List</h1>
        {claims.map(claim => (
          <div key={claim.id} className="bg-white rounded-lg shadow mb-4 p-4 flex items-center justify-between">
            <p className="text-lg font-semibold mr-4">Claim ID: {claim.id}</p>
            <p className="text-gray-600 mr-4">Location: {claim.location}</p>
            <p className="mr-4">Status: {claim.status}</p>
            <div>
              <button className="btn btn-primary mr-2" onClick={() => approveClaim(claim.id)}>
                Approve
              </button>
              <button className="btn btn-active" onClick={() => rejectClaim(claim.id)}>
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClaimList;

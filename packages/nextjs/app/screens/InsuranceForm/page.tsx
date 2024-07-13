import React, { useState } from "react";

const InsuranceDetails = () => {
  const [farmSize, setFarmSize] = useState(100);
  const [location, setLocation] = useState("");
  const minFarmSize = 100;
  const maxFarmSize = 2000;
  const [displayedFarmSize, setDisplayedFarmSize] = useState(farmSize);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayedFarmSize(Number(e.target.value));
  };

  const handleRangeMouseUp = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setFarmSize(Number((e.target as HTMLInputElement).value));
  };

  const handleLocationChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setLocation(e.target.value); // Update location state when user types in the location input
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="card bg-base-100 w-100 shadow-xl rounded-md">
        <h1 className="text-2xl font-bold text-center mt-3">Insurance details</h1>
        <div className="card-body">
          <div className="flex flex-col">
            <p>Farm Size: {displayedFarmSize}</p>
            <input
              type="range"
              min={minFarmSize}
              max={maxFarmSize}
              value={displayedFarmSize}
              onChange={handleRangeChange}
              onMouseUp={handleRangeMouseUp}
              className="range"
            />
            <div className="flex justify-between mt-2">
              <span>{minFarmSize}</span>
              <span>{maxFarmSize}</span>
            </div>
            <div className="flex items-center mt-4">
              <p className="mr-4">Farm Location: </p>
              <input
                type="text"
                placeholder="Enter Location"
                value={location}
                onChange={handleLocationChange}
                className="input input-bordered"
              />
            </div>
            <p>Crop Type: </p>
            <select className="select select-bordered rounded-box shadow mt-2">
              <option>Wheat</option>
              <option>Rice</option>
              <option>Maize</option>
              <option>Barley</option>
            </select>
          </div>
        </div>
        <button className="btn btn-active btn-primary">Get Quotes</button>
      </div>
    </div>
  );
};

export default InsuranceDetails;

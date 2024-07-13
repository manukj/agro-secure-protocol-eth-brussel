import { useEffect, useState } from "react";

const Quotes = () => {
  const baseFare = 100;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [actualAmount, setActualAmount] = useState<number>(0);
  const [riskFactor, setRiskFactor] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    // mock api call add timer to show loading
    setTimeout(() => {
      const riskFactor = Math.random() * 100; // decimal point
      const actualAmount = baseFare * riskFactor;

      setActualAmount(actualAmount);
      setRiskFactor(riskFactor);
      setIsLoading(false);
      console.log("isLoading", isLoading);
    }, 2000);
  }, []);
  return (
    <div className="flex flex-col items-center min-h-screen bg-base-200 mt-4 rounded-md">
      <h1 className="text-2xl font-bold mb-6">Choose Your Plan</h1>
      <div className="flex flex-row justify-center gap-4">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/Eth silver.gif" className="rounded-xl" style={{ width: "100px", height: "100px" }} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">SILVER</h2>
            <p>
              <span>1 year</span> Validity
            </p>
            <p className="text-4xl">${((actualAmount / 12) * 1.0).toFixed(2)}/mo</p>
            <p className="font-bold">Insurance Specifications: </p>
            <ul>
              <li>Insured Amount - {actualAmount.toFixed(2)}</li>
              <li>Risk Factor - {riskFactor.toFixed(2)}</li>
            </ul>
            <p className="font-bold">Additional Coverage: </p>
            <ul>
              <li>Access to weather forecasting tools</li>
              <li>Basic agronomy advice</li>
            </ul>
          </div>
          <button className="btn btn-active btn-primary">Purchase</button>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/Eth gold.gif" className="rounded-xl" style={{ width: "100px", height: "100px" }} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">GOLD</h2>
            <p>
              <span>2 year</span> Validity
            </p>
            <p className="text-4xl">${((actualAmount / 12) * 0.9 * 2).toFixed(2)}/mo</p>
            <p className="font-bold">Insurance Specifications: </p>
            <ul>
              <li>Insured Amount - {actualAmount.toFixed(2)}</li>
              <li>Risk Factor - {riskFactor.toFixed(2)}</li>
            </ul>
            <p className="font-bold">Additional Coverage: </p>
            <ul>
              <li>Advanced weather forecasting tools</li>
              <li>Replanting coverage</li>
            </ul>
          </div>
          <button className="btn btn-active btn-primary">Purchase</button>
        </div>

        <div className="card bg-base-100 w-96 shadow-xl">
          <figure className="px-10 pt-10">
            <img src="/Eth platinum.gif" className="rounded-xl" style={{ width: "100px", height: "100px" }} />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">PLATINUM</h2>
            <p>
              <span>5 year</span> Validity
            </p>
            <p className="text-4xl">${((actualAmount / 12) * 0.8 * 5).toFixed(2)}/mo</p>
            <p className="font-bold">Insurance Specifications: </p>
            <ul>
              <li>Insured Amount - {actualAmount.toFixed(2)}</li>
              <li>Risk Factor - {riskFactor.toFixed(2)}</li>
            </ul>
            <p className="font-bold">Additional Coverage: </p>
            <ul>
              <li>Comprehensive agronomy support including field visits</li>
              <li>Price protection against market fluctuations</li>
            </ul>
          </div>
          <button className="btn btn-active btn-primary">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Quotes;

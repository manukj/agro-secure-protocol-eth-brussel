const LoadingFromChainlink = () => {
  return (
    <div className="h-screen w-screen flex flex-col place-content-center place-items-center">
      <img src="/chainlink.png" className="animate-ping w-24" alt="Chainlink logo" />
      <h1 className="text-2xl font-bold mt-8 text-gray-400">Calculating Insurance Premium from Chainlink</h1>
      <h1 className="text-4xl font-bold ">Please wait, this might take a bit longer...</h1>
    </div>
  );
};

export default LoadingFromChainlink;

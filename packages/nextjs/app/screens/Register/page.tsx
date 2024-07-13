import { useAccount } from "wagmi";

const RegisterScreen = () => {
  const { address } = useAccount();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white rounded shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Connect to your Wallet</h1>
        {address != null ? (
          <div>
            <p className="mb-2">Connected Address:</p>
            <p className="font-mono text-lg">{address}</p>
          </div>
        ) : (
          <div> Connect wallet </div>
        )}
      </div>
    </div>
  );
};

export default RegisterScreen;

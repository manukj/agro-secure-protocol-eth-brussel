import Lottie from "lottie-react";
import wallet from "~~/components/assets/wallet.json";

const ConnectWallet = () => {
  const celebrateStyle = {
    height: 600,
    width: 600,
  };
  return (
    <div className="h-full w-full flex-col bg-red-100 place-content-center place-items-center place-self-center">
      <h1>Connect Wallet</h1>
      <Lottie animationData={wallet} style={celebrateStyle} />
    </div>
  );
};

export default ConnectWallet;

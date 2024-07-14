import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Contract } from "ethers";

const deployWorldCoinVerification = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("WorldCoinVerification", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const worldCoinVerificationContract = await hre.ethers.getContract<Contract>("WorldCoinVerification", deployer);
  console.log("👋 WorldCoinVerification deployed at :", await worldCoinVerificationContract.getAddress());
};

export default deployWorldCoinVerification;
deployWorldCoinVerification.tags = ["WorldCoinVerification"];

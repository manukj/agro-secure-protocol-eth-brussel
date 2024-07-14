import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Contract } from "ethers";

const deployWorldCoinManager = async (hre: HardhatRuntimeEnvironment) => {
  const worldCoinVerificationContractAddress = process.env.WORLD_COIN_VERIFICATION_CONTRACT_ADDRESS;
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("WorldCoinManager", {
    from: deployer,
    log: true,
    autoMine: true,
    args: [worldCoinVerificationContractAddress],
  });

  const worldCoinManager = await hre.ethers.getContract<Contract>("WorldCoinManager", deployer);
  console.log("👋 WorldCoinManager deployed at :", await worldCoinManager.getAddress());
};

export default deployWorldCoinManager;
deployWorldCoinManager.tags = ["WorldCoinManager"];

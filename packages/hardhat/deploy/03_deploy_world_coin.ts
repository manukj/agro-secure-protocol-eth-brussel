import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Contract } from "ethers";

const deployWorldCoinVerification = async (hre: HardhatRuntimeEnvironment) => {
  const worldID = process.env.WORLD_COIN_WORLD_ID;
  const worldAppId = process.env.WORLD_COIN_APP_ID;
  const actionID = process.env.WORLD_COIN_ACTION_ID;
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("WorldCoinVerification", {
    from: deployer,
    log: true,
    autoMine: true,
    args: [worldID, worldAppId, actionID],
  });

  const worldCoinVerificationContract = await hre.ethers.getContract<Contract>("WorldCoinVerification", deployer);
  console.log("👋 WorldCoinVerification deployed at :", await worldCoinVerificationContract.getAddress());
};

export default deployWorldCoinVerification;
deployWorldCoinVerification.tags = ["WorldCoinVerification"];

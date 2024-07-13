import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Contract } from "ethers";

const deployChainLink = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("WeatherRiskFunctionsConsumer", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const riskContract = await hre.ethers.getContract<Contract>("WeatherRiskFunctionsConsumer", deployer);
  console.log("👋 ChainLink Weather Risk Factor deployed at 1: ", await riskContract.owner());
  console.log("👋 ChainLink Weather Risk Factor deployed at 2:", await riskContract.getAddress());
  console.log("👋 ChainLink Weather Risk Factor deployed at 3:", riskContract.target);
};

export default deployChainLink;
deployChainLink.tags = ["WeatherRiskFunctionsConsumer"];

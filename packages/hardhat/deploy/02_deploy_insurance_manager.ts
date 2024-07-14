import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Contract } from "ethers";

const deployInsuranceManager = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("InsuranceManager", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const insuranceContract = await hre.ethers.getContract<Contract>("InsuranceManager", deployer);
  console.log("👋 InsuranceManager deployed by :", await insuranceContract.owner());
  console.log("👋 InsuranceManager deployed at :", await insuranceContract.getAddress());
};

export default deployInsuranceManager;
deployInsuranceManager.tags = ["InsuranceManager"];

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Contract } from "ethers";

const deployApprovalAuthority = async (hre: HardhatRuntimeEnvironment) => {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("ApprovalAuthority", {
    from: deployer,
    log: true,
    autoMine: true,
  });

  const approvalAuthority = await hre.ethers.getContract<Contract>("ApprovalAuthority", deployer);
  console.log("👋 ApprovalAuthority deployed at :", await approvalAuthority.getAddress());
};

export default deployApprovalAuthority;
deployApprovalAuthority.tags = ["ApprovalAuthority"];

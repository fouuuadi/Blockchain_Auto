// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const heticModule = buildModule("heticModule", (m) => {
  const hetic = m.contract("Hetic");

  return { hetic };
});

export default heticModule;
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [process.env.DEPLOYER_PK!]
    },
    fantom_testnet: {
      url: 'https://fantom.api.onfinality.io/public',
      accounts: [process.env.DEPLOYER_PK!]
    }
  }
};

export default config;

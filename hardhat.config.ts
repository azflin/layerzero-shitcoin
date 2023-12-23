require('dotenv').config()
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";


const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [process.env.DEPLOYER_PK!]
    },
    fantom_testnet: {
      url: 'https://rpc.ankr.com/fantom_testnet',
      accounts: [process.env.DEPLOYER_PK!]
    }
  },
  etherscan: {
    apiKey: {
      goerli: process.env.GOERLI_API_KEY!,
      ftmTestnet: process.env.FANTOM_API_KEY!
    }
  }
};

export default config;

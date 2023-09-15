require('@nomicfoundation/hardhat-toolbox');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    bsc: {
      url: `${process.env.BSC_RPC_MAINNET}`,
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY],
    },
    bscTestnet: {
      url: `${process.env.BSC_RPC_TESTNET}`,
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: {
      bsc : process.env.BSCSCAN_API_KEY,
      bscTestnet : process.env.BSCSCAN_API_KEY,
    },
  },
};

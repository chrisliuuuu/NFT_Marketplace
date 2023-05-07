
const HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "98e8a9488af042b492d5f6dd2314c0c7";
const mnemonic = "height bullet neither patch pig bread noble popular type head rich engine";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      //from: "0xF25AC2C7ACad7d05777159bF22c81166c41e2897"
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/98e8a9488af042b492d5f6dd2314c0c7`),
      network_id: 11155111,
      gas: 5000000,
      gasPrice: 2000000000 // 20 Gwei
    }
  },
  compilers: {
    solc:{
      version: "0.8.19",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};


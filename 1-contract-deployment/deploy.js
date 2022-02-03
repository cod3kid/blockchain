const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "possible milk pole gap exhaust liar scissors silent select tree monitor dad",
  "https://rinkeby.infura.io/v3/d8cc776b5fcd45f1a8480203d0beb116"
);

const web3 = new Web3(provider);

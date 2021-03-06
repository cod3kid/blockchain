const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "possible milk pole gap exhaust liar scissors silent select tree monitor dad",
  "https://rinkeby.infura.io/v3/d8cc776b5fcd45f1a8480203d0beb116"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Get first account account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi Rinkeby !"],
    })
    .send({
      gas: "1000000",
      from: accounts[0],
    });

  console.log("Contract deployed to", result.options.address);
};

deploy();

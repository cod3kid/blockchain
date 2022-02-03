const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { bytecode, interface } = require("../compile");

let accounts, inbox;
const INITIAL_STRING = "Hello World";

beforeEach(async () => {
  //fetch all pre-generated accounts by ganache
  accounts = await web3.eth.getAccounts();

  // deploy the smart contract

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [INITIAL_STRING],
    })
    .send({
      from: accounts[0],
      gas: "1000000",
    });
});

describe("Inbox", () => {
  it("deploys a contracts", () => {
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message.call();
    assert.equal(message, INITIAL_STRING);
  });
});

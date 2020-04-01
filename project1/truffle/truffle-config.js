module.exports = {
  rpc: {
    host: "localhost",
    port: 8543
  },
  networks: {
    development: {
      host: "localhost", //our network is running on localhost
      port: 8543, // port where your blockchain is running
      network_id: "*",
      from: "0x580e4ba88d5728d2a8f73dc61e9879be34502b25", // use the account-id generated during the setup process
      gas: 20000000
    }
  }
};
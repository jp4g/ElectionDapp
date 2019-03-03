require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');



module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, process.env.INFURA_API)
      },
      gasPrice: 4000000000,
      network_id: 3
    },
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // match any network id
    }
  }
};

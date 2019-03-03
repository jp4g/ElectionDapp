module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  development: {
    host: "127.0.0.1",
    port: 8545,
    network_id: "*" // match any network id
  }
};

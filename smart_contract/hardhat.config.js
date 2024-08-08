require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/48oFEIyyne3SaGkPPMy1EUe0LPiFe4jB',
      accounts: ['facffb46e79c06139b270425f7129b63044ef3bc2de10907a30517888d123120'],
    },
  },
};
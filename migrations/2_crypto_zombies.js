var CryptoZombies = artifacts.require("../contracts/ZombieOwnership.sol");
module.exports = function(deployer) {
  deployer.deploy(CryptoZombies);
};
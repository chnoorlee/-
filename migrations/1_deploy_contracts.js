const VotingSystem = artifacts.require("VotingSystem");
const ZKVoting = artifacts.require("ZKVoting");

module.exports = async function(deployer, network, accounts) {
  // 部署基本投票系统合约
  await deployer.deploy(VotingSystem);
  const votingSystem = await VotingSystem.deployed();
  console.log("VotingSystem 合约已部署到地址:", votingSystem.address);
  
  // 部署零知识证明投票合约
  // 在实际应用中，这里应该部署一个真正的验证者合约
  // 现在我们使用第一个账户地址作为模拟验证者
  await deployer.deploy(ZKVoting, accounts[0]);
  const zkVoting = await ZKVoting.deployed();
  console.log("ZKVoting 合约已部署到地址:", zkVoting.address);
};
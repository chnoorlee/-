const ZKVoting = artifacts.require("ZKVoting");
const { time } = require('@openzeppelin/test-helpers');
const truffleAssert = require('truffle-assertions');

contract("ZKVoting", accounts => {
  const [admin, voter1, voter2, voter3] = accounts;
  let zkVoting;
  
  // 测试数据
  const electionName = "零知识证明测试选举";
  const candidateCount = 3;
  
  // 当前时间和结束时间（一周后）
  let startTime;
  let endTime;
  
  beforeEach(async () => {
    // 部署合约 - 使用admin地址作为模拟验证者地址
    zkVoting = await ZKVoting.new(admin, { from: admin });
    
    // 设置时间
    const now = await time.latest();
    startTime = now.toNumber();
    endTime = startTime + time.duration.days(7).toNumber();
  });
  
  describe("创建选举", () => {
    it("应该成功创建选举", async () => {
      // 创建选举
      const tx = await zkVoting.createElection(
        electionName,
        startTime,
        endTime,
        candidateCount,
        { from: admin }
      );
      
      // 验证事件
      truffleAssert.eventEmitted(tx, 'ElectionCreated', (ev) => {
        return ev.electionId.toNumber() === 1 && ev.name === electionName;
      });
      
      // 验证选举数量
      const electionCount = await zkVoting.electionCount();
      assert.equal(electionCount.toNumber(), 1, "选举数量应该为1");
    });
    
    it("应该验证开始时间早于结束时间", async () => {
      // 尝试创建结束时间早于开始时间的选举
      await truffleAssert.reverts(
        zkVoting.createElection(
          electionName,
          endTime, // 交换开始和结束时间
          startTime,
          candidateCount,
          { from: admin }
        ),
        "开始时间必须早于结束时间"
      );
    });
    
    it("应该验证至少有两名候选人", async () => {
      // 尝试创建只有一名候选人的选举
      await truffleAssert.reverts(
        zkVoting.createElection(
          electionName,
          startTime,
          endTime,
          1, // 只有一名候选人
          { from: admin }
        ),
        "至少需要两名候选人"
      );
    });
  });
  
  describe("零知识证明投票", () => {
    beforeEach(async () => {
      // 创建选举
      await zkVoting.createElection(
        electionName,
        startTime,
        endTime,
        candidateCount,
        { from: admin }
      );
    });
    
    it("应该允许使用零知识证明投票", async () => {
      const electionId = 1;
      const candidateId = 2; // 投给第二个候选人
      const nullifier = web3.utils.keccak256("unique-identifier");
      const proof = "0x"; // 模拟的证明数据
      
      // 提交带有零知识证明的投票
      const tx = await zkVoting.castVoteWithZKProof(
        electionId,
        candidateId,
        nullifier,
        proof,
        { from: voter1 }
      );
      
      // 验证事件
      truffleAssert.eventEmitted(tx, 'VoteCast', (ev) => {
        return ev.electionId.toNumber() === electionId && ev.nullifier === nullifier;
      });
      
      // 检查候选人票数
      const voteCount = await zkVoting.getVoteCount(electionId, candidateId);
      assert.equal(voteCount.toNumber(), 1, "候选人应该有1票");
    });
    
    it("应该防止使用相同的nullifier重复投票", async () => {
      const electionId = 1;
      const candidateId = 1;
      const nullifier = web3.utils.keccak256("unique-identifier");
      const proof = "0x"; // 模拟的证明数据
      
      // 第一次投票
      await zkVoting.castVoteWithZKProof(
        electionId,
        candidateId,
        nullifier,
        proof,
        { from: voter1 }
      );
      
      // 尝试使用相同的nullifier再次投票
      await truffleAssert.reverts(
        zkVoting.castVoteWithZKProof(
          electionId,
          candidateId,
          nullifier,
          proof,
          { from: voter1 }
        ),
        "此证明已被使用"
      );
    });
    
    it("应该验证选举活动状态", async () => {
      const electionId = 1;
      const candidateId = 1;
      const nullifier = web3.utils.keccak256("unique-identifier");
      const proof = "0x"; // 模拟的证明数据
      
      // 结束选举
      await time.increase(time.duration.days(8)); // 增加时间超过结束时间
      await zkVoting.endElection(electionId, { from: admin });
      
      // 尝试对已结束的选举投票
      await truffleAssert.reverts(
        zkVoting.castVoteWithZKProof(
          electionId,
          candidateId,
          nullifier,
          proof,
          { from: voter1 }
        ),
        "投票活动不存在或已结束"
      );
    });
  });
  
  describe("结束选举", () => {
    beforeEach(async () => {
      // 创建选举
      await zkVoting.createElection(
        electionName,
        startTime,
        endTime,
        candidateCount,
        { from: admin }
      );
    });
    
    it("应该成功结束选举", async () => {
      const electionId = 1;
      
      // 增加时间超过结束时间
      await time.increase(time.duration.days(8));
      
      // 结束选举
      await zkVoting.endElection(electionId, { from: admin });
      
      // 验证选举状态
      const election = await zkVoting.elections(electionId);
      assert.equal(election.isActive, false, "选举应该已结束");
    });
    
    it("应该验证选举时间已结束", async () => {
      const electionId = 1;
      
      // 尝试在结束时间之前结束选举
      await truffleAssert.reverts(
        zkVoting.endElection(electionId, { from: admin }),
        "投票时间尚未结束"
      );
    });
  });
});
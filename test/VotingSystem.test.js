const VotingSystem = artifacts.require("VotingSystem");
const { time } = require('@openzeppelin/test-helpers');
const truffleAssert = require('truffle-assertions');

contract("VotingSystem", accounts => {
  const [admin, voter1, voter2, voter3] = accounts;
  let votingSystem;
  
  // 测试数据
  const electionName = "测试选举";
  const electionDescription = "这是一个测试选举";
  const candidateNames = ["候选人1", "候选人2", "候选人3"];
  const candidateInfos = ["信息1", "信息2", "信息3"];
  
  // 当前时间和结束时间（一周后）
  let startTime;
  let endTime;
  
  beforeEach(async () => {
    // 部署合约
    votingSystem = await VotingSystem.new({ from: admin });
    
    // 设置时间
    const now = await time.latest();
    startTime = now.toNumber();
    endTime = startTime + time.duration.days(7).toNumber();
  });
  
  describe("创建选举", () => {
    it("应该成功创建选举", async () => {
      // 创建选举
      const tx = await votingSystem.createElection(
        electionName,
        electionDescription,
        startTime,
        endTime,
        candidateNames,
        candidateInfos,
        { from: admin }
      );
      
      // 验证事件
      truffleAssert.eventEmitted(tx, 'ElectionCreated', (ev) => {
        return ev.electionId.toNumber() === 1 && ev.name === electionName;
      });
      
      // 验证选举数量
      const electionCount = await votingSystem.electionCount();
      assert.equal(electionCount.toNumber(), 1, "选举数量应该为1");
      
      // 验证候选人数量
      const candidateCount = await votingSystem.getCandidateCount(1);
      assert.equal(candidateCount.toNumber(), 3, "候选人数量应该为3");
    });
    
    it("应该验证开始时间早于结束时间", async () => {
      // 尝试创建结束时间早于开始时间的选举
      await truffleAssert.reverts(
        votingSystem.createElection(
          electionName,
          electionDescription,
          endTime, // 交换开始和结束时间
          startTime,
          candidateNames,
          candidateInfos,
          { from: admin }
        ),
        "开始时间必须早于结束时间"
      );
    });
    
    it("应该验证至少有两名候选人", async () => {
      // 尝试创建只有一名候选人的选举
      await truffleAssert.reverts(
        votingSystem.createElection(
          electionName,
          electionDescription,
          startTime,
          endTime,
          ["单一候选人"],
          ["单一信息"],
          { from: admin }
        ),
        "至少需要两名候选人"
      );
    });
  });
  
  describe("投票功能", () => {
    beforeEach(async () => {
      // 创建选举
      await votingSystem.createElection(
        electionName,
        electionDescription,
        startTime,
        endTime,
        candidateNames,
        candidateInfos,
        { from: admin }
      );
    });
    
    it("应该允许投票并揭示", async () => {
      const electionId = 1;
      const candidateId = 2; // 投给第二个候选人
      const blindingFactor = web3.utils.keccak256("secret");
      
      // 计算承诺哈希
      const commitmentHash = web3.utils.soliditySha3(
        { type: 'uint256', value: candidateId },
        { type: 'bytes32', value: blindingFactor }
      );
      
      // 提交投票
      await votingSystem.vote(electionId, commitmentHash, { from: voter1 });
      
      // 揭示投票
      await votingSystem.revealVote(electionId, candidateId, blindingFactor, { from: voter1 });
      
      // 检查候选人票数
      const candidate = await votingSystem.getCandidate(electionId, candidateId);
      assert.equal(candidate.voteCount.toNumber(), 1, "候选人应该有1票");
    });
    
    it("应该防止重复投票", async () => {
      const electionId = 1;
      const candidateId = 1;
      const blindingFactor = web3.utils.keccak256("secret");
      
      // 计算承诺哈希
      const commitmentHash = web3.utils.soliditySha3(
        { type: 'uint256', value: candidateId },
        { type: 'bytes32', value: blindingFactor }
      );
      
      // 第一次投票
      await votingSystem.vote(electionId, commitmentHash, { from: voter1 });
      
      // 尝试使用相同的承诺哈希再次投票
      await truffleAssert.reverts(
        votingSystem.vote(electionId, commitmentHash, { from: voter1 }),
        "此承诺哈希已被使用"
      );
    });
    
    it("应该验证选举活动状态", async () => {
      const electionId = 1;
      const candidateId = 1;
      const blindingFactor = web3.utils.keccak256("secret");
      const commitmentHash = web3.utils.soliditySha3(
        { type: 'uint256', value: candidateId },
        { type: 'bytes32', value: blindingFactor }
      );
      
      // 结束选举
      await time.increase(time.duration.days(8)); // 增加时间超过结束时间
      await votingSystem.endElection(electionId, { from: admin });
      
      // 尝试对已结束的选举投票
      await truffleAssert.reverts(
        votingSystem.vote(electionId, commitmentHash, { from: voter1 }),
        "投票活动不存在或已结束"
      );
    });
  });
  
  describe("结束选举", () => {
    beforeEach(async () => {
      // 创建选举
      await votingSystem.createElection(
        electionName,
        electionDescription,
        startTime,
        endTime,
        candidateNames,
        candidateInfos,
        { from: admin }
      );
    });
    
    it("应该只允许创建者结束选举", async () => {
      const electionId = 1;
      
      // 增加时间超过结束时间
      await time.increase(time.duration.days(8));
      
      // 非创建者尝试结束选举
      await truffleAssert.reverts(
        votingSystem.endElection(electionId, { from: voter1 }),
        "只有创建者可以结束投票"
      );
      
      // 创建者结束选举
      const tx = await votingSystem.endElection(electionId, { from: admin });
      
      // 验证事件
      truffleAssert.eventEmitted(tx, 'ElectionEnded');
      
      // 验证选举状态
      const isActive = await votingSystem.isElectionActive(electionId);
      assert.equal(isActive, false, "选举应该已结束");
    });
    
    it("应该验证选举时间已结束", async () => {
      const electionId = 1;
      
      // 尝试在结束时间之前结束选举
      await truffleAssert.reverts(
        votingSystem.endElection(electionId, { from: admin }),
        "投票时间尚未结束"
      );
    });
  });
});
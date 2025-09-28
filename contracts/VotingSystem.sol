// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title 匿名加密投票系统
 * @dev 基于以太坊区块链的匿名投票系统
 */
contract VotingSystem {
    // 投票活动结构
    struct Election {
        uint256 id;
        string name;
        string description;
        uint256 startTime;
        uint256 endTime;
        bool isActive;
        address creator;
        mapping(uint256 => Candidate) candidates;
        uint256 candidateCount;
        mapping(bytes32 => bool) hasVoted; // 使用承诺哈希而非地址，保证匿名性
    }

    // 候选人结构
    struct Candidate {
        uint256 id;
        string name;
        string info;
        uint256 voteCount;
    }

    // 投票活动计数器
    uint256 public electionCount;
    
    // 存储所有投票活动
    mapping(uint256 => Election) public elections;
    
    // 事件声明
    event ElectionCreated(uint256 electionId, string name, address creator);
    event VoteCast(uint256 electionId, bytes32 commitmentHash);
    event ElectionEnded(uint256 electionId, uint256 totalVotes);

    /**
     * @dev 创建新的投票活动
     */
    function createElection(
        string memory _name,
        string memory _description,
        uint256 _startTime,
        uint256 _endTime,
        string[] memory _candidateNames,
        string[] memory _candidateInfos
    ) public {
        require(_startTime < _endTime, unicode"开始时间必须早于结束时间");
        require(_candidateNames.length == _candidateInfos.length, unicode"候选人信息不匹配");
        require(_candidateNames.length > 1, unicode"至少需要两名候选人");

        electionCount++;
        Election storage newElection = elections[electionCount];
        newElection.id = electionCount;
        newElection.name = _name;
        newElection.description = _description;
        newElection.startTime = _startTime;
        newElection.endTime = _endTime;
        newElection.isActive = true;
        newElection.creator = msg.sender;
        newElection.candidateCount = 0;

        // 添加候选人
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            newElection.candidateCount++;
            newElection.candidates[newElection.candidateCount] = Candidate({
                id: newElection.candidateCount,
                name: _candidateNames[i],
                info: _candidateInfos[i],
                voteCount: 0
            });
        }

        emit ElectionCreated(electionCount, _name, msg.sender);
    }

    /**
     * @dev 投票函数 - 使用承诺方案保证匿名性
     * @param _electionId 投票活动ID
     * @param _commitmentHash 投票承诺哈希 (keccak256(abi.encodePacked(candidateId, voterBlindingFactor)))
     */
    function vote(uint256 _electionId, bytes32 _commitmentHash) public {
        Election storage election = elections[_electionId];
        
        require(election.isActive, unicode"投票活动不存在或已结束");
        require(block.timestamp >= election.startTime, unicode"投票尚未开始");
        require(block.timestamp <= election.endTime, unicode"投票已结束");
        require(!election.hasVoted[_commitmentHash], unicode"此承诺哈希已被使用");
        
        election.hasVoted[_commitmentHash] = true;
        
        emit VoteCast(_electionId, _commitmentHash);
    }
    
    /**
     * @dev 揭示投票 - 验证承诺并计票
     * @param _electionId 投票活动ID
     * @param _candidateId 候选人ID
     * @param _blindingFactor 用于生成承诺的随机因子
     */
    function revealVote(uint256 _electionId, uint256 _candidateId, bytes32 _blindingFactor) public {
        Election storage election = elections[_electionId];
        
        require(election.isActive, unicode"投票活动不存在或已结束");
        require(_candidateId > 0 && _candidateId <= election.candidateCount, unicode"无效的候选人ID");
        
        // 重新计算承诺哈希
        bytes32 commitmentHash = keccak256(abi.encodePacked(_candidateId, _blindingFactor));
        
        require(election.hasVoted[commitmentHash], unicode"未找到匹配的投票承诺");
        
        // 增加候选人票数
        election.candidates[_candidateId].voteCount++;
        
        // 防止重复揭示
        election.hasVoted[commitmentHash] = false;
    }
    
    /**
     * @dev 结束投票活动
     */
    function endElection(uint256 _electionId) public {
        Election storage election = elections[_electionId];
        
        require(msg.sender == election.creator, unicode"只有创建者可以结束投票");
        require(election.isActive, unicode"投票活动已结束或不存在");
        require(block.timestamp > election.endTime, unicode"投票时间尚未结束");
        
        election.isActive = false;
        
        uint256 totalVotes = 0;
        for (uint256 i = 1; i <= election.candidateCount; i++) {
            totalVotes += election.candidates[i].voteCount;
        }
        
        emit ElectionEnded(_electionId, totalVotes);
    }
    
    /**
     * @dev 获取候选人信息
     */
    function getCandidate(uint256 _electionId, uint256 _candidateId) public view returns (
        uint256 id,
        string memory name,
        string memory info,
        uint256 voteCount
    ) {
        Election storage election = elections[_electionId];
        require(_candidateId > 0 && _candidateId <= election.candidateCount, unicode"无效的候选人ID");
        
        Candidate storage candidate = election.candidates[_candidateId];
        return (
            candidate.id,
            candidate.name,
            candidate.info,
            candidate.voteCount
        );
    }
    
    /**
     * @dev 获取候选人数量
     */
    function getCandidateCount(uint256 _electionId) public view returns (uint256) {
        return elections[_electionId].candidateCount;
    }
    
    /**
     * @dev 检查投票活动是否有效
     */
    function isElectionActive(uint256 _electionId) public view returns (bool) {
        Election storage election = elections[_electionId];
        return election.isActive && block.timestamp >= election.startTime && block.timestamp <= election.endTime;
    }
}
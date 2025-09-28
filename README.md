# 基于区块链的匿名加密投票系统

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-%5E18.0.0-blue)](https://reactjs.org/)

## 🎯 项目简介

这是一个基于以太坊区块链技术的去中心化匿名投票系统，旨在解决传统投票系统中存在的透明度不足、可篡改性和隐私泄露等问题。通过智能合约和零知识证明技术，实现了一个安全、透明、匿名且不可篡改的投票平台。

### 🌟 核心特性
- ✅ **去中心化架构** - 基于以太坊区块链，无需中央权威机构
- 🔒 **匿名性保护** - 使用零知识证明技术确保投票者身份完全匿名
- 🛡️ **安全性保障** - 防双重投票、防篡改、严格权限控制
- 🎨 **用户友好界面** - 基于React的现代化Web界面
- 📊 **实时结果展示** - 投票结果实时更新和可视化展示

## 🛠️ 技术栈

### 前端技术
- **React.js** - 用户界面框架
- **Web3.js/Ethers.js** - 区块链交互库
- **Material-UI** - UI组件库
- **Chart.js** - 数据可视化

### 区块链技术
- **Solidity** - 智能合约开发语言
- **Truffle** - 智能合约开发框架
- **Ganache** - 本地区块链测试环境
- **OpenZeppelin** - 安全的智能合约库

### 隐私保护
- **zk-SNARKs** - 零知识证明算法
- **Circom** - 零知识证明电路编写
- **SnarkJS** - JavaScript零知识证明库

## 📋 项目结构

```
blockchain-voting/
├── 📁 contracts/              # 智能合约代码
│   ├── VotingSystem.sol      # 基本投票系统合约
│   └── ZKVoting.sol          # 零知识证明投票合约
├── 📁 migrations/             # 合约部署脚本
│   └── 1_deploy_contracts.js # 部署配置
├── 📁 client/                 # 前端应用
│   ├── 📁 src/
│   │   ├── 📁 components/    # React组件
│   │   ├── 📁 contracts/     # 合约ABI文件
│   │   └── 📁 workers/       # Web Workers
│   └── package.json
├── 📁 test/                   # 测试用例
│   ├── VotingSystem.test.js  # 投票系统测试
│   └── ZKVoting.test.js      # 零知识证明测试
├── 📁 docs/                   # 项目文档
│   ├── 项目介绍.md           # 详细项目介绍
│   └── 使用须知.md           # 使用指南和注意事项
└── README.md                  # 项目说明文档
```

## 🚀 快速开始

### 📋 前置条件

⚠️ **重要提醒：使用本应用前必须安装MetaMask！**

- **Node.js** (推荐v16或v18) - [下载地址](https://nodejs.org/)
- **npm** 或 **yarn** - 包管理器
- **Git** - 版本控制工具
- **MetaMask** - 浏览器钱包扩展 **（必需！）**
  - 如果未安装MetaMask，应用将显示"请安装MetaMask以使用此应用"错误
  - 请访问 [MetaMask官网](https://metamask.io/) 下载安装

### 🔧 系统要求

#### 硬件要求
- **处理器**: Intel i3 或 AMD 同等级别以上
- **内存**: 至少 4GB RAM（推荐 8GB 以上）
- **存储空间**: 至少 1GB 可用磁盘空间
- **网络**: 稳定的互联网连接

#### 软件要求
- **操作系统**: Windows 10/11、macOS 10.14+、Ubuntu 18.04+
- **浏览器**: Chrome 90+、Firefox 88+、Safari 14+、Edge 90+
- **Node.js**: 版本 16.0 或以上
- **MetaMask**: 浏览器扩展钱包（必需）

### 🔧 安装步骤

#### 1. 克隆项目
```bash
git clone [仓库地址]
cd block-chain投票
```

#### 2. 安装全局依赖
```bash
# 安装Truffle和Ganache
npm install -g truffle ganache
```

#### 3. 安装项目依赖
```bash
# 安装后端依赖
npm install

# 安装前端依赖
cd client
npm install
cd ..
```

#### 4. 启动本地区块链
```bash
# 启动Ganache (新终端窗口)
ganache
```

#### 5. 部署智能合约
```bash
# 编译合约
truffle compile

# 部署到本地网络
truffle migrate --network development
```

#### 6. 配置MetaMask（重要！）

⚠️ **注意：如果您看到"请安装MetaMask以使用此应用"错误，请按以下步骤操作：**

##### 6.1 安装MetaMask
1. 访问 [MetaMask官网](https://metamask.io/)
2. 点击"Download"下载适合您浏览器的扩展：
   - **Chrome**: [Chrome Web Store](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
   - **Firefox**: [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
   - **Edge**: [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm)
3. 安装完成后，点击浏览器工具栏中的MetaMask图标
4. 创建新钱包或导入现有钱包
5. **重要**：妥善保存助记词，不要泄露给任何人

##### 6.2 添加本地网络
1. 打开MetaMask扩展
2. 点击顶部的网络下拉菜单（默认显示"以太坊主网"）
3. 点击"添加网络"或"Add Network"
4. 选择"手动添加网络"
5. 输入以下网络信息：
   - **网络名称**: Ganache Local
   - **新RPC URL**: http://127.0.0.1:7545
   - **链ID**: 1337
   - **货币符号**: ETH
   - **区块浏览器URL**: （留空）
6. 点击"保存"

##### 6.3 导入测试账户
1. 启动Ganache后，复制第一个账户的私钥
2. 在MetaMask中点击右上角的账户图标
3. 选择"导入账户"
4. 粘贴私钥并点击"导入"
5. 确认账户余额显示为100 ETH

##### 6.4 常见问题解决
- **问题**: 页面显示"请安装MetaMask以使用此应用"
  - **解决**: 确保MetaMask已安装并已解锁，刷新页面重试
- **问题**: 无法连接到本地网络
  - **解决**: 检查Ganache是否正在运行，确认RPC URL为 http://127.0.0.1:7545
- **问题**: 交易失败
  - **解决**: 确保选择了正确的网络（Ganache Local）且账户有足够余额

#### 7. 启动前端应用
```bash
cd client
npm start
```

🎉 **完成！** 访问 http://localhost:3000 开始使用投票系统

## 🌐 使用时需要打开的网站

在使用区块链投票系统时，您需要在浏览器中打开以下网站：

### 🎯 主要访问地址
- **前端应用**: http://localhost:3000 或 http://localhost:3001
  - 投票系统的主界面
  - 用户进行投票和查看结果的地方
  - 管理员管理投票活动的控制台

### 🔧 开发和管理工具
- **Ganache GUI**: http://127.0.0.1:7545
  - 本地区块链网络管理界面
  - 查看账户余额和交易记录
  - 监控智能合约部署状态

### 🦊 必需的浏览器扩展
- **MetaMask**: 浏览器钱包扩展
  - Chrome: https://chrome.google.com/webstore/detail/metamask/
  - Firefox: https://addons.mozilla.org/firefox/addon/ether-metamask/
  - Edge: https://microsoftedge.microsoft.com/addons/detail/metamask/

### 📱 移动端访问
如果需要在移动设备上访问，请确保：
- 移动设备与开发机器在同一网络
- 使用开发机器的IP地址替换localhost
- 例如：http://192.168.1.100:3000

### ⚠️ 重要提醒
- 确保所有服务都已启动后再访问网站
- 首次访问需要连接MetaMask钱包
- 建议使用Chrome或Firefox浏览器以获得最佳体验

## 📦 项目依赖

### 后端依赖 (根目录)
```json
{
  "devDependencies": {
    "@openzeppelin/test-helpers": "^0.5.16",
    "truffle-assertions": "^0.9.2"
  }
}
```

### 前端依赖 (client目录)
```json
{
  "dependencies": {
    "ethers": "^5.7.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
}
```

### 全局依赖
需要全局安装以下工具：
```bash
npm install -g truffle ganache
```

### 环境变量配置
在项目根目录创建 `.env` 文件（可选）：
```env
# 网络配置
REACT_APP_NETWORK_ID=1337
REACT_APP_RPC_URL=http://127.0.0.1:7545

# 合约地址（部署后填入）
REACT_APP_VOTING_CONTRACT_ADDRESS=
REACT_APP_ZK_VOTING_CONTRACT_ADDRESS=
```

## 📖 详细文档

- 📚 **[项目介绍](./docs/项目介绍.md)** - 详细的项目功能和技术架构介绍
- 📋 **[使用须知](./docs/使用须知.md)** - 完整的使用指南和注意事项
- 🔧 **[API文档](./docs/API.md)** - 智能合约接口文档
- 🧪 **[测试指南](./docs/测试指南.md)** - 测试用例和测试方法

## 🎯 主要功能

### 👨‍💼 管理员功能
- ✅ 创建和管理投票活动
- ✅ 设置投票参数和权限
- ✅ 监控投票进度和统计
- ✅ 导出投票结果

### 👥 用户功能
- ✅ 连接MetaMask钱包
- ✅ 浏览可用投票活动
- ✅ 匿名参与投票
- ✅ 查看实时投票结果
- ✅ 验证投票真实性

### 🔒 安全特性
- ✅ 零知识证明匿名投票
- ✅ 防双重投票机制
- ✅ 区块链防篡改保护
- ✅ 智能合约权限控制

## 🔧 开发和测试

### 运行测试
```bash
# 运行所有测试
truffle test

# 运行特定测试文件
truffle test test/VotingSystem.test.js
```

### 代码检查
```bash
# 安装代码检查工具
npm install -g solhint

# 检查智能合约代码
solhint contracts/*.sol
```

## 🤝 贡献指南

我们欢迎社区贡献！请遵循以下步骤：

1. **Fork** 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 **Pull Request**

### 代码规范
- 遵循 [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- 使用 ESLint 和 Prettier 格式化 JavaScript 代码
- 编写清晰的提交信息
- 为新功能添加测试用例

## 🛡️ 安全考虑

- ⚠️ **本项目仅用于学习和演示目的**
- 🔒 在生产环境中使用前，请进行全面的安全审计
- 🔐 确保私钥和助记词的安全存储
- 🌐 使用HTTPS和安全的RPC端点
- 📊 定期更新依赖包以修复安全漏洞

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 🙋‍♂️ 支持与反馈

- 📧 **邮箱**: [your-email@example.com]
- 🐛 **问题反馈**: [GitHub Issues](https://github.com/your-username/blockchain-voting/issues)
- 💬 **讨论**: [GitHub Discussions](https://github.com/your-username/blockchain-voting/discussions)
- 📖 **文档**: [项目Wiki](https://github.com/your-username/blockchain-voting/wiki)

## 🚨 常见问题与解决方案

### 1. MetaMask相关问题

#### ❌ 错误："请安装MetaMask以使用此应用"
**原因**: 浏览器未安装MetaMask扩展或MetaMask未启用
**解决方案**:
1. 访问 [MetaMask官网](https://metamask.io/) 下载并安装扩展
2. 安装后刷新页面
3. 确保MetaMask扩展已启用且未被浏览器禁用
4. 检查浏览器是否支持Web3（推荐使用Chrome或Firefox）

#### ❌ 错误："用户拒绝了连接请求"
**原因**: 在MetaMask弹窗中点击了"取消"或"拒绝"
**解决方案**:
1. 刷新页面重新尝试连接
2. 在MetaMask弹窗中点击"连接"或"Connect"
3. 确保选择了正确的账户

#### ❌ 错误："无法连接到网络"
**原因**: MetaMask未连接到正确的网络
**解决方案**:
1. 确保Ganache正在运行（端口7545）
2. 在MetaMask中切换到"Ganache Local"网络
3. 检查网络配置是否正确：
   - RPC URL: http://127.0.0.1:7545
   - 链ID: 1337

### 2. 应用启动问题

#### ❌ 错误："npm start失败"
**原因**: 依赖未正确安装或端口被占用
**解决方案**:
```bash
# 清理并重新安装依赖
cd client
rm -rf node_modules package-lock.json
npm install
npm start
```

#### ❌ 错误："端口3000已被占用"
**解决方案**:
```bash
# 使用不同端口启动
PORT=3001 npm start
```

### 3. 区块链连接问题

#### ❌ 错误："合约未部署"
**解决方案**:
```bash
# 重新编译和部署合约
truffle compile
truffle migrate --reset --network development
```

#### ❌ 错误："交易失败"
**原因**: Gas费用不足或网络拥堵
**解决方案**:
1. 确保账户有足够的ETH余额
2. 增加Gas费用限制
3. 等待网络拥堵缓解后重试

### 4. 获取帮助

如果以上解决方案无法解决您的问题，请：
1. 查看浏览器控制台的错误信息
2. 检查 [项目文档](./docs/) 中的详细说明
3. 在GitHub Issues中搜索相似问题
4. 提交新的Issue并附上详细的错误信息

## 🔗 相关链接

- [以太坊官方文档](https://ethereum.org/developers/)
- [Truffle框架文档](https://trufflesuite.com/docs/)
- [React官方文档](https://reactjs.org/docs/)
- [MetaMask开发者文档](https://docs.metamask.io/)
- [Web3.js文档](https://web3js.readthedocs.io/)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我们一个星标！**

Made with ❤️ by Blockchain Voting Team

</div>
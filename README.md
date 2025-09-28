# 基于区块链的匿名加密投票系统  
# Blockchain-based Anonymous Encrypted Voting System

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen)](https://nodejs.org/)
[![React Version](https://img.shields.io/badge/react-%5E18.0.0-blue)](https://reactjs.org/)

## 🎯 项目简介  
## 🎯 Project Introduction

这是一个基于以太坊区块链技术的去中心化匿名投票系统，旨在解决传统投票系统中存在的透明度不足、可篡改性和隐私泄露等问题。通过智能合约和零知识证明技术，实现了安全、透明且隐私友好的投票流程。
This is a decentralized anonymous voting system based on Ethereum blockchain technology, designed to address issues of insufficient transparency, tamperability, and privacy leaks in traditional voting systems. Through smart contracts and zero-knowledge proof technology, it achieves secure, transparent, and privacy-friendly voting processes.

### 🌟 核心特性  
### 🌟 Key Features
- ✅ **去中心化架构** - 基于以太坊区块链，无需中央权威机构  
  ✅ **Decentralized Architecture** - Based on Ethereum blockchain, no central authority required
- 🔒 **匿名性保护** - 使用零知识证明技术确保投票者身份完全匿名  
  🔒 **Anonymity Protection** - Uses zero-knowledge proof technology to ensure voter identity is completely anonymous
- 🛡️ **安全性保障** - 防双重投票、防篡改、严格权限控制  
  🛡️ **Security Assurance** - Prevents double voting, tampering, and enforces strict permission controls
- 🎨 **用户友好界面** - 基于React的现代化Web界面  
  🎨 **User-friendly Interface** - Modern web interface based on React
- 📊 **实时结果展示** - 投票结果实时更新和可视化展示  
  📊 **Real-time Results Display** - Voting results are updated and visualized in real time

## 🛠️ 技术栈  
## 🛠️ Technology Stack

### 前端技术  
### Frontend Technologies
- **React.js** - 用户界面框架  
  **React.js** - User interface framework
- **Web3.js/Ethers.js** - 区块链交互库  
  **Web3.js/Ethers.js** - Blockchain interaction libraries
- **Material-UI** - UI组件库  
  **Material-UI** - UI component library
- **Chart.js** - 数据可视化  
  **Chart.js** - Data visualization

### 区块链技术  
### Blockchain Technologies
- **Solidity** - 智能合约开发语言  
  **Solidity** - Smart contract development language
- **Truffle** - 智能合约开发框架  
  **Truffle** - Smart contract development framework
- **Ganache** - 本地区块链测试环境  
  **Ganache** - Local blockchain test environment
- **OpenZeppelin** - 安全的智能合约库  
  **OpenZeppelin** - Secure smart contract library

### 隐私保护  
### Privacy Protection
- **zk-SNARKs** - 零知识证明算法  
  **zk-SNARKs** - Zero-knowledge proof algorithm
- **Circom** - 零知识证明电路编写  
  **Circom** - Zero-knowledge circuit writing
- **SnarkJS** - JavaScript零知识证明库  
  **SnarkJS** - JavaScript zero-knowledge proof library

## 📋 项目结构  
## 📋 Project Structure

```
blockchain-voting/
├── 📁 contracts/              # 智能合约代码    | Smart contract code
│   ├── VotingSystem.sol      # 基本投票系统合约 | Basic voting system contract
│   └── ZKVoting.sol          # 零知识证明投票合约 | ZK proof voting contract
├── 📁 migrations/             # 合约部署脚本    | Contract deployment scripts
│   └── 1_deploy_contracts.js # 部署配置        | Deployment configuration
├── 📁 client/                 # 前端应用        | Frontend application
│   ├── 📁 src/
│   │   ├── 📁 components/    # React组件        | React components
│   │   ├── 📁 contracts/     # 合约ABI文件      | Contract ABI files
│   │   └── 📁 workers/       # Web Workers
│   └── package.json
├── 📁 test/                   # 测试用例        | Test cases
│   ├── VotingSystem.test.js  # 投票系统测试    | Voting system tests
│   └── ZKVoting.test.js      # 零知识证明测试  | ZK proof tests
├── 📁 docs/                   # 项目文档        | Project documentation
│   ├── 项目介绍.md           # 详细项目介绍    | Detailed project intro
│   └── 使用须知.md           # 使用指南和注意事项 | User guide & notes
└── README.md                  # 项目说明文档    | Project readme
```

## 🚀 快速开始  
## 🚀 Quick Start

### 📋 前置条件  
### 📋 Prerequisites

⚠️ **重要提醒：使用本应用前必须安装MetaMask！**  
⚠️ **Important: MetaMask must be installed before using this application!**

- **Node.js** (推荐v16或v18) - [下载地址](https://nodejs.org/)  
  **Node.js** (Recommended v16 or v18) - [Download](https://nodejs.org/)
- **npm** 或 **yarn** - 包管理器  
  **npm** or **yarn** - Package manager
- **Git** - 版本控制工具  
  **Git** - Version control tool
- **MetaMask** - 浏览器钱包扩展 **（必需！）**  
  **MetaMask** - Browser wallet extension **(Required!)**
  - 如果未安装MetaMask，应用将显示"请安装MetaMask以使用此应用"错误  
    If MetaMask is not installed, the app will show "Please install MetaMask to use this application" error.
  - 请访问 [MetaMask官网](https://metamask.io/) 下载安装  
    Please visit [MetaMask website](https://metamask.io/) to download and install

### 🔧 系统要求  
### 🔧 System Requirements

#### 硬件要求  
#### Hardware Requirements
- **处理器**: Intel i3 或 AMD 同等级别以上  
  **Processor**: Intel i3 or AMD equivalent or higher
- **内存**: 至少 4GB RAM（推荐 8GB 以上）  
  **Memory**: At least 4GB RAM (8GB+ recommended)
- **存储空间**: 至少 1GB 可用磁盘空间  
  **Storage**: At least 1GB free disk space
- **网络**: 稳定的互联网连接  
  **Network**: Stable internet connection

#### 软件要求  
#### Software Requirements
- **操作系统**: Windows 10/11、macOS 10.14+、Ubuntu 18.04+  
  **OS**: Windows 10/11, macOS 10.14+, Ubuntu 18.04+
- **浏览器**: Chrome 90+、Firefox 88+、Safari 14+、Edge 90+  
  **Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Node.js**: 版本 16.0 或以上  
  **Node.js**: Version 16.0 or above
- **MetaMask**: 浏览器扩展钱包（必需）  
  **MetaMask**: Browser wallet extension (required)

### 🔧 安装步骤  
### 🔧 Installation Steps

#### 1. 克隆项目  
#### 1. Clone the Project
```bash
git clone [仓库地址]
cd block-chain投票
```

#### 2. 安装全局依赖  
#### 2. Install Global Dependencies
```bash
# 安装Truffle和Ganache
# Install Truffle and Ganache globally
npm install -g truffle ganache
```

#### 3. 安装项目依赖  
#### 3. Install Project Dependencies
```bash
# 安装后端依赖
# Install backend dependencies
npm install

# 安装前端依赖
# Install frontend dependencies
cd client
npm install
cd ..
```

#### 4. 启动本地区块链  
#### 4. Start Local Blockchain
```bash
# 启动Ganache (新终端窗口)
# Start Ganache (in a new terminal window)
ganache
```

#### 5. 部署智能合约  
#### 5. Deploy Smart Contracts
```bash
# 编译合约
# Compile contracts
truffle compile

# 部署到本地网络
# Deploy to local network
truffle migrate --network development
```

#### 6. 配置MetaMask（重要！）  
#### 6. Configure MetaMask (Important!)

⚠️ **注意：如果您看到"请安装MetaMask以使用此应用"错误，请按以下步骤操作：**  
⚠️ **Note: If you see "Please install MetaMask to use this application" error, follow these steps:**

##### 6.1 安装MetaMask  
##### 6.1 Install MetaMask
1. 访问 [MetaMask官网](https://metamask.io/)  
   Visit [MetaMask website](https://metamask.io/)
2. 点击"Download"下载适合您浏览器的扩展：  
   Click "Download" to download the extension for your browser:
   - **Chrome**: [Chrome Web Store](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
   - **Firefox**: [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/)
   - **Edge**: [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm)
3. 安装完成后，点击浏览器工具栏中的MetaMask图标  
   After installation, click the MetaMask icon on your browser toolbar
4. 创建新钱包或导入现有钱包  
   Create a new wallet or import an existing wallet
5. **重要**：妥善保存助记词，不要泄露给任何人  
   **Important:** Securely save your mnemonic phrase and do not share it with anyone

##### 6.2 添加本地网络  
##### 6.2 Add Local Network
1. 打开MetaMask扩展  
   Open MetaMask extension
2. 点击顶部的网络下拉菜单（默认显示"以太坊主网"）  
   Click the network dropdown at the top (defaults to "Ethereum Mainnet")
3. 点击"添加网络"或"Add Network"  
   Click "Add Network"
4. 选择"手动添加网络"  
   Choose "Add Network Manually"
5. 输入以下网络信息：  
   Enter the following network info:
   - **网络名称**: Ganache Local  
     **Network Name**: Ganache Local
   - **新RPC URL**: http://127.0.0.1:7545  
     **RPC URL**: http://127.0.0.1:7545
   - **链ID**: 1337  
     **Chain ID**: 1337
   - **货币符号**: ETH  
     **Currency Symbol**: ETH
   - **区块浏览器URL**: （留空）  
     **Block Explorer URL**: (leave blank)
6. 点击"保存"  
   Click "Save"

##### 6.3 导入测试账户  
##### 6.3 Import Test Account
1. 启动Ganache后，复制第一个账户的私钥  
   After starting Ganache, copy the first account's private key
2. 在MetaMask中点击右上角的账户图标  
   Click the account icon in MetaMask (top right)
3. 选择"导入账户"  
   Select "Import Account"
4. 粘贴私钥并点击"导入"  
   Paste the private key and click "Import"
5. 确认账户余额显示为100 ETH  
   Ensure the account shows 100 ETH balance

##### 6.4 常见问题解决  
##### 6.4 Common Issues & Solutions
- **问题**: 页面显示"请安装MetaMask以使用此应用"  
  **Issue**: Page shows "Please install MetaMask to use this application"
  - **解决**: 确保MetaMask已安装并已解锁，刷新页面重试  
    **Solution**: Ensure MetaMask is installed and unlocked, refresh the page
- **问题**: 无法连接到本地网络  
  **Issue**: Can't connect to local network
  - **解决**: 检查Ganache是否正在运行，确认RPC URL为 http://127.0.0.1:7545  
    **Solution**: Make sure Ganache is running and RPC URL is http://127.0.0.1:7545
- **问题**: 交易失败  
  **Issue**: Transaction failed
  - **解决**: 确保选择了正确的网络（Ganache Local）且账户有足够余额  
    **Solution**: Select the correct network (Ganache Local) and ensure sufficient account balance

#### 7. 启动前端应用  
#### 7. Start Frontend Application
```bash
cd client
npm start
```

🎉 **完成！** 访问 http://localhost:3000 开始使用投票系统  
🎉 **Done!** Visit http://localhost:3000 to start using the voting system

## 🌐 使用时需要打开的网站  
## 🌐 Websites to Open During Usage

在使用区块链投票系统时，您需要在浏览器中打开以下网站：  
When using the blockchain voting system, you need to open the following in your browser:

### 🎯 主要访问地址  
### 🎯 Main Access URLs
- **前端应用**: http://localhost:3000 或 http://localhost:3001  
  **Frontend App**: http://localhost:3000 or http://localhost:3001
  - 投票系统的主界面  
    Main interface for the voting system
  - 用户进行投票和查看结果的地方  
    Where users vote and view results
  - 管理员管理投票活动的控制台  
    Admin console for managing voting events

### 🔧 开发和管理工具  
### 🔧 Development & Management Tools
- **Ganache GUI**: http://127.0.0.1:7545  
  **Ganache GUI**: http://127.0.0.1:7545
  - 本地区块链网络管理界面  
    Local blockchain network management interface
  - 查看账户余额和交易记录  
    View account balances and transactions
  - 监控智能合约部署状态  
    Monitor smart contract deployment status

### 🦊 必需的浏览器扩展  
### 🦊 Required Browser Extensions
- **MetaMask**: 浏览器钱包扩展  
  **MetaMask**: Browser wallet extension
  - Chrome: https://chrome.google.com/webstore/detail/metamask/
  - Firefox: https://addons.mozilla.org/firefox/addon/ether-metamask/
  - Edge: https://microsoftedge.microsoft.com/addons/detail/metamask/

### 📱 移动端访问  
### 📱 Mobile Access
如果需要在移动设备上访问，请确保：  
If accessing from a mobile device, please ensure:
- 移动设备与开发机器在同一网络  
  Mobile device and dev machine are on the same network
- 使用开发机器的IP地址替换localhost  
  Replace localhost with your dev machine's IP address
- 例如：http://192.168.1.100:3000  
  Example: http://192.168.1.100:3000

### ⚠️ 重要提醒  
### ⚠️ Important Notice
- 确保所有服务都已启动后再访问网站  
  Ensure all services are started before accessing the site
- 首次访问需要连接MetaMask钱包  
  First visit requires connecting MetaMask wallet
- 建议使用Chrome或Firefox浏览器以获得最佳体验  
  Chrome or Firefox is recommended for best experience

## 📦 项目依赖  
## 📦 Project Dependencies

### 后端依赖 (根目录)  
### Backend Dependencies (root directory)
```json
{
  "devDependencies": {
    "@openzeppelin/test-helpers": "^0.5.16",
    "truffle-assertions": "^0.9.2"
  }
}
```

### 前端依赖 (client目录)  
### Frontend Dependencies (client directory)
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
### Global Dependencies
需要全局安装以下工具：  
The following tools must be installed globally:
```bash
npm install -g truffle ganache
```

### 环境变量配置  
### Environment Variable Configuration
在项目根目录创建 `.env` 文件（可选）：  
Create a `.env` file in the project root (optional):
```env
# 网络配置 | Network config
REACT_APP_NETWORK_ID=1337
REACT_APP_RPC_URL=http://127.0.0.1:7545

# 合约地址（部署后填入）| Contract addresses (fill after deployment)
REACT_APP_VOTING_CONTRACT_ADDRESS=
REACT_APP_ZK_VOTING_CONTRACT_ADDRESS=
```

## 📖 详细文档  
## 📖 Detailed Documentation

- 📚 **[项目介绍](./docs/项目介绍.md)** - 详细的项目功能和技术架构介绍  
  📚 **[Project Introduction](./docs/项目介绍.md)** - Detailed project features and technical architecture
- 📋 **[使用须知](./docs/使用须知.md)** - 完整的使用指南和注意事项  
  📋 **[User Guide](./docs/使用须知.md)** - Complete usage guide and precautions
- 🔧 **[API文档](./docs/API.md)** - 智能合约接口文档  
  🔧 **[API Documentation](./docs/API.md)** - Smart contract API documentation
- 🧪 **[测试指南](./docs/测试指南.md)** - 测试用例和测试方法  
  🧪 **[Testing Guide](./docs/测试指南.md)** - Test cases and methods

## 🎯 主要功能  
## 🎯 Main Features

### 👨‍💼 管理员功能  
### 👨‍💼 Admin Features
- ✅ 创建和管理投票活动  
  ✅ Create and manage voting events
- ✅ 设置投票参数和权限  
  ✅ Set voting parameters and permissions
- ✅ 监控投票进度和统计  
  ✅ Monitor voting progress and statistics
- ✅ 导出投票结果  
  ✅ Export voting results

### 👥 用户功能  
### 👥 User Features
- ✅ 连接MetaMask钱包  
  ✅ Connect MetaMask wallet
- ✅ 浏览可用投票活动  
  ✅ Browse available voting events
- ✅ 匿名参与投票  
  ✅ Vote anonymously
- ✅ 查看实时投票结果  
  ✅ View real-time voting results
- ✅ 验证投票真实性  
  ✅ Verify voting authenticity

### 🔒 安全特性  
### 🔒 Security Features
- ✅ 零知识证明匿名投票  
  ✅ Anonymous voting via zero-knowledge proofs
- ✅ 防双重投票机制  
  ✅ Anti-double-voting mechanism
- ✅ 区块链防篡改保护  
  ✅ Tamper-proof protection via blockchain
- ✅ 智能合约权限控制  
  ✅ Permission control via smart contracts

## 🔧 开发和测试  
## 🔧 Development & Testing

### 运行测试  
### Run Tests
```bash
# 运行所有测试 | Run all tests
truffle test

# 运行特定测试文件 | Run specific test file
truffle test test/VotingSystem.test.js
```

### 代码检查  
### Code Linting
```bash
# 安装代码检查工具 | Install linter
npm install -g solhint

# 检查智能合约代码 | Lint smart contracts
solhint contracts/*.sol
```

## 🤝 贡献指南  
## 🤝 Contributing Guide

我们欢迎社区贡献！请遵循以下步骤：  
Community contributions are welcome! Please follow these steps:

1. **Fork** 本仓库  
   **Fork** this repository
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)  
   Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)  
   Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)  
   Push to your branch (`git push origin feature/AmazingFeature`)
5. 开启 **Pull Request**  
   Open a **Pull Request**

### 代码规范  
### Code Standards
- 遵循 [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)  
  Follow [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html)
- 使用 ESLint 和 Prettier 格式化 JavaScript 代码  
  Use ESLint and Prettier to format JavaScript code
- 编写清晰的提交信息  
  Write clear commit messages
- 为新功能添加测试用例  
  Add test cases for new features

## 🛡️ 安全考虑  
## 🛡️ Security Considerations

- ⚠️ **本项目仅用于学习和演示目的**  
  ⚠️ **This project is for learning and demonstration purposes only**
- 🔒 在生产环境中使用前，请进行全面的安全审计  
  🔒 Perform a full security audit before production use
- 🔐 确保私钥和助记词的安全存储  
  🔐 Securely store private keys and mnemonic phrases
- 🌐 使用HTTPS和安全的RPC端点  
  🌐 Use HTTPS and secure RPC endpoints
- 📊 定期更新依赖包以修复安全漏洞  
  📊 Regularly update dependencies to fix security vulnerabilities

## 📄 许可证  
## 📄 License

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情  
This project uses the MIT License - see [LICENSE](LICENSE) for details

## 🙋‍♂️ 支持与反馈  
## 🙋‍♂️ Support & Feedback

- 📧 **邮箱**: [your-email@example.com]  
  📧 **Email**: [your-email@example.com]
- 🐛 **问题反馈**: [GitHub Issues](https://github.com/your-username/blockchain-voting/issues)  
  🐛 **Report Issues**: [GitHub Issues](https://github.com/your-username/blockchain-voting/issues)
- 💬 **讨论**: [GitHub Discussions](https://github.com/your-username/blockchain-voting/discussions)  
  💬 **Discussions**: [GitHub Discussions](https://github.com/your-username/blockchain-voting/discussions)
- 📖 **文档**: [项目Wiki](https://github.com/your-username/blockchain-voting/wiki)  
  📖 **Documentation**: [Project Wiki](https://github.com/your-username/blockchain-voting/wiki)

## 🚨 常见问题与解决方案  
## 🚨 FAQ & Solutions

### 1. MetaMask相关问题  
### 1. MetaMask Issues

#### ❌ 错误："请安装MetaMask以使用此应用"  
#### ❌ Error: "Please install MetaMask to use this application"
**原因**: 浏览器未安装MetaMask扩展或MetaMask未启用  
**Reason**: MetaMask extension not installed or not enabled
**解决方案**:  
**Solution**:
1. 访问 [MetaMask官网](https://metamask.io/) 下载并安装扩展  
   Visit [MetaMask website](https://metamask.io/) to download and install
2. 安装后刷新页面  
   Refresh the page after installation
3. 确保MetaMask扩展已启用且未被浏览器禁用  
   Ensure MetaMask is enabled and not disabled by the browser
4. 检查浏览器是否支持Web3（推荐使用Chrome或Firefox）  
   Make sure your browser supports Web3 (Chrome or Firefox recommended)

#### ❌ 错误："用户拒绝了连接请求"  
#### ❌ Error: "User denied connection request"
**原因**: 在MetaMask弹窗中点击了"取消"或"拒绝"  
**Reason**: "Cancel" or "Deny" clicked in MetaMask popup
**解决方案**:  
**Solution**:
1. 刷新页面重新尝试连接  
   Refresh and try connecting again
2. 在MetaMask弹窗中点击"连接"或"Connect"  
   Click "Connect" in the MetaMask popup
3. 确保选择了正确的账户  
   Make sure the correct account is selected

#### ❌ 错误："无法连接到网络"  
#### ❌ Error: "Unable to connect to network"
**原因**: MetaMask未连接到正确的网络  
**Reason**: MetaMask not connected to the correct network
**解决方案**:  
**Solution**:
1. 确保Ganache正在运行（端口7545）  
   Ensure Ganache is running on port 7545
2. 在MetaMask中切换到"Ganache Local"网络  
   Switch MetaMask to "Ganache Local" network
3. 检查网络配置是否正确：  
   Check network configuration:
   - RPC URL: http://127.0.0.1:7545
   - 链ID: 1337

### 2. 应用启动问题  
### 2. Application Startup Issues

#### ❌ 错误："npm start失败"  
#### ❌ Error: "npm start failed"
**原因**: 依赖未正确安装或端口被占用  
**Reason**: Dependencies not installed correctly or port in use
**解决方案**:  
**Solution**:
```bash
# 清理并重新安装依赖 | Clean up and reinstall dependencies
cd client
rm -rf node_modules package-lock.json
npm install
npm start
```

#### ❌ 错误："端口3000已被占用"  
#### ❌ Error: "Port 3000 is already in use"
**解决方案**:  
**Solution**:
```bash
# 使用不同端口启动 | Start with a different port
PORT=3001 npm start
```

### 3. 区块链连接问题  
### 3. Blockchain Connection Issues

#### ❌ 错误："合约未部署"  
#### ❌ Error: "Contract not deployed"
**解决方案**:  
**Solution**:
```bash
# 重新编译和部署合约 | Recompile and redeploy contracts
truffle compile
truffle migrate --reset --network development
```

#### ❌ 错误："交易失败"  
#### ❌ Error: "Transaction failed"
**原因**: Gas费用不足或网络拥堵  
**Reason**: Not enough gas or network congestion
**解决方案**:  
**Solution**:
1. 确保账户有足够的ETH余额  
   Ensure the account has enough ETH balance
2. 增加Gas费用限制  
   Increase gas limit
3. 等待网络拥堵缓解后重试  
   Retry after network congestion eases

### 4. 获取帮助  
### 4. Getting Help

如果以上解决方案无法解决您的问题，请：  
If the above solutions do not solve your issue:
1. 查看浏览器控制台的错误信息  
   Check browser console for errors
2. 检查 [项目文档](./docs/) 中的详细说明  
   Check [project docs](./docs/) for details
3. 在GitHub Issues中搜索相似问题  
   Search similar issues in GitHub Issues
4. 提交新的Issue并附上详细的错误信息  
   Submit a new issue with detailed error info

## 🔗 相关链接  
## 🔗 Related Links

- [以太坊官方文档](https://ethereum.org/developers/)  
  [Ethereum Official Docs](https://ethereum.org/developers/)
- [Truffle框架文档](https://trufflesuite.com/docs/)  
  [Truffle Docs](https://trufflesuite.com/docs/)
- [React官方文档](https://reactjs.org/docs/)  
  [React Docs](https://reactjs.org/docs/)
- [MetaMask开发者文档](https://docs.metamask.io/)  
  [MetaMask Dev Docs](https://docs.metamask.io/)
- [Web3.js文档](https://web3js.readthedocs.io/)  
  [Web3.js Docs](https://web3js.readthedocs.io/)

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给我们一个星标！**  
**⭐ If you find this project helpful, please give us a star!**

Made with ❤️ by Blockchain Voting Team

</div>

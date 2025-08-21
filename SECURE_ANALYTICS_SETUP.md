# 安全访问统计设置方案

## 🚨 安全问题
你说得对！在公开仓库中暴露GitHub token是**非常危险**的，任何人都能看到并滥用你的token。

## 💡 解决方案

### 方案1：GitHub Actions + Repository Secrets（推荐）

1. **设置Repository Secret:**
   - 进入你的GitHub仓库
   - Settings → Secrets and variables → Actions
   - 点击 "New repository secret"
   - Name: `VISITOR_LOG_TOKEN`
   - Value: 你的GitHub token
   - 点击 "Add secret"

2. **使用GitHub Actions:**
   - 我已创建了 `.github/workflows/update-visitor-log.yml`
   - 这样token只存在于GitHub的安全环境中，不会暴露

3. **前端触发:**
   - 网站发送webhook到GitHub
   - GitHub Actions自动更新TXT文件

### 方案2：使用免费Webhook服务

1. **创建Webhook:**
   - 访问 https://webhook.site/
   - 复制生成的唯一URL
   - 在 `simple-analytics.js` 中替换 `webhookUrl`

2. **查看数据:**
   - 在webhook.site页面实时查看访问数据
   - 可以下载为JSON或其他格式

3. **优点:**
   - 完全安全，无token暴露
   - 实时查看数据
   - 免费使用

### 方案3：私有仓库（需要GitHub Pro）

如果你有GitHub Pro账户：
- 可以将仓库设为私有
- GitHub Pages仍然可以公开访问
- Token不会被公开看到

## 🔧 当前配置

现在我已经：
1. 移除了暴露token的代码
2. 创建了GitHub Actions工作流
3. 提供了webhook替代方案

你想使用哪个方案？我可以帮你完成具体配置。

## 📊 数据格式

无论使用哪种方案，收集的数据都包括：
- 访问时间
- 访问页面URL
- 来源网站
- 设备信息
- IP地址和地理位置
- 浏览器信息
# 🔧 方案1设置说明

## 📝 概述
- 网站访问时发送数据到webhook
- Webhook触发GitHub Actions
- GitHub Actions自动更新visitor-log.txt文件
- **无需暴露任何token**

## 🚀 设置步骤

### 1. 启用GitHub Actions
1. 进入你的GitHub仓库
2. 点击 **Settings** 标签
3. 左侧菜单选择 **Actions** → **General**
4. 确保 **Actions permissions** 设置为 **Allow all actions and reusable workflows**
5. 确保 **Workflow permissions** 设置为 **Read and write permissions**

### 2. 创建Webhook（两种方式任选一种）

#### 方式A：使用Pipedream（推荐）
1. 访问 https://pipedream.com/
2. 注册免费账户
3. 创建新的workflow
4. 选择 **HTTP/Webhook** 作为trigger
5. 复制webhook URL
6. 在webhook的代码中添加：
```javascript
export default defineComponent({
  async run({ steps, $ }) {
    const data = steps.trigger.event.body;
    
    // 发送到GitHub repository_dispatch
    await $.send.http({
      method: "POST",
      url: `https://api.github.com/repos/Steven-ZN/steven-zn.github.io/dispatches`,
      headers: {
        "Authorization": `token YOUR_GITHUB_TOKEN_HERE`,
        "Accept": "application/vnd.github.v3+json"
      },
      data: {
        event_type: "visitor_log",
        client_payload: data.data
      }
    });
  }
});
```

#### 方式B：使用Zapier
1. 访问 https://zapier.com/
2. 创建新的Zap
3. Trigger: **Webhooks by Zapier** → **Catch Hook**
4. Action: **GitHub** → **Create Repository Dispatch Event**
5. 配置GitHub连接和仓库信息

### 3. 更新前端代码
在 `assets/js/github-analytics.js` 中：
```javascript
const webhookUrl = 'YOUR_WEBHOOK_URL_HERE'; // 替换为步骤2中获得的URL
```

### 4. 测试
1. 推送所有更改到GitHub
2. 访问你的网站
3. 检查GitHub仓库中是否出现了 `visitor-log.txt` 文件
4. 查看GitHub Actions页面确认workflow运行

## 📊 结果
每次有人访问你的网站时：
1. 前端收集访问数据
2. 发送到webhook
3. Webhook触发GitHub Actions
4. Actions更新 `visitor-log.txt` 文件
5. 你可以在GitHub仓库中查看访问记录

## 🔒 安全优势
- ✅ 无token暴露在前端代码中
- ✅ 仓库可以保持公开
- ✅ GitHub Pages正常工作
- ✅ 完全自动化的访问记录
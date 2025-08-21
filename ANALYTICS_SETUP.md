# GitHub访问统计设置说明

## 🔧 设置步骤

### 1. 创建GitHub Personal Access Token

1. 访问 GitHub.com，登录你的账户
2. 点击右上角头像 → Settings
3. 左侧菜单选择 "Developer settings"
4. 选择 "Personal access tokens" → "Tokens (classic)"
5. 点击 "Generate new token" → "Generate new token (classic)"
6. 设置：
   - Note: `Website Analytics`
   - Expiration: `No expiration` (或选择一个较长的时间)
   - Scopes: 勾选 `repo` (Full control of private repositories)
7. 点击 "Generate token"
8. **重要**: 复制生成的token（以`ghp_`开头），保存好，只显示一次！

### 2. 配置Token

1. 打开文件：`assets/js/github-analytics.js`
2. 找到这一行：
   ```javascript
   this.token = 'ghp_YOUR_GITHUB_TOKEN_HERE';
   ```
3. 将 `ghp_YOUR_GITHUB_TOKEN_HERE` 替换为你刚才复制的token

### 3. 推送更改

```bash
git add assets/js/github-analytics.js
git commit -m "Configure GitHub analytics token"
git push origin main
```

## 📊 工作原理

- 每次有人访问网站，会自动在仓库根目录创建/更新 `visitor-log.txt` 文件
- 文件内容包括：访问时间、页面、来源、设备信息、IP地址等
- 新的访问记录会添加到文件顶部
- 你可以在GitHub仓库中直接查看这个文件

## 📁 访问数据格式

```
访问时间: 2025-08-21 15:30:45
访问页面: https://steven-zn.github.io/projects/
来源: https://google.com
设备信息: 1920x1080 | 1200x800
浏览器: Mozilla/5.0 (Windows NT 10.0; Win64; x64)...
语言: zh-CN
时区: Asia/Shanghai
IP: 123.456.789.0
城市: Beijing
国家: China
================================================================================
```

## 🔒 安全说明

- Token有完整的仓库访问权限，请妥善保管
- 不要将token提交到公开仓库
- 建议定期更新token
- 可以在GitHub设置中随时撤销token

## 🎛️ 可选配置

你可以修改 `github-analytics.js` 中的：
- `filePath`: 更改保存文件的名称和位置
- 数据收集的字段和格式
- 更新频率和条件
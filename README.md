# Steven Zhang's Personal Website

个人学术网站，展示个人简历、研究项目和学术成果。

## 网站结构

```
steven-zn.github.io/
├── _config.yml              # Jekyll 配置文件
├── _includes/               # HTML 组件片段
│   └── head.html           # 页面头部（包含暗色模式切换）
├── _pages/                 # 网站页面内容
│   ├── home.md             # 首页
│   ├── projects.md         # 项目展示页面
│   ├── publications.md     # 发表论文页面
│   ├── experience.md       # 经历页面
│   └── contact.md          # 联系方式页面
├── _data/                  # 数据文件
│   ├── navigation.yml      # 导航菜单配置
│   └── ui-text.yml         # 界面文本配置
├── assets/                 # 静态资源
│   ├── css/                # 样式文件
│   │   └── main.scss       # 主样式文件
│   ├── js/                 # JavaScript 文件
│   │   ├── github-analytics.js  # GitHub 访问统计
│   │   └── simple-analytics.js  # 简单分析
│   └── documents/          # 文档文件
│       └── Nuojunxi Zhang_CV.pdf  # 个人简历 PDF
├── images/                 # 图片资源
│   ├── avatar.jpg          # 个人头像
│   └── favicon.svg         # 网站图标
└── README.md               # 本文件
```

## 快速开始

### 本地开发环境设置

1. **克隆仓库**
   ```bash
   git clone https://github.com/Steven-ZN/steven-zn.github.io.git
   cd steven-zn.github.io
   ```

2. **系统要求**
   - Ruby 3.0.0 或更高版本
   - RubyGems 包管理器
   - Bundler gem（可通过 `gem install bundler` 安装）

3. **安装依赖**
   ```bash
   # 安装 Jekyll 和相关依赖
   bundle install
   ```

4. **启动本地开发服务器**
   ```bash
   # 启动服务器，默认端口 4000
   bundle exec jekyll serve

   # 或者指定端口
   bundle exec jekyll serve --port 4001

   # 启用实时重载和草稿文章
   bundle exec jekyll serve --livereload --drafts
   ```

5. **访问本地网站**
   打开浏览器访问 `http://localhost:4000` 查看网站
   - 使用 `--livereload` 选项时，修改文件会自动刷新页面
   - 服务器会在 `_site` 目录生成静态文件

### 本地调试和故障排除

```bash
# 检查 Jekyll 配置和环境
bundle exec jekyll doctor

# 构建网站但不启动服务器
bundle exec jekyll build

# 详细构建日志，便于排查问题
bundle exec jekyll build --verbose

# 检查网站链接
bundle exec htmlproofer ./_site

# 清理缓存和构建文件
bundle exec jekyll clean
```

## 内容更新指南

### 首页更新 (`_pages/home.md`)

**基本信息更新：**
```yaml
---
layout: single
permalink: /
title: "Nuojunxi Zhang (Steven)"
author_profile: true
toc: true
---
```

**内容部分：**
- **个人简介**：修改标题和基本信息
- **教育信息**：更新学位、学校、GPA 等
- **研究经历**：添加新的研究项目或职位
- **技术技能**：更新技能列表
- **发表论文**：添加最新发表的论文

### 项目页面更新 (`_pages/projects.md`)

**添加新项目：**
```html
<div class="feature-row">
  <div class="feature-item">
    <h3>项目名称</h3>
    <p><strong>研究重点</strong>: 研究领域</p>
    <p>项目详细描述...</p>
    <p><strong>技术</strong>: 使用的技术栈<br>
    <strong>时期</strong>: 时间范围</p>
    <p><a href="项目链接" class="btn btn--primary">查看项目</a></p>
  </div>
</div>
```

**项目分类：**
- **Featured Research Projects**: 核心研究项目
- **AI Applications & Tools**: 应用型项目
- **Machine Learning & Data Science**: 机器学习项目

### 发表论文更新 (`_pages/publications.md`)

**添加新论文：**
```markdown
**论文标题**
*作者1*, *作者2*, *通讯作者*
*会议/期刊名称* (年份)
**状态:** 已接受/已发表/投稿中
```

**格式要求：**
- 使用 Markdown 格式
- 按时间倒序排列（最新在前）
- 包含完整作者列表和会议信息

### 经历页面更新 (`_pages/experience.md`)

**研究经历：**
```markdown
**职位名称** - *机构名称* (时间段)

- 具体职责和成果
- 使用的技术和方法
- 取得的成就和影响
```

**教育背景：**
```markdown
**学位名称**
*学校名称* | 时间
- GPA/成绩
- 相关课程
- 获奖情况
```

### 联系方式更新 (`_pages/contact.md`)

**联系信息：**
- 邮箱地址
- 社交媒体链接
- 办公地址
- 其他联系方式

## 配置文件详细说明

### `_config.yml` 主要配置项详解

**网站基础信息配置：**
```yaml
# 站点基础
title: "Steven Zhang"                    # 网站标题，显示在浏览器标签页
description: "CV / Weakly Supervised Segmentation • Active Learning • LLM"  # SEO 描述
url: "https://steven-zn.github.io"      # 生产环境完整 URL
baseurl: ""                              # 子路径，如部署在子目录需设置

# 语言和地区设置
locale: en-US                            # 网站语言和地区
```

**主题配置：**
```yaml
# 使用 Minimal Mistakes 主题（GitHub Pages 兼容）
remote_theme: "mmistakes/minimal-mistakes"  # 远程主题，GitHub Pages 推荐
skin: "aqua"                                 # 主题皮肤选择

# 可用皮肤选项：
# "air" - 浅色简约风格
# "aqua" - 水蓝色调（当前使用）
# "contrast" - 高对比度
# "dark" - 深色主题
# "neon" - 霓虹风格
# "mint" - 薄荷色调
# "plum" - 紫色调
# "sunrise" - 日出色调
```

**个人信息详细配置：**
```yaml
# 作者信息
author:
  name: "Nuojunxi Zhang (Steven)"       # 显示名称
  avatar: "/images/avatar.jpg"          # 头像图片路径（相对于根目录）
  bio: "A CS undergraduate with computer vision research experience..."  # 个人简介，支持 HTML
  location: "Union, New Jersey, USA"    # 地理位置
  links:                                # 社交媒体和个人链接
    - label: "GitHub"                   # 链接显示文本
      icon: "fab fa-github"             # Font Awesome 图标类名
      url: "https://github.com/Steven-ZN"  # 链接地址
    - label: "LinkedIn"
      icon: "fab fa-linkedin"
      url: "https://www.linkedin.com/in/steven-zn"
    - label: "Download CV"              # 下载简历链接
      icon: "fas fa-download"
      url: "/assets/documents/Nuojunxi Zhang_CV.pdf"
      target: "_blank"                  # 在新标签页打开
```

**SEO 和元数据配置：**
```yaml
# SEO 配置
seo:
  type: "Person"                         # Schema.org 类型
  name: "Steven Zhang"                   # SEO 名称

# 站点图标
favicon: /images/favicon.svg             # 网站图标路径
```


**代码高亮和 Markdown 设置：**
```yaml
# 代码高亮
highlighter: rouge                       # 使用 Rouge 语法高亮器
markdown: kramdown                       # Markdown 处理器
kramdown:
  input: GFM                             # GitHub Flavored Markdown
```

**默认页面配置：**
```yaml
# 默认 Front Matter
defaults:
  - scope:
      path: "_pages"                     # 应用到 _pages 目录
      type: pages                        # 页面类型
    values:
      layout: single                     # 使用 single 布局
      author_profile: true               # 显示作者资料
```

**插件配置：**
```yaml
# Jekyll 插件
plugins:
  - jekyll-feed                          # RSS 订阅源生成
  - jekyll-sitemap                       # 网站地图生成
  - jekyll-seo-tag                       # SEO 标签优化
  - jekyll-remote-theme                  # 远程主题支持
  - jekyll-include-cache                 # 包含缓存优化

# Font Awesome 图标库
fontawesome:
  version: "6.0.0"                       # Font Awesome 版本
```

**Sass 样式处理配置：**
```yaml
# Assets
sass:
  sass_dir: _sass                        # Sass 文件目录
  style: compressed                      # 输出样式：compressed, expanded, nested
```

## 主题定制

### 暗色模式实现

网站已集成暗色模式切换功能，实现细节：

**组件位置：**
- 按钮位置：页面右上角固定位置
- HTML 结构：`_includes/head.html`
- 样式定义：内联在 head.html 中
- JavaScript 功能：内联在 head.html 中

**功能特性：**
- 使用 CSS 变量和 `data-theme` 属性切换主题
- 用户偏好自动保存到浏览器 localStorage
- 页面加载时自动恢复用户选择的主题
- 平滑的过渡动画效果

**暗色模式切换机制：**
```javascript
// 主题切换核心逻辑
function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleButton();
}
```

### 自定义样式扩展 (`assets/css/main.scss`)

**文件结构：**
```scss
---
# 该 Front Matter 不能删
---

// 载入主题核心样式
@import "minimal-mistakes/skins/aqua";  // 必须与 _config.yml 中的 skin 设置一致
@import "minimal-mistakes";             // 主题核心样式文件

// 在此添加自定义样式（如需）
// 注意：GitHub Pages 不支持中文注释，请使用英文
```

**皮肤更换方法：**
1. 修改 `_config.yml` 中的 `skin:` 值
2. 同时修改 `main.scss` 中的 `@import "minimal-mistakes/skins/xxx"` 路径
3. 确保两者名称完全一致

**可用皮肤选项及其特性：**
- `air` - 浅色简约，适合专业网站
- `aqua` - 水蓝色调，清新专业（当前使用）
- `contrast` - 高对比度，无障碍友好
- `dark` - 深色主题，护眼模式
- `neon` - 霓虹风格，现代感强
- `mint` - 薄荷色调，柔和舒适
- `plum` - 紫色调，优雅专业
- `sunrise` - 日出色调，温暖活泼

## 分析和统计功能

### GitHub 访问统计实现

**功能概述：**
网站使用自定义的 GitHub Analytics 系统来跟踪访问情况，所有数据存储在 GitHub 仓库中。

**实现文件：**
- 主文件：`assets/js/github-analytics.js`
- 统计数据：存储在仓库的特定文件中

**工作原理：**
1. 访问网站时自动触发 JavaScript 脚本
2. 脚本收集基础访问信息（时间、页面等）
3. 通过 GitHub API 将数据写入仓库中的统计文件
4. 支持访问量统计和基础分析功能

**配置说明：**
- 需要 GitHub Personal Access Token
- 需要配置相应的仓库权限
- 统计数据实时更新，可在仓库中查看

## 部署和维护详细流程

### GitHub Pages 自动部署机制

**部署流程详解：**

1. **本地开发和测试**
   ```bash
   # 确保所有更改都已保存
   git status

   # 添加所有更改到暂存区
   git add .

   # 提交更改，使用描述性信息
   git commit -m "更新内容：具体修改描述"
   ```

2. **推送到远程仓库**
   ```bash
   # 推送到 GitHub（当前配置推送到 master 分支）
   git push origin main:master

   # 或者如果配置了不同的分支映射
   # git push origin main  # 推送到同名分支
   ```

3. **自动构建过程**
   - GitHub 检测到仓库推送
   - 自动启动 Jekyll 构建流程
   - 处理 Markdown、Sass、Liquid 模板
   - 生成静态 HTML 文件
   - 部署到 GitHub Pages 服务器

4. **构建状态监控**
   - 访问 GitHub 仓库的 "Actions" 标签页
   - 查看构建任务的执行状态
   - 构建失败时会显示详细错误信息
   - 成功构建后网站通常在 1-5 分钟内更新

### 常见问题诊断和解决

**构建失败排查步骤：**

1. **检查 Jekyll 配置文件**
   ```bash
   # 验证 _config.yml 语法
   bundle exec jekyll doctor

   # 检查配置文件结构
   ruby -ryaml -e "puts YAML.load_file('_config.yml')"
   ```

2. **CSS/SCSS 语法检查**
   ```bash
   # 检查 Sass 文件语法
   bundle exec sass-check assets/css/main.scss

   # 手动编译测试
   bundle exec sass assets/css/main.scss:_site/assets/css/main.css
   ```

3. **Markdown 文件验证**
   ```bash
   # 检查 Front Matter 语法
   find _pages -name "*.md" -exec head -10 {} \;

   # 验证 Markdown 语法
   bundle exec kramdown _pages/home.md > /dev/null
   ```

**常见错误类型及解决方案：**

**错误类型 1：SCSS 语法错误**
```
Error: Expected identifier.
```
- 检查 SCSS 文件中的中文注释
- 确保所有括号、分号匹配
- 验证颜色值和单位格式正确

**错误类型 2：文件编码问题**
```
Invalid byte sequence in UTF-8
```
- 确保所有文件使用 UTF-8 编码
- 检查是否有特殊字符或 BOM 标记
- 使用文本编辑器重新保存为 UTF-8

**错误类型 3：插件或依赖问题**
```
GitHub Pages does not support plugin-name
```
- 检查 `_config.yml` 中的插件列表
- 移除 GitHub Pages 不支持的插件
- 确保所有插件都在官方支持列表中


### 本地调试最佳实践

**完整调试命令集：**
```bash
# 1. 清理环境
bundle exec jekyll clean

# 2. 检查配置
bundle exec jekyll doctor

# 3. 构建测试
bundle exec jekyll build --verbose --trace

# 4. 本地预览
bundle exec jekyll serve --livereload --drafts --future --unpublished

# 5. 检查生成文件
ls -la _site/

# 6. 验证链接（需要安装 html-proofer）
bundle exec htmlproofer ./_site --check-html --check-opengraph --report-missing-names

# 7. 性能测试
bundle exec jekyll serve --profile
```

**开发工作流建议：**
1. 每次重要更改后运行本地构建测试
2. 使用 `--drafts` 选项预览未发布的文章
3. 定期运行 `jekyll clean` 清理缓存
4. 推送前检查 `git status` 确认所有更改已提交
5. 重大更改先在本地充分测试再推送

## 网站功能扩展指南

### 添加新页面的完整流程

**步骤 1：创建页面文件**
```bash
# 在 _pages 目录下创建新的 Markdown 文件
touch _pages/new-page.md
```

**步骤 2：配置 Front Matter**
```yaml
---
layout: single                    # 使用单页布局
title: "新页面标题"               # 页面标题
permalink: /new-page/            # URL 路径
author_profile: true             # 显示作者信息
toc: true                        # 显示目录
toc_sticky: true                 # 粘性目录
date: 2025-10-06                 # 可选：添加日期
excerpt: "页面简介"              # 可选：页面摘要
---
```

**步骤 3：编写页面内容**
```markdown
# 页面主标题

这里是页面的主要内容，使用 Markdown 语法编写。

## 子章节

可以添加多个章节和子章节。

### 列表示例
- 项目 1
- 项目 2
- 项目 3

**粗体文本** 和 *斜体文本*

[链接文本](https://example.com)
```

**步骤 4：添加到导航菜单**
编辑 `_data/navigation.yml` 文件：
```yaml
# main links
main:
  - title: "首页"
    url: /
  - title: "项目"
    url: /projects/
  - title: "新页面"              # 添加新页面
    url: /new-page/
```

## 版本控制和协作

### Git 工作流程最佳实践

**分支管理策略：**
```bash
# 1. 创建功能分支
git checkout -b feature/new-feature

# 2. 进行更改并提交
git add .
git commit -m "feat: 添加新功能"

# 3. 推送分支到远程
git push origin feature/new-feature

# 4. 合并到主分支
git checkout main
git merge feature/new-feature
git push origin main

# 5. 删除功能分支
git branch -d feature/new-feature
git push origin --delete feature/new-feature
```

**提交信息规范：**
```bash
# 格式：<类型>(<范围>): <描述>

# 功能：feat, fix, docs, style, refactor, test, chore
git commit -m "feat(home): 添加新的研究经历部分"
git commit -m "fix(projects): 修复项目链接错误"
git commit -m "docs(readme): 更新安装说明"
```

### 协作开发流程

**外部贡献流程：**
1. Fork 仓库到个人账户
2. 克隆 Fork 的仓库：
   ```bash
   git clone https://github.com/your-username/steven-zn.github.io.git
   cd steven-zn.github.io
   ```
3. 添加上游仓库：
   ```bash
   git remote add upstream https://github.com/Steven-ZN/steven-zn.github.io.git
   ```
4. 创建功能分支并进行更改
5. 推送到个人 Fork 仓库
6. 在 GitHub 上创建 Pull Request

**保持仓库同步：**
```bash
# 获取上游仓库最新更改
git fetch upstream

# 合并到本地主分支
git checkout main
git merge upstream/main

# 推送到个人仓库
git push origin main
```


## 联系和支持

### 技术支持联系方式

**主要联系方式：**
- **学术邮箱**: zhangnu@kean.edu
- **个人邮箱**: zhangnuojunxi@gmail.com
- **GitHub**: [Steven-ZN](https://github.com/Steven-ZN)
- **LinkedIn**: [Steven Zhang](https://www.linkedin.com/in/steven-zn)

### 资源和学习材料

**Jekyll 和 GitHub Pages 学习资源：**
- [Jekyll 官方文档](https://jekyllrb.com/docs/)
- [GitHub Pages 官方指南](https://docs.github.com/en/pages)
- [Minimal Mistakes 主题文档](https://mmistakes.github.io/minimal-mistakes/docs/)

**前端开发资源：**
- [Markdown 语法指南](https://www.markdownguide.org/)
- [Liquid 模板语言](https://shopify.github.io/liquid/)
- [Font Awesome 图标库](https://fontawesome.com/)

---

**文档版本**: 1.0
**最后更新**: 2025年10月6日
**维护者**: Nuojunxi Zhang (Steven)
// GitHub仓库访问统计 - 每次访问自动更新TXT文件
class GitHubAnalytics {
  constructor() {
    this.owner = 'Steven-ZN';
    this.repo = 'steven-zn.github.io';
    this.filePath = 'visitor-log.txt';
    // 你需要在GitHub设置中创建一个Personal Access Token
    // 权限需要：repo (完整仓库访问权限)
    this.token = 'ghp_YOUR_GITHUB_TOKEN_HERE'; // 替换为你的GitHub token
    this.apiUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/contents/${this.filePath}`;
  }

  // 收集访问数据
  collectVisitData() {
    return {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer || 'direct',
      userAgent: navigator.userAgent,
      language: navigator.language,
      screen: `${screen.width}x${screen.height}`,
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  }

  // 格式化访问记录为TXT格式
  formatVisitRecord(data) {
    return `
访问时间: ${new Date(data.timestamp).toLocaleString('zh-CN')}
访问页面: ${data.url}
来源: ${data.referrer}
设备信息: ${data.screen} | ${data.viewport}
浏览器: ${data.userAgent}
语言: ${data.language}
时区: ${data.timezone}
${'='.repeat(80)}
`;
  }

  // 获取现有文件内容
  async getExistingContent() {
    try {
      const response = await fetch(this.apiUrl, {
        headers: {
          'Authorization': `token ${this.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      if (response.status === 404) {
        // 文件不存在，返回空内容和null的sha
        return { content: '', sha: null };
      }

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      const content = atob(data.content); // base64解码
      return { content, sha: data.sha };
    } catch (error) {
      console.log('获取文件失败:', error);
      return { content: '', sha: null };
    }
  }

  // 更新GitHub文件
  async updateVisitorLog(visitData) {
    try {
      // 获取现有内容
      const { content: existingContent, sha } = await this.getExistingContent();
      
      // 格式化新的访问记录
      const newRecord = this.formatVisitRecord(visitData);
      
      // 合并内容（新记录在前面）
      const updatedContent = newRecord + existingContent;
      
      // 编码为base64
      const encodedContent = btoa(unescape(encodeURIComponent(updatedContent)));
      
      // 准备请求数据
      const requestData = {
        message: `Update visitor log - ${new Date().toISOString()}`,
        content: encodedContent,
        branch: 'main'
      };
      
      // 如果文件已存在，需要提供sha
      if (sha) {
        requestData.sha = sha;
      }
      
      // 发送更新请求
      const response = await fetch(this.apiUrl, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${this.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify(requestData)
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      console.log('访问记录已保存到GitHub');
      return true;
    } catch (error) {
      console.error('保存访问记录失败:', error);
      return false;
    }
  }

  // 初始化并记录访问
  async init() {
    // 避免重复记录（同一页面刷新时）
    if (sessionStorage.getItem('visit_recorded')) {
      return;
    }
    
    try {
      const visitData = this.collectVisitData();
      
      // 尝试获取IP地址信息
      try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        if (ipResponse.ok) {
          const ipData = await ipResponse.json();
          visitData.ip = ipData.ip;
          visitData.city = ipData.city;
          visitData.country = ipData.country_name;
        }
      } catch (ipError) {
        console.log('IP信息获取失败，使用基础数据');
      }
      
      // 保存到GitHub
      const success = await this.updateVisitorLog(visitData);
      
      if (success) {
        sessionStorage.setItem('visit_recorded', 'true');
      }
    } catch (error) {
      console.error('访问统计初始化失败:', error);
    }
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  const analytics = new GitHubAnalytics();
  analytics.init();
});

// 导出供其他脚本使用
window.GitHubAnalytics = GitHubAnalytics;
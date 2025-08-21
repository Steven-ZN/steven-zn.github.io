// 安全的访问统计 - 使用GitHub Actions触发
class GitHubAnalytics {
  constructor() {
    this.owner = 'Steven-ZN';
    this.repo = 'steven-zn.github.io';
    // 使用GitHub的repository_dispatch API，无需暴露token
    this.webhookUrl = `https://api.github.com/repos/${this.owner}/${this.repo}/dispatches`;
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

  // 触发GitHub Actions更新日志
  async triggerLogUpdate(visitData) {
    try {
      // 这里需要一个可以公开访问的webhook端点来触发GitHub Actions
      // 我们使用一个简单的方法：发送到一个免费的webhook服务
      // 然后你可以手动或通过Zapier等工具转发到GitHub
      
      // 临时方案：使用RequestBin类似服务
      const webhookUrl = 'https://eo8dpkwxgn2ld.x.pipedream.net'; // 你需要替换为你的webhook URL
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_type: 'visitor_log',
          data: visitData
        })
      });
      
      console.log('访问数据已发送到webhook');
      return true;
    } catch (error) {
      console.error('发送webhook失败:', error);
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
      
      // 触发GitHub Actions更新
      const success = await this.triggerLogUpdate(visitData);
      
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
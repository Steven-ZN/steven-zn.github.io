// 简单安全的访问统计 - 不暴露任何token
class SimpleAnalytics {
  constructor() {
    // 使用免费的网络钩子服务
    this.webhookUrl = 'https://webhook.site/unique-id-here'; // 你需要替换这个URL
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

  // 发送数据到webhook
  async sendData(data) {
    try {
      await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log('访问数据已发送');
    } catch (error) {
      console.log('发送失败，静默处理');
    }
  }

  // 获取IP信息并发送
  async init() {
    if (sessionStorage.getItem('visit_recorded')) {
      return;
    }

    try {
      const visitData = this.collectVisitData();
      
      // 尝试获取IP信息
      try {
        const ipResponse = await fetch('https://ipapi.co/json/');
        if (ipResponse.ok) {
          const ipData = await ipResponse.json();
          visitData.ip = ipData.ip;
          visitData.city = ipData.city;
          visitData.country = ipData.country_name;
        }
      } catch (ipError) {
        // IP获取失败不影响主流程
      }

      await this.sendData(visitData);
      sessionStorage.setItem('visit_recorded', 'true');
    } catch (error) {
      console.log('统计初始化失败');
    }
  }
}

// 页面加载后初始化
document.addEventListener('DOMContentLoaded', () => {
  const analytics = new SimpleAnalytics();
  analytics.init();
});
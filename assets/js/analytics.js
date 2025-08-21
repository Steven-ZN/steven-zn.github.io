// Custom Analytics System for Steven Zhang's Website
// 后端数据收集和访问统计系统

class WebsiteAnalytics {
  constructor() {
    this.endpoint = 'https://script.google.com/macros/s/AKfycbxXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec';
    this.sessionId = this.getOrCreateSessionId();
    this.visitId = this.generateVisitId();
    this.startTime = Date.now();
    this.dataCollected = false;
  }

  // 生成或获取会话ID
  getOrCreateSessionId() {
    let sessionId = sessionStorage.getItem('analytics_session');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('analytics_session', sessionId);
    }
    return sessionId;
  }

  // 生成访问ID
  generateVisitId() {
    return 'visit_' + Date.now() + '_' + Math.random().toString(36).substring(2, 10);
  }

  // 获取访客指纹（用于去重，但保护隐私）
  getVisitorFingerprint() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Analytics fingerprint', 2, 2);
    
    const fingerprint = [
      navigator.userAgent,
      navigator.language,
      screen.width + 'x' + screen.height,
      screen.colorDepth,
      new Date().getTimezoneOffset(),
      canvas.toDataURL()
    ].join('|');
    
    // 简单哈希
    let hash = 0;
    for (let i = 0; i < fingerprint.length; i++) {
      const char = fingerprint.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 32位整数
    }
    return Math.abs(hash).toString(36);
  }

  // 收集基础数据
  async collectData() {
    if (this.dataCollected) return;
    
    const data = {
      // 基本信息
      visitId: this.visitId,
      sessionId: this.sessionId,
      fingerprint: this.getVisitorFingerprint(),
      timestamp: new Date().toISOString(),
      
      // 页面信息
      url: window.location.href,
      path: window.location.pathname,
      referrer: document.referrer || 'direct',
      title: document.title,
      
      // 技术信息
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      
      // 屏幕信息
      screenWidth: screen.width,
      screenHeight: screen.height,
      screenColorDepth: screen.colorDepth,
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      devicePixelRatio: window.devicePixelRatio || 1,
      
      // 时间信息
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      timezoneOffset: new Date().getTimezoneOffset(),
      
      // 设备类型
      deviceType: this.getDeviceType(),
      isMobile: /Mobi|Android/i.test(navigator.userAgent),
      isTablet: /iPad|Android.*Tablet/i.test(navigator.userAgent),
      
      // 连接信息
      connectionType: this.getConnectionType(),
      
      // 来源分析
      sourceType: this.getSourceType(document.referrer),
      
      // 页面性能（如果可用）
      loadTime: this.getLoadTime()
    };

    // 获取地理位置信息
    try {
      const geoData = await this.getLocationData();
      Object.assign(data, geoData);
    } catch (error) {
      console.log('地理位置获取失败，使用基础数据');
    }

    // 发送数据
    this.sendData(data);
    this.dataCollected = true;
  }

  // 获取设备类型
  getDeviceType() {
    const width = window.innerWidth;
    if (width <= 480) return 'mobile';
    if (width <= 768) return 'tablet';
    if (width <= 1024) return 'laptop';
    return 'desktop';
  }

  // 获取连接类型
  getConnectionType() {
    if ('connection' in navigator) {
      return navigator.connection.effectiveType || 'unknown';
    }
    return 'unknown';
  }

  // 分析访问来源
  getSourceType(referrer) {
    if (!referrer) return 'direct';
    
    const domain = new URL(referrer).hostname.toLowerCase();
    
    // 搜索引擎
    if (/google\.|bing\.|yahoo\.|baidu\.|duckduckgo\./.test(domain)) {
      return 'search';
    }
    
    // 社交媒体
    if (/facebook\.|twitter\.|linkedin\.|instagram\.|reddit\./.test(domain)) {
      return 'social';
    }
    
    // GitHub相关
    if (/github\./.test(domain)) {
      return 'github';
    }
    
    return 'referral';
  }

  // 获取页面加载时间
  getLoadTime() {
    if ('performance' in window && 'timing' in performance) {
      const timing = performance.timing;
      return timing.loadEventEnd - timing.navigationStart;
    }
    return null;
  }

  // 获取地理位置数据
  async getLocationData() {
    try {
      const response = await fetch('https://ipapi.co/json/', {
        timeout: 5000
      });
      
      if (!response.ok) throw new Error('IP API failed');
      
      const ipData = await response.json();
      
      return {
        ip: ipData.ip,
        city: ipData.city,
        region: ipData.region,
        country: ipData.country_name,
        countryCode: ipData.country_code,
        latitude: ipData.latitude,
        longitude: ipData.longitude,
        isp: ipData.org,
        asn: ipData.asn
      };
    } catch (error) {
      return {};
    }
  }

  // 发送数据到后端
  async sendData(data) {
    const methods = [
      () => this.sendToGoogleSheets(data),
      () => this.sendToFormSpree(data),
      () => this.sendToLocalStorage(data)
    ];

    for (const method of methods) {
      try {
        await method();
        break; // 成功发送后退出
      } catch (error) {
        console.log('发送方法失败，尝试下一个');
      }
    }
  }

  // 发送到Google Sheets
  async sendToGoogleSheets(data) {
    const response = await fetch(this.endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return response;
  }

  // 发送到FormSpree
  async sendToFormSpree(data) {
    const formData = new FormData();
    formData.append('analytics', JSON.stringify(data));
    
    const response = await fetch('https://formspree.io/f/xpzvzjbk', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) throw new Error('FormSpree failed');
    return response;
  }

  // 本地存储作为备份
  sendToLocalStorage(data) {
    try {
      const existing = JSON.parse(localStorage.getItem('analytics_backup') || '[]');
      existing.push(data);
      
      // 只保留最近100条记录
      if (existing.length > 100) {
        existing.splice(0, existing.length - 100);
      }
      
      localStorage.setItem('analytics_backup', JSON.stringify(existing));
    } catch (error) {
      console.log('本地存储失败');
    }
  }

  // 记录页面停留时间
  recordPageView() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    
    if (duration > 1000) { // 只记录停留超过1秒的访问
      const data = {
        type: 'page_view_end',
        visitId: this.visitId,
        sessionId: this.sessionId,
        url: window.location.href,
        duration: duration,
        timestamp: new Date().toISOString()
      };
      
      // 使用beacon API确保数据发送
      if ('sendBeacon' in navigator) {
        navigator.sendBeacon('https://formspree.io/f/xpzvzjbk', JSON.stringify(data));
      }
    }
  }

  // 初始化分析
  init() {
    // 页面加载完成后收集数据
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.collectData());
    } else {
      this.collectData();
    }

    // 页面卸载时记录停留时间
    window.addEventListener('beforeunload', () => this.recordPageView());
    window.addEventListener('pagehide', () => this.recordPageView());

    // 记录滚动深度
    this.trackScrollDepth();
  }

  // 跟踪滚动深度
  trackScrollDepth() {
    let maxScroll = 0;
    let scrollTimer;

    const trackScroll = () => {
      const scrollPercent = Math.round(
        (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
      }
      
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (maxScroll > 0) {
          this.sendScrollData(maxScroll);
        }
      }, 1000);
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
  }

  // 发送滚动数据
  sendScrollData(maxScrollPercent) {
    const data = {
      type: 'scroll_depth',
      visitId: this.visitId,
      sessionId: this.sessionId,
      url: window.location.href,
      maxScrollPercent: maxScrollPercent,
      timestamp: new Date().toISOString()
    };

    this.sendToFormSpree(data).catch(() => {});
  }
}

// 初始化分析系统
const analytics = new WebsiteAnalytics();
analytics.init();

// 导出给其他脚本使用
window.websiteAnalytics = analytics;
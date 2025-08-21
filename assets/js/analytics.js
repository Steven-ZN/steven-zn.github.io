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

  // 只保存到本地存储
  async sendData(data) {
    this.sendToLocalStorage(data);
    
    // 可选：每100次访问自动导出一次TXT备份
    const existing = JSON.parse(localStorage.getItem('analytics_backup') || '[]');
    if (existing.length % 100 === 0 && existing.length > 0) {
      this.autoExportTXT();
    }
  }

  // 本地存储作为备份
  sendToLocalStorage(data) {
    try {
      const existing = JSON.parse(localStorage.getItem('analytics_backup') || '[]');
      existing.push(data);
      
      // 保留最近500条记录（增加容量）
      if (existing.length > 500) {
        existing.splice(0, existing.length - 500);
      }
      
      localStorage.setItem('analytics_backup', JSON.stringify(existing));
      
      // 同时保存到另一个键作为完整备份
      this.saveToFullBackup(data);
    } catch (error) {
      console.log('本地存储失败');
    }
  }

  // 保存完整备份（不限制数量）
  saveToFullBackup(data) {
    try {
      const fullBackup = JSON.parse(localStorage.getItem('analytics_full_backup') || '[]');
      fullBackup.push(data);
      localStorage.setItem('analytics_full_backup', JSON.stringify(fullBackup));
    } catch (error) {
      console.log('完整备份保存失败');
    }
  }

  // 导出所有数据的方法
  exportAllData() {
    try {
      const fullData = JSON.parse(localStorage.getItem('analytics_full_backup') || '[]');
      const recentData = JSON.parse(localStorage.getItem('analytics_backup') || '[]');
      
      // 合并并去重
      const allData = [...fullData, ...recentData];
      const uniqueData = allData.filter((item, index, self) => 
        index === self.findIndex(t => t.visitId === item.visitId)
      );
      
      return uniqueData.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    } catch (error) {
      return [];
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

    this.sendToLocalStorage(data);
  }

  // 自动导出TXT文件
  autoExportTXT() {
    try {
      const allData = this.exportAllData();
      
      let txtContent = '网站访问统计自动备份\n';
      txtContent += '=' * 50 + '\n\n';
      txtContent += `导出时间: ${new Date().toLocaleString('zh-CN')}\n`;
      txtContent += `总访问次数: ${allData.length}\n\n`;
      
      txtContent += '详细访问记录:\n';
      txtContent += '-' * 30 + '\n\n';
      
      allData.forEach((visit, index) => {
        txtContent += `[${index + 1}] ${visit.type || '页面访问'}\n`;
        txtContent += `时间: ${new Date(visit.timestamp).toLocaleString('zh-CN')}\n`;
        txtContent += `IP地址: ${visit.ip || '未知'}\n`;
        txtContent += `位置: ${visit.city || '未知'}, ${visit.country || '未知'}\n`;
        txtContent += `页面: ${visit.url}\n`;
        txtContent += `设备: ${visit.deviceType}\n`;
        txtContent += `浏览器: ${visit.userAgent?.substring(0, 50)}...\n`;
        if (visit.maxScrollPercent) {
          txtContent += `滚动深度: ${visit.maxScrollPercent}%\n`;
        }
        if (visit.duration) {
          txtContent += `停留时间: ${Math.round(visit.duration / 1000)}秒\n`;
        }
        txtContent += '\n' + '-' * 30 + '\n\n';
      });
      
      // 创建并下载文件
      const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `auto-backup-${new Date().toISOString().split('T')[0]}.txt`;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      console.log('访问数据自动备份已保存');
    } catch (error) {
      console.log('自动备份失败:', error);
    }
  }
}

// 初始化分析系统
const analytics = new WebsiteAnalytics();
analytics.init();

// 导出给其他脚本使用
window.websiteAnalytics = analytics;
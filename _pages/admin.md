---
layout: single
title: "Admin Dashboard"
permalink: /admin/
author_profile: false
---

<div id="admin-login" style="max-width: 400px; margin: 100px auto; text-align: center;">
  <h2>管理员登录</h2>
  <input type="password" id="admin-password" placeholder="输入管理员密码" style="padding: 10px; width: 200px; margin: 10px;">
  <br>
  <button onclick="checkPassword()" style="padding: 10px 20px; background: #2196F3; color: white; border: none; cursor: pointer;">登录</button>
</div>

<div id="admin-dashboard" style="display: none;">
  <h1>访问统计管理面板</h1>
  
  <div style="margin: 20px 0;">
    <button onclick="exportAnalytics()" style="padding: 10px 20px; background: #4CAF50; color: white; border: none; cursor: pointer; margin: 5px;">导出访问数据 (TXT)</button>
    <button onclick="exportAnalyticsCSV()" style="padding: 10px 20px; background: #FF9800; color: white; border: none; cursor: pointer; margin: 5px;">导出访问数据 (CSV)</button>
    <button onclick="clearLocalData()" style="padding: 10px 20px; background: #f44336; color: white; border: none; cursor: pointer; margin: 5px;">清空本地数据</button>
    <button onclick="viewRealTimeData()" style="padding: 10px 20px; background: #9C27B0; color: white; border: none; cursor: pointer; margin: 5px;">查看实时统计</button>
  </div>

  <div id="analytics-summary" style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
    <h3>访问统计概览</h3>
    <div id="stats-content">加载中...</div>
  </div>

  <div id="recent-visits" style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 8px;">
    <h3>最近访问记录</h3>
    <div id="visits-content">加载中...</div>
  </div>

  <div id="export-status" style="margin: 20px 0; padding: 10px; display: none;"></div>
</div>

<script>
// 管理员密码验证
function checkPassword() {
  const password = document.getElementById('admin-password').value;
  // 简单的密码验证 - 实际使用中应该更安全
  if (password === 'steven2025admin') {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
    loadAnalyticsData();
  } else {
    alert('密码错误！');
  }
}

// 加载分析数据
function loadAnalyticsData() {
  const data = getLocalAnalyticsData();
  updateStatsSummary(data);
  updateRecentVisits(data);
}

// 获取本地存储的分析数据
function getLocalAnalyticsData() {
  try {
    return JSON.parse(localStorage.getItem('analytics_backup') || '[]');
  } catch (error) {
    return [];
  }
}

// 更新统计概览
function updateStatsSummary(data) {
  const today = new Date().toDateString();
  const todayVisits = data.filter(visit => new Date(visit.timestamp).toDateString() === today);
  
  const uniqueIPs = new Set(data.map(visit => visit.ip)).size;
  const countries = [...new Set(data.map(visit => visit.country).filter(Boolean))];
  const devices = data.reduce((acc, visit) => {
    acc[visit.deviceType] = (acc[visit.deviceType] || 0) + 1;
    return acc;
  }, {});

  const html = `
    <p><strong>总访问次数:</strong> ${data.length}</p>
    <p><strong>今日访问:</strong> ${todayVisits.length}</p>
    <p><strong>独立IP数:</strong> ${uniqueIPs}</p>
    <p><strong>访问国家:</strong> ${countries.join(', ')}</p>
    <p><strong>设备分布:</strong> ${Object.entries(devices).map(([device, count]) => `${device}: ${count}`).join(', ')}</p>
    <p><strong>最后更新:</strong> ${new Date().toLocaleString('zh-CN')}</p>
  `;
  
  document.getElementById('stats-content').innerHTML = html;
}

// 更新最近访问记录
function updateRecentVisits(data) {
  const recent = data.slice(-10).reverse(); // 最近10条，倒序显示
  
  const html = recent.map(visit => `
    <div style="border-bottom: 1px solid #ddd; padding: 10px 0;">
      <p><strong>时间:</strong> ${new Date(visit.timestamp).toLocaleString('zh-CN')}</p>
      <p><strong>IP:</strong> ${visit.ip || '未知'} | <strong>位置:</strong> ${visit.city || '未知'}, ${visit.country || '未知'}</p>
      <p><strong>页面:</strong> ${visit.url}</p>
      <p><strong>设备:</strong> ${visit.deviceType} | <strong>浏览器:</strong> ${visit.userAgent?.split(' ')[0] || '未知'}</p>
      <p><strong>来源:</strong> ${visit.referrer === 'direct' ? '直接访问' : visit.referrer}</p>
    </div>
  `).join('');
  
  document.getElementById('visits-content').innerHTML = html || '<p>暂无访问记录</p>';
}

// 导出分析数据为TXT
function exportAnalytics() {
  const data = getLocalAnalyticsData();
  
  let txtContent = '网站访问统计报告\n';
  txtContent += '=' * 50 + '\n\n';
  txtContent += `导出时间: ${new Date().toLocaleString('zh-CN')}\n`;
  txtContent += `总访问次数: ${data.length}\n\n`;
  
  txtContent += '详细访问记录:\n';
  txtContent += '-' * 30 + '\n\n';
  
  data.forEach((visit, index) => {
    txtContent += `[${index + 1}] 访问记录\n`;
    txtContent += `时间: ${new Date(visit.timestamp).toLocaleString('zh-CN')}\n`;
    txtContent += `IP地址: ${visit.ip || '未知'}\n`;
    txtContent += `地理位置: ${visit.city || '未知'}, ${visit.region || ''} ${visit.country || '未知'}\n`;
    txtContent += `访问页面: ${visit.url}\n`;
    txtContent += `页面标题: ${visit.title || '未知'}\n`;
    txtContent += `来源: ${visit.referrer === 'direct' ? '直接访问' : visit.referrer}\n`;
    txtContent += `设备类型: ${visit.deviceType}\n`;
    txtContent += `屏幕分辨率: ${visit.screenWidth}x${visit.screenHeight}\n`;
    txtContent += `浏览器: ${visit.userAgent}\n`;
    txtContent += `语言: ${visit.language}\n`;
    txtContent += `时区: ${visit.timezone}\n`;
    txtContent += `ISP: ${visit.isp || '未知'}\n`;
    if (visit.duration) {
      txtContent += `停留时间: ${Math.round(visit.duration / 1000)}秒\n`;
    }
    txtContent += '\n' + '-' * 50 + '\n\n';
  });
  
  // 下载文件
  const blob = new Blob([txtContent], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `website-analytics-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  
  showExportStatus('TXT文件导出成功！', 'success');
}

// 导出为CSV格式
function exportAnalyticsCSV() {
  const data = getLocalAnalyticsData();
  
  const headers = [
    '访问时间', 'IP地址', '城市', '国家', '访问页面', '页面标题', '来源', 
    '设备类型', '屏幕宽度', '屏幕高度', '浏览器', '语言', '时区', 'ISP', '停留时间(秒)'
  ];
  
  let csvContent = headers.join(',') + '\n';
  
  data.forEach(visit => {
    const row = [
      `"${new Date(visit.timestamp).toLocaleString('zh-CN')}"`,
      `"${visit.ip || ''}"`,
      `"${visit.city || ''}"`,
      `"${visit.country || ''}"`,
      `"${visit.url || ''}"`,
      `"${visit.title || ''}"`,
      `"${visit.referrer === 'direct' ? '直接访问' : visit.referrer || ''}"`,
      `"${visit.deviceType || ''}"`,
      `"${visit.screenWidth || ''}"`,
      `"${visit.screenHeight || ''}"`,
      `"${visit.userAgent || ''}"`,
      `"${visit.language || ''}"`,
      `"${visit.timezone || ''}"`,
      `"${visit.isp || ''}"`,
      `"${visit.duration ? Math.round(visit.duration / 1000) : ''}"`
    ];
    csvContent += row.join(',') + '\n';
  });
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `website-analytics-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
  
  showExportStatus('CSV文件导出成功！', 'success');
}

// 清空本地数据
function clearLocalData() {
  if (confirm('确定要清空所有本地访问数据吗？此操作不可恢复。')) {
    localStorage.removeItem('analytics_backup');
    loadAnalyticsData();
    showExportStatus('本地数据已清空', 'success');
  }
}

// 查看实时统计
function viewRealTimeData() {
  setInterval(() => {
    loadAnalyticsData();
  }, 30000); // 每30秒刷新一次
  showExportStatus('已开启实时数据刷新（每30秒）', 'info');
}

// 显示导出状态
function showExportStatus(message, type) {
  const statusDiv = document.getElementById('export-status');
  statusDiv.style.display = 'block';
  statusDiv.innerHTML = message;
  statusDiv.style.background = type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : '#d1ecf1';
  statusDiv.style.color = type === 'success' ? '#155724' : type === 'error' ? '#721c24' : '#0c5460';
  statusDiv.style.border = `1px solid ${type === 'success' ? '#c3e6cb' : type === 'error' ? '#f5c6cb' : '#bee5eb'}`;
  
  setTimeout(() => {
    statusDiv.style.display = 'none';
  }, 3000);
}

// 页面加载时检查是否有保存的登录状态
window.addEventListener('load', () => {
  // 这里可以添加记住登录状态的逻辑
});
</script>

<style>
button:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}

input {
  border: 1px solid #ddd;
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: #2196F3;
}

#admin-dashboard {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

@media (max-width: 768px) {
  button {
    width: 100%;
    margin: 5px 0 !important;
  }
}
</style>
export const id = 'slack';
export const title = '#general | AI 開發團隊 | Slack';

export const html = `
<div class="slack-app">
  <div class="slack-workspace-bar">
    <div class="slack-workspace-icon active">AI</div>
    <div class="slack-workspace-icon">M</div>
    <div class="slack-workspace-icon">+</div>
  </div>
  <div class="slack-sidebar">
    <div class="slack-team-header">
      <span class="slack-team-name">AI 開發團隊</span>
      <span class="slack-dropdown">▼</span>
    </div>
    <div class="slack-nav-section">
      <div class="slack-nav-item">
        <span class="slack-nav-icon">💬</span>
        <span>訊息</span>
      </div>
      <div class="slack-nav-item">
        <span class="slack-nav-icon">📥</span>
        <span>稍後處理</span>
      </div>
      <div class="slack-nav-item">
        <span class="slack-nav-icon">📤</span>
        <span>草稿與已傳送</span>
      </div>
    </div>
    <div class="slack-channels-header">
      <span>▼ 頻道</span>
    </div>
    <div class="slack-channel active">
      <span>#</span> general
    </div>
    <div class="slack-channel">
      <span>#</span> dev-backend
    </div>
    <div class="slack-channel">
      <span>#</span> dev-frontend
    </div>
    <div class="slack-channel">
      <span>#</span> random
    </div>
    <div class="slack-channel">
      <span>#</span> standup
    </div>
    <div class="slack-channels-header">
      <span>▼ 私訊</span>
    </div>
    <div class="slack-dm">
      <span class="slack-status online"></span>
      <span>王小明</span>
    </div>
    <div class="slack-dm">
      <span class="slack-status away"></span>
      <span>李美玲</span>
    </div>
  </div>
  <div class="slack-main">
    <div class="slack-header">
      <div class="slack-channel-info">
        <span class="slack-channel-name"># general</span>
        <span class="slack-channel-desc">團隊公告與一般討論</span>
      </div>
      <div class="slack-header-actions">
        <span class="slack-header-btn">📌</span>
        <span class="slack-header-btn">👤 5</span>
        <input type="text" class="slack-search" placeholder="搜尋" readonly>
      </div>
    </div>
    <div class="slack-messages">
      <div class="slack-date-divider">
        <span>12月30日 週一</span>
      </div>
      <div class="slack-message">
        <div class="slack-avatar" style="background: #e91e63;">YT</div>
        <div class="slack-message-content">
          <div class="slack-message-header">
            <span class="slack-username">楊大同</span>
            <span class="slack-time">上午 9:15</span>
          </div>
          <div class="slack-text">早安各位！今天的 standup 改到 10:30，會議室 A</div>
        </div>
      </div>
      <div class="slack-message">
        <div class="slack-avatar" style="background: #2196f3;">JC</div>
        <div class="slack-message-content">
          <div class="slack-message-header">
            <span class="slack-username">陳建宏</span>
            <span class="slack-time">上午 9:18</span>
          </div>
          <div class="slack-text">收到 👍</div>
        </div>
      </div>
      <div class="slack-message">
        <div class="slack-avatar" style="background: #4caf50;">LW</div>
        <div class="slack-message-content">
          <div class="slack-message-header">
            <span class="slack-username">林婉婷</span>
            <span class="slack-time">上午 9:32</span>
          </div>
          <div class="slack-text">@楊大同 Claude API 整合的 PR 我 review 完了，有幾個小建議，麻煩看一下</div>
        </div>
      </div>
      <div class="slack-message">
        <div class="slack-avatar" style="background: #ff9800;">KH</div>
        <div class="slack-message-content">
          <div class="slack-message-header">
            <span class="slack-username">黃凱文</span>
            <span class="slack-time">上午 10:05</span>
          </div>
          <div class="slack-text">前端這邊 Q4 的效能優化已經部署到 staging 了，大家幫忙測試一下 🚀</div>
          <div class="slack-reactions">
            <span class="slack-reaction">🎉 3</span>
            <span class="slack-reaction">👀 2</span>
          </div>
        </div>
      </div>
      <div class="slack-message">
        <div class="slack-avatar" style="background: #9c27b0;">WM</div>
        <div class="slack-message-content">
          <div class="slack-message-header">
            <span class="slack-username">王小明</span>
            <span class="slack-time">上午 10:12</span>
          </div>
          <div class="slack-text">讚！等等來測</div>
        </div>
      </div>
    </div>
    <div class="slack-input-area">
      <div class="slack-input-box">
        <span class="slack-input-icon">＋</span>
        <input type="text" placeholder="訊息傳送到 #general" readonly>
        <span class="slack-input-icon">😀</span>
        <span class="slack-input-icon">📎</span>
      </div>
    </div>
  </div>
</div>
`;

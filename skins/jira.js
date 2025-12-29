export const id = 'jira';
export const title = 'AI-2025 Sprint 12 | Jira';

export const html = `
<div class="jira-app">
  <div class="jira-sidebar">
    <div class="jira-logo">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path fill="#2684FF" d="M11.571 11.513H0a5.218 5.218 0 0 0 5.232 5.215h2.13v2.057A5.215 5.215 0 0 0 12.575 24V12.518a1.005 1.005 0 0 0-1.005-1.005z"/>
        <path fill="#2684FF" d="M5.024 5.506h11.548a5.218 5.218 0 0 0-5.232-5.215h-2.13V.234A5.215 5.215 0 0 0 4.002 5.447v.06h1.022z" opacity=".6"/>
        <path fill="#2684FF" d="M17.577 5.506H6.006v11.506a5.215 5.215 0 0 0 5.213 5.215h2.13v-2.057a5.218 5.218 0 0 0 5.232-5.215V6.511a1.005 1.005 0 0 0-1.004-1.005z" opacity=".8"/>
      </svg>
      <span>Jira Software</span>
    </div>
    <nav class="jira-nav">
      <a class="jira-nav-item active">
        <span class="jira-nav-icon">📋</span>
        <span>看板</span>
      </a>
      <a class="jira-nav-item">
        <span class="jira-nav-icon">📊</span>
        <span>待辦清單</span>
      </a>
      <a class="jira-nav-item">
        <span class="jira-nav-icon">📈</span>
        <span>報告</span>
      </a>
      <a class="jira-nav-item">
        <span class="jira-nav-icon">⚙️</span>
        <span>專案設定</span>
      </a>
    </nav>
  </div>
  <div class="jira-main">
    <div class="jira-header">
      <div class="jira-breadcrumb">
        <span>專案</span> / <span>AI-2025</span> / <span class="jira-current">看板</span>
      </div>
      <div class="jira-search">
        <input type="text" placeholder="搜尋此看板" readonly>
      </div>
    </div>
    <h1 class="jira-board-title">AI-2025 Sprint 12</h1>
    <div class="jira-board">
      <div class="jira-column">
        <div class="jira-column-header">
          <span class="jira-column-title">待辦事項</span>
          <span class="jira-column-count">3</span>
        </div>
        <div class="jira-card">
          <div class="jira-card-type bug">🐛</div>
          <div class="jira-card-content">
            <div class="jira-card-id">AI-2025-142</div>
            <div class="jira-card-title">修復 API 回應延遲問題</div>
            <div class="jira-card-meta">
              <span class="jira-priority high">高</span>
              <span class="jira-avatar">JC</span>
            </div>
          </div>
        </div>
        <div class="jira-card">
          <div class="jira-card-type task">📝</div>
          <div class="jira-card-content">
            <div class="jira-card-id">AI-2025-143</div>
            <div class="jira-card-title">更新使用者文件</div>
            <div class="jira-card-meta">
              <span class="jira-priority medium">中</span>
              <span class="jira-avatar">LW</span>
            </div>
          </div>
        </div>
        <div class="jira-card">
          <div class="jira-card-type story">📖</div>
          <div class="jira-card-content">
            <div class="jira-card-id">AI-2025-144</div>
            <div class="jira-card-title">實作深色模式切換</div>
            <div class="jira-card-meta">
              <span class="jira-priority low">低</span>
              <span class="jira-avatar">KH</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jira-column">
        <div class="jira-column-header">
          <span class="jira-column-title">進行中</span>
          <span class="jira-column-count">2</span>
        </div>
        <div class="jira-card">
          <div class="jira-card-type story">📖</div>
          <div class="jira-card-content">
            <div class="jira-card-id">AI-2025-138</div>
            <div class="jira-card-title">整合 Claude API 端點</div>
            <div class="jira-card-meta">
              <span class="jira-priority high">高</span>
              <span class="jira-avatar">YT</span>
            </div>
          </div>
        </div>
        <div class="jira-card">
          <div class="jira-card-type task">📝</div>
          <div class="jira-card-content">
            <div class="jira-card-id">AI-2025-140</div>
            <div class="jira-card-title">效能優化 - 快取機制</div>
            <div class="jira-card-meta">
              <span class="jira-priority medium">中</span>
              <span class="jira-avatar">JC</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jira-column">
        <div class="jira-column-header">
          <span class="jira-column-title">審核中</span>
          <span class="jira-column-count">1</span>
        </div>
        <div class="jira-card">
          <div class="jira-card-type story">📖</div>
          <div class="jira-card-content">
            <div class="jira-card-id">AI-2025-135</div>
            <div class="jira-card-title">多語系支援 (i18n)</div>
            <div class="jira-card-meta">
              <span class="jira-priority medium">中</span>
              <span class="jira-avatar">LW</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jira-column">
        <div class="jira-column-header">
          <span class="jira-column-title">完成</span>
          <span class="jira-column-count">4</span>
        </div>
        <div class="jira-card done">
          <div class="jira-card-type task">📝</div>
          <div class="jira-card-content">
            <div class="jira-card-id">AI-2025-130</div>
            <div class="jira-card-title">資料庫 Schema 設計</div>
            <div class="jira-card-meta">
              <span class="jira-avatar">YT</span>
            </div>
          </div>
        </div>
        <div class="jira-card done">
          <div class="jira-card-type bug">🐛</div>
          <div class="jira-card-content">
            <div class="jira-card-id">AI-2025-132</div>
            <div class="jira-card-title">登入驗證失敗問題</div>
            <div class="jira-card-meta">
              <span class="jira-avatar">KH</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

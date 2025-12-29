export const id = 'notion';
export const title = '2025 專案規劃 - Notion';

export const html = `
<div class="notion-app">
  <div class="notion-sidebar">
    <div class="notion-workspace">
      <div class="notion-workspace-icon">🏢</div>
      <span class="notion-workspace-name">AI 新創團隊</span>
      <span class="notion-dropdown">▼</span>
    </div>
    <div class="notion-nav-section">
      <div class="notion-nav-item">
        <span>🔍</span> 搜尋
      </div>
      <div class="notion-nav-item">
        <span>🏠</span> 首頁
      </div>
      <div class="notion-nav-item">
        <span>📥</span> 收件匣
      </div>
    </div>
    <div class="notion-section-header">私人</div>
    <div class="notion-page-item active">
      <span>📋</span> 2025 專案規劃
    </div>
    <div class="notion-page-item">
      <span>📝</span> 會議記錄
    </div>
    <div class="notion-page-item">
      <span>💡</span> 創意發想
    </div>
    <div class="notion-section-header">團隊空間</div>
    <div class="notion-page-item">
      <span>📊</span> OKR 追蹤
    </div>
    <div class="notion-page-item">
      <span>📚</span> 技術文件
    </div>
    <div class="notion-page-item">
      <span>👥</span> 團隊資訊
    </div>
    <div class="notion-add-page">
      <span>＋</span> 新增頁面
    </div>
  </div>
  <div class="notion-main">
    <div class="notion-topbar">
      <div class="notion-breadcrumb">
        <span>私人</span> / <span>2025 專案規劃</span>
      </div>
      <div class="notion-actions">
        <span class="notion-btn">分享</span>
        <span class="notion-btn">⋯</span>
      </div>
    </div>
    <div class="notion-content">
      <div class="notion-page-icon">📋</div>
      <h1 class="notion-title">2025 專案規劃</h1>
      <div class="notion-properties">
        <div class="notion-property">
          <span class="notion-property-name">狀態</span>
          <span class="notion-tag in-progress">進行中</span>
        </div>
        <div class="notion-property">
          <span class="notion-property-name">負責人</span>
          <span class="notion-person">👤 楊大同</span>
        </div>
      </div>
      <div class="notion-block">
        <h2>Q4 目標</h2>
      </div>
      <div class="notion-block todo">
        <span class="notion-checkbox checked">✓</span>
        <span>完成 Claude API 整合</span>
      </div>
      <div class="notion-block todo">
        <span class="notion-checkbox checked">✓</span>
        <span>效能優化 - 回應時間 < 200ms</span>
      </div>
      <div class="notion-block todo">
        <span class="notion-checkbox"></span>
        <span>多語系支援 (i18n)</span>
      </div>
      <div class="notion-block todo">
        <span class="notion-checkbox"></span>
        <span>深色模式</span>
      </div>
      <div class="notion-block">
        <h2>時程表</h2>
      </div>
      <div class="notion-table">
        <div class="notion-table-row header">
          <span>里程碑</span>
          <span>截止日</span>
          <span>狀態</span>
        </div>
        <div class="notion-table-row">
          <span>API 整合</span>
          <span>12/15</span>
          <span class="notion-tag done">完成</span>
        </div>
        <div class="notion-table-row">
          <span>效能優化</span>
          <span>12/22</span>
          <span class="notion-tag done">完成</span>
        </div>
        <div class="notion-table-row">
          <span>i18n</span>
          <span>12/29</span>
          <span class="notion-tag in-progress">進行中</span>
        </div>
        <div class="notion-table-row">
          <span>深色模式</span>
          <span>12/31</span>
          <span class="notion-tag pending">待處理</span>
        </div>
      </div>
      <div class="notion-block">
        <h2>備註</h2>
      </div>
      <div class="notion-block callout">
        <span class="notion-callout-icon">💡</span>
        <span>年底前完成 4 項主要功能，準備 Q1 發布</span>
      </div>
    </div>
  </div>
</div>
`;

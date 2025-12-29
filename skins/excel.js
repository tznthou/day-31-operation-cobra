export const id = 'excel';
export const title = '2025_Q4_財務報表.xlsx - Excel';

export const html = `
<div class="excel-app">
  <div class="excel-ribbon">
    <div class="excel-title-bar">
      <div class="excel-icon">
        <svg width="16" height="16" viewBox="0 0 16 16">
          <rect fill="#217346" width="16" height="16" rx="2"/>
          <text x="3" y="12" fill="white" font-size="10" font-weight="bold">X</text>
        </svg>
      </div>
      <span class="excel-filename">2025_Q4_財務報表.xlsx - Excel</span>
      <div class="excel-window-controls">
        <span>—</span>
        <span>□</span>
        <span>×</span>
      </div>
    </div>
    <div class="excel-tabs">
      <div class="excel-tab">檔案</div>
      <div class="excel-tab active">常用</div>
      <div class="excel-tab">插入</div>
      <div class="excel-tab">版面配置</div>
      <div class="excel-tab">公式</div>
      <div class="excel-tab">資料</div>
      <div class="excel-tab">校閱</div>
      <div class="excel-tab">檢視</div>
    </div>
    <div class="excel-toolbar">
      <div class="excel-tool-group">
        <button class="excel-btn">貼上</button>
        <button class="excel-btn-small">剪下</button>
        <button class="excel-btn-small">複製</button>
      </div>
      <div class="excel-tool-group">
        <select class="excel-font-select">
          <option>新細明體</option>
        </select>
        <select class="excel-size-select">
          <option>11</option>
        </select>
        <button class="excel-btn-icon"><b>B</b></button>
        <button class="excel-btn-icon"><i>I</i></button>
        <button class="excel-btn-icon"><u>U</u></button>
      </div>
    </div>
  </div>
  <div class="excel-formula-bar">
    <div class="excel-cell-name">D7</div>
    <div class="excel-formula-input">=SUM(D3:D6)</div>
  </div>
  <div class="excel-sheet">
    <table class="excel-table">
      <thead>
        <tr>
          <th class="excel-row-header"></th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
          <th>F</th>
          <th>G</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="excel-row-header">1</td>
          <td class="excel-bold" colspan="4">2025 Q4 財務摘要報表</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="excel-row-header">2</td>
          <td class="excel-header">項目</td>
          <td class="excel-header">10月</td>
          <td class="excel-header">11月</td>
          <td class="excel-header">12月</td>
          <td class="excel-header">Q4 合計</td>
          <td class="excel-header">YoY</td>
          <td></td>
        </tr>
        <tr>
          <td class="excel-row-header">3</td>
          <td>營業收入</td>
          <td class="excel-number">12,450,000</td>
          <td class="excel-number">13,280,000</td>
          <td class="excel-number">15,670,000</td>
          <td class="excel-number excel-bold">41,400,000</td>
          <td class="excel-positive">+18.5%</td>
          <td></td>
        </tr>
        <tr>
          <td class="excel-row-header">4</td>
          <td>營業成本</td>
          <td class="excel-number">7,470,000</td>
          <td class="excel-number">7,968,000</td>
          <td class="excel-number">9,402,000</td>
          <td class="excel-number">24,840,000</td>
          <td class="excel-negative">+12.3%</td>
          <td></td>
        </tr>
        <tr>
          <td class="excel-row-header">5</td>
          <td>毛利</td>
          <td class="excel-number">4,980,000</td>
          <td class="excel-number">5,312,000</td>
          <td class="excel-number">6,268,000</td>
          <td class="excel-number excel-bold">16,560,000</td>
          <td class="excel-positive">+28.2%</td>
          <td></td>
        </tr>
        <tr>
          <td class="excel-row-header">6</td>
          <td>營業費用</td>
          <td class="excel-number">2,490,000</td>
          <td class="excel-number">2,656,000</td>
          <td class="excel-number">3,134,000</td>
          <td class="excel-number">8,280,000</td>
          <td class="excel-negative">+15.6%</td>
          <td></td>
        </tr>
        <tr>
          <td class="excel-row-header">7</td>
          <td class="excel-bold">營業淨利</td>
          <td class="excel-number excel-bold">2,490,000</td>
          <td class="excel-number excel-bold">2,656,000</td>
          <td class="excel-number excel-bold">3,134,000</td>
          <td class="excel-number excel-bold excel-highlight">8,280,000</td>
          <td class="excel-positive excel-bold">+45.8%</td>
          <td></td>
        </tr>
        <tr>
          <td class="excel-row-header">8</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="excel-row-header">9</td>
          <td class="excel-bold">毛利率</td>
          <td>40.0%</td>
          <td>40.0%</td>
          <td>40.0%</td>
          <td class="excel-bold">40.0%</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td class="excel-row-header">10</td>
          <td class="excel-bold">營益率</td>
          <td>20.0%</td>
          <td>20.0%</td>
          <td>20.0%</td>
          <td class="excel-bold">20.0%</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="excel-sheet-tabs">
    <div class="excel-sheet-tab active">Q4摘要</div>
    <div class="excel-sheet-tab">明細</div>
    <div class="excel-sheet-tab">圖表</div>
    <div class="excel-sheet-tab">+</div>
  </div>
  <div class="excel-status-bar">
    <span>就緒</span>
    <span class="excel-status-right">平均值: 8,280,000 | 計數: 4 | 加總: 33,120,000</span>
  </div>
</div>
`;

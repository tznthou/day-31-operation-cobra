export const id = 'vscode';
export const title = 'api.ts - ai-project - Visual Studio Code';

export const html = `
<div class="vscode-app">
  <div class="vscode-titlebar">
    <div class="vscode-titlebar-left">
      <span class="vscode-menu">檔案</span>
      <span class="vscode-menu">編輯</span>
      <span class="vscode-menu">選取</span>
      <span class="vscode-menu">檢視</span>
      <span class="vscode-menu">執行</span>
      <span class="vscode-menu">終端機</span>
      <span class="vscode-menu">說明</span>
    </div>
    <div class="vscode-titlebar-center">api.ts - ai-project - Visual Studio Code</div>
    <div class="vscode-titlebar-right">
      <span>—</span>
      <span>□</span>
      <span>×</span>
    </div>
  </div>
  <div class="vscode-main">
    <div class="vscode-activitybar">
      <div class="vscode-activity-icon active">📁</div>
      <div class="vscode-activity-icon">🔍</div>
      <div class="vscode-activity-icon">🔀</div>
      <div class="vscode-activity-icon">🐛</div>
      <div class="vscode-activity-icon">🧩</div>
      <div class="vscode-activity-icon bottom">⚙️</div>
    </div>
    <div class="vscode-sidebar">
      <div class="vscode-sidebar-header">
        <span>檔案總管</span>
        <span class="vscode-sidebar-actions">⋯</span>
      </div>
      <div class="vscode-tree">
        <div class="vscode-tree-header">AI-PROJECT</div>
        <div class="vscode-folder open">
          <span class="vscode-folder-icon">📂</span> src
        </div>
        <div class="vscode-file indent">
          <span class="vscode-file-icon ts">TS</span> api.ts
        </div>
        <div class="vscode-file indent">
          <span class="vscode-file-icon ts">TS</span> index.ts
        </div>
        <div class="vscode-file indent">
          <span class="vscode-file-icon ts">TS</span> types.ts
        </div>
        <div class="vscode-folder">
          <span class="vscode-folder-icon">📁</span> utils
        </div>
        <div class="vscode-folder">
          <span class="vscode-folder-icon">📁</span> tests
        </div>
        <div class="vscode-file">
          <span class="vscode-file-icon json">{}</span> package.json
        </div>
        <div class="vscode-file">
          <span class="vscode-file-icon ts">TS</span> tsconfig.json
        </div>
        <div class="vscode-file">
          <span class="vscode-file-icon md">M</span> README.md
        </div>
      </div>
    </div>
    <div class="vscode-editor-area">
      <div class="vscode-tabs">
        <div class="vscode-tab active">
          <span class="vscode-tab-icon ts">TS</span>
          <span>api.ts</span>
          <span class="vscode-tab-close">×</span>
        </div>
        <div class="vscode-tab">
          <span class="vscode-tab-icon ts">TS</span>
          <span>types.ts</span>
          <span class="vscode-tab-close">×</span>
        </div>
      </div>
      <div class="vscode-editor">
        <div class="vscode-line"><span class="vscode-ln">1</span><span class="vscode-kw">import</span> { ClaudeClient } <span class="vscode-kw">from</span> <span class="vscode-str">'@anthropic-ai/sdk'</span>;</div>
        <div class="vscode-line"><span class="vscode-ln">2</span><span class="vscode-kw">import</span> { APIResponse, Message } <span class="vscode-kw">from</span> <span class="vscode-str">'./types'</span>;</div>
        <div class="vscode-line"><span class="vscode-ln">3</span></div>
        <div class="vscode-line"><span class="vscode-ln">4</span><span class="vscode-kw">const</span> <span class="vscode-var">client</span> = <span class="vscode-kw">new</span> <span class="vscode-fn">ClaudeClient</span>({</div>
        <div class="vscode-line"><span class="vscode-ln">5</span>  apiKey: process.env.<span class="vscode-var">CLAUDE_API_KEY</span>,</div>
        <div class="vscode-line"><span class="vscode-ln">6</span>});</div>
        <div class="vscode-line"><span class="vscode-ln">7</span></div>
        <div class="vscode-line"><span class="vscode-ln">8</span><span class="vscode-kw">export async function</span> <span class="vscode-fn">sendMessage</span>(</div>
        <div class="vscode-line"><span class="vscode-ln">9</span>  content: <span class="vscode-type">string</span>,</div>
        <div class="vscode-line"><span class="vscode-ln">10</span>  model: <span class="vscode-type">string</span> = <span class="vscode-str">'claude-3-opus'</span></div>
        <div class="vscode-line"><span class="vscode-ln">11</span>): <span class="vscode-type">Promise</span>&lt;<span class="vscode-type">APIResponse</span>&gt; {</div>
        <div class="vscode-line"><span class="vscode-ln">12</span>  <span class="vscode-kw">try</span> {</div>
        <div class="vscode-line"><span class="vscode-ln">13</span>    <span class="vscode-kw">const</span> response = <span class="vscode-kw">await</span> client.<span class="vscode-fn">messages</span>.<span class="vscode-fn">create</span>({</div>
        <div class="vscode-line"><span class="vscode-ln">14</span>      model,</div>
        <div class="vscode-line"><span class="vscode-ln">15</span>      max_tokens: <span class="vscode-num">1024</span>,</div>
        <div class="vscode-line"><span class="vscode-ln">16</span>      messages: [{ role: <span class="vscode-str">'user'</span>, content }],</div>
        <div class="vscode-line"><span class="vscode-ln">17</span>    });</div>
        <div class="vscode-line"><span class="vscode-ln">18</span></div>
        <div class="vscode-line"><span class="vscode-ln">19</span>    <span class="vscode-kw">return</span> { success: <span class="vscode-kw">true</span>, data: response };</div>
        <div class="vscode-line"><span class="vscode-ln">20</span>  } <span class="vscode-kw">catch</span> (error) {</div>
        <div class="vscode-line"><span class="vscode-ln">21</span>    console.<span class="vscode-fn">error</span>(<span class="vscode-str">'API Error:'</span>, error);</div>
        <div class="vscode-line"><span class="vscode-ln">22</span>    <span class="vscode-kw">return</span> { success: <span class="vscode-kw">false</span>, error };</div>
        <div class="vscode-line"><span class="vscode-ln">23</span>  }</div>
        <div class="vscode-line"><span class="vscode-ln">24</span>}</div>
        <div class="vscode-line"><span class="vscode-ln">25</span></div>
        <div class="vscode-line cursor"><span class="vscode-ln">26</span><span class="vscode-cursor">|</span></div>
      </div>
    </div>
  </div>
  <div class="vscode-statusbar">
    <div class="vscode-status-left">
      <span class="vscode-status-item">🔀 main</span>
      <span class="vscode-status-item">⚠ 0 ⛔ 0</span>
    </div>
    <div class="vscode-status-right">
      <span class="vscode-status-item">Ln 26, Col 1</span>
      <span class="vscode-status-item">空格: 2</span>
      <span class="vscode-status-item">UTF-8</span>
      <span class="vscode-status-item">TypeScript</span>
      <span class="vscode-status-item">Prettier</span>
    </div>
  </div>
</div>
`;

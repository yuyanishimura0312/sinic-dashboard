// SINIC経営ダッシュボード — モックアップ
// SINIC循環経営モデル（SCM）に基づくバックキャスティング経営管理ツール

const app = document.getElementById('app');

// Mock data
const kpiData = {
  perception: { value: 24, unit: '件', trend: '+8', label: '社会段階知覚指標', sub: '移行シグナル検知数（12ヶ月）' },
  readiness: { value: 18, unit: '%', trend: '+3', label: '段階移行準備度', sub: '次段階準備の資源配分比率' },
  circulation: { value: 72, unit: '%', trend: '+12', label: '循環活性度', sub: '5循環の総合活性度スコア' },
  sensemaking: { value: 4.2, unit: '回/月', trend: '+0.8', label: '意味生成活性度', sub: 'パーパス対話の実施頻度' },
};

const probes = [
  { id: 'P1', name: '自然共生型テクノロジー', desc: 'テクノロジーと自然生態系の共生モデルを事業基盤とする経路', scores: { phase: 'high', learn: 'mid', translate: 'mid' } },
  { id: 'P2', name: '分散型ガバナンス経営', desc: '分散型ガバナンスとウェルビーイング指標による経営転換', scores: { phase: 'mid', learn: 'high', translate: 'low' } },
  { id: 'P3', name: '身体知・意味生成型価値創造', desc: '身体知と意味生成を核とした価値提供モデル', scores: { phase: 'mid', learn: 'mid', translate: 'high' } },
];

const correspondences = [
  {
    question: '自然社会において、我々の事業は何を「守る盾」として機能しているか？',
    responses: [
      { author: '事業部A', text: '地域コミュニティの生活インフラとしての役割が、自然社会では「関係性の結節点」に変容する可能性がある。' },
      { author: '研究開発部', text: '技術が自然を制御するのではなく、自然のメカニズムを増幅する「共栄テクノロジー」の開発が盾になる。' },
    ]
  },
  {
    question: '現在の事業ポートフォリオのうち、自律社会で最初に意味を失うものは何か？',
    responses: [
      { author: '経営企画', text: '効率最適化を売りにしたソリューション事業は、自律社会では価値提案が根本から変わる。' },
    ]
  },
  {
    question: 'バリ島のSUBAKシステムから学んだ「公平な分配の仕組み」を、自社にどう翻訳できるか？',
    responses: []
  },
];

const circulations = [
  { name: 'Seed\nNeed', value: 65 },
  { name: '段階\n移行', value: 45 },
  { name: '翻訳', value: 58 },
  { name: '共創', value: 72 },
  { name: '身体知', value: 38 },
];

const activities = [
  { text: '<strong>田中</strong>がProbe P1「自然共生型テクノロジー」の進捗を更新', time: '2時間前' },
  { text: '<strong>鈴木</strong>が応答「自然社会での盾の役割」に回答を投稿', time: '5時間前' },
  { text: '社会段階シグナル「<strong>AI自律エージェントの企業内統合</strong>」を検知', time: '1日前' },
  { text: '<strong>佐藤</strong>がフィールドトリップ体験レポートを共有', time: '2日前' },
  { text: 'パーパス対話セッション（第12回）が完了 — 参加者<strong>18名</strong>', time: '3日前' },
];

function render() {
  app.innerHTML = `
    <div class="layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <div class="logo">MIRA TUKU</div>
          <h1>SINIC経営<br>ダッシュボード</h1>
          <div class="subtitle">バックキャスティング経営管理</div>
        </div>
        <nav class="sidebar-nav">
          <div class="nav-section">
            <div class="nav-section-title">Overview</div>
            <div class="nav-item active" data-page="dashboard">
              <span class="nav-icon">◉</span> ダッシュボード
            </div>
            <div class="nav-item" data-page="kpi">
              <span class="nav-icon">◎</span> KPI詳細
            </div>
          </div>
          <div class="nav-section">
            <div class="nav-section-title">三層構造</div>
            <div class="nav-item" data-page="phase">
              <span class="nav-icon">①</span> 社会段階層
            </div>
            <div class="nav-item" data-page="org">
              <span class="nav-icon">②</span> 組織構造層
            </div>
            <div class="nav-item" data-page="sense">
              <span class="nav-icon">③</span> 意味生成層
            </div>
          </div>
          <div class="nav-section">
            <div class="nav-section-title">実行</div>
            <div class="nav-item" data-page="portfolio">
              <span class="nav-icon">▣</span> ポートフォリオ
            </div>
            <div class="nav-item" data-page="correspondence">
              <span class="nav-icon">⇄</span> 未来への応答
            </div>
            <div class="nav-item" data-page="circulation">
              <span class="nav-icon">⟳</span> 五循環モニター
            </div>
          </div>
          <div class="nav-section">
            <div class="nav-section-title">ツール</div>
            <div class="nav-item" data-page="signal">
              <span class="nav-icon">◇</span> シグナルスキャン
            </div>
            <div class="nav-item" data-page="activity">
              <span class="nav-icon">▤</span> アクティビティ
            </div>
          </div>
        </nav>
        <div class="sidebar-footer">
          SINIC循環経営モデル v1.0<br>
          特定非営利活動法人ミラツク
        </div>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        ${renderDashboard()}
      </main>
    </div>
  `;

  // Nav click handlers
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const page = item.dataset.page;
      const main = document.querySelector('.main-content');
      if (page === 'dashboard') main.innerHTML = renderDashboard();
      else if (page === 'correspondence') main.innerHTML = renderCorrespondence();
      else if (page === 'portfolio') main.innerHTML = renderPortfolio();
      else if (page === 'circulation') main.innerHTML = renderCirculation();
      else if (page === 'phase') main.innerHTML = renderPhase();
      else main.innerHTML = renderPlaceholder(item.textContent.trim());
    });
  });
}

function renderDashboard() {
  return `
    <div class="page-header">
      <div>
        <div class="page-title">ダッシュボード</div>
        <div class="page-subtitle">SINIC循環経営モデル — 社会段階移行への準備度</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-secondary">エクスポート</button>
        <button class="btn btn-primary">+ シグナル追加</button>
      </div>
    </div>

    <!-- KPI Overview -->
    <div class="kpi-grid">
      ${Object.values(kpiData).map(kpi => `
        <div class="kpi-overview-card">
          <div class="kpi-label">${kpi.label}</div>
          <div class="kpi-value">${kpi.value}<span class="kpi-unit">${kpi.unit}</span></div>
          <div class="kpi-trend up">▲ ${kpi.trend} <span style="color:var(--text-muted)">前期比</span></div>
        </div>
      `).join('')}
    </div>

    <!-- Phase Timeline + Circulation -->
    <div class="content-grid">
      <div class="card">
        <div class="card-header">
          <div class="card-title">社会段階タイムライン</div>
          <div class="card-badge">リアルタイム</div>
        </div>
        <div class="card-body">
          <div class="phase-timeline">
            <div class="phase-block current">
              <span class="phase-indicator active"></span>
              <span class="phase-name">最適化社会</span>
              <div class="phase-period">現在 — 移行期</div>
            </div>
            <div class="phase-block next">
              <span class="phase-indicator pending"></span>
              <span class="phase-name">自律社会</span>
              <div class="phase-period">2025年頃〜</div>
            </div>
            <div class="phase-block future">
              <span class="phase-indicator pending"></span>
              <span class="phase-name">自然社会</span>
              <div class="phase-period">2033年頃〜</div>
            </div>
          </div>
          <div style="font-size:12px; color:var(--text-muted); padding:8px 0;">
            最新シグナル: AI自律エージェントの企業内統合が加速 — 自律社会への移行兆候
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">五循環モニター</div>
          <div class="card-badge">月次</div>
        </div>
        <div class="card-body">
          <div class="circulation-chart">
            ${circulations.map(c => `
              <div class="circulation-bar">
                <div class="circulation-bar-fill">
                  <div class="circulation-bar-value" style="height:${c.value}%"></div>
                </div>
                <div class="circulation-bar-percent">${c.value}%</div>
                <div class="circulation-bar-label">${c.name}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Probes + Correspondence -->
    <div class="content-grid">
      <div class="card">
        <div class="card-header">
          <div class="card-title">バックキャスティング・ポートフォリオ</div>
          <div class="card-badge">${probes.length} Probes</div>
        </div>
        <div class="card-body">
          <div class="probe-list">
            ${probes.map(p => `
              <div class="probe-card">
                <div class="probe-badge">${p.id}</div>
                <div class="probe-info">
                  <div class="probe-name">${p.name}</div>
                  <div class="probe-desc">${p.desc}</div>
                </div>
                <div class="probe-scores">
                  <div class="score-dot ${p.scores.phase}" title="社会段階適合度">適</div>
                  <div class="score-dot ${p.scores.learn}" title="学習貢献度">学</div>
                  <div class="score-dot ${p.scores.translate}" title="翻訳可能性">訳</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">未来への応答</div>
          <div class="card-badge">Correspondence</div>
        </div>
        <div class="card-body">
          <div class="correspondence-list">
            ${correspondences.slice(0, 2).map(c => `
              <div class="correspondence-item">
                <div class="correspondence-question">${c.question}</div>
                <div class="response-count">${c.responses.length}件の応答</div>
                ${c.responses.length > 0 ? `
                  <div class="response-previews">
                    ${c.responses.slice(0, 1).map(r => `
                      <div class="response-preview">
                        <span class="response-author">${r.author}</span>
                        <span>${r.text.slice(0, 60)}...</span>
                      </div>
                    `).join('')}
                  </div>
                ` : '<button class="add-response-btn">+ 応答を追加する</button>'}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Activity Feed -->
    <div class="content-grid content-grid-wide">
      <div class="card">
        <div class="card-header">
          <div class="card-title">アクティビティ</div>
        </div>
        <div class="card-body">
          <div class="activity-feed">
            ${activities.map(a => `
              <div class="activity-item">
                <div class="activity-dot"></div>
                <div class="activity-text">${a.text}</div>
                <div class="activity-time">${a.time}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCorrespondence() {
  return `
    <div class="page-header">
      <div>
        <div class="page-title">未来への応答</div>
        <div class="page-subtitle">Correspondence — 避け難い未来に対する責任ある応答を蓄積する</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary">+ 新しい問いを作成</button>
      </div>
    </div>
    <div class="correspondence-list">
      ${correspondences.map(c => `
        <div class="correspondence-item">
          <div class="correspondence-question">${c.question}</div>
          <div class="response-count">${c.responses.length}件の応答</div>
          <div class="response-previews">
            ${c.responses.map(r => `
              <div class="response-preview">
                <span class="response-author">${r.author}</span>
                <span>${r.text}</span>
              </div>
            `).join('')}
          </div>
          <button class="add-response-btn">+ 応答を追加する</button>
        </div>
      `).join('')}
    </div>
  `;
}

function renderPortfolio() {
  return `
    <div class="page-header">
      <div>
        <div class="page-title">バックキャスティング・ポートフォリオ</div>
        <div class="page-subtitle">自然社会ビジョンから現在へ逆算する複数の移行経路仮説とProbe</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary">+ Probe追加</button>
      </div>
    </div>
    <div class="phase-timeline" style="margin-bottom:20px;">
      <div class="phase-block current"><span class="phase-name">最適化社会</span><div class="phase-period">現在</div></div>
      <div class="phase-block next"><span class="phase-name">自律社会</span><div class="phase-period">2025年頃〜</div></div>
      <div class="phase-block future"><span class="phase-name">自然社会</span><div class="phase-period">2033年頃〜 ◎ビジョン起点</div></div>
    </div>
    <div style="text-align:center; padding:8px 0 16px; font-size:13px; color:var(--deep-brown); font-weight:700;">
      ◀◀◀ 自然社会ビジョンから現在へ逆算（バックキャスト） ◀◀◀
    </div>
    <div class="probe-list">
      ${probes.map(p => `
        <div class="probe-card">
          <div class="probe-badge">${p.id}</div>
          <div class="probe-info">
            <div class="probe-name">${p.name}</div>
            <div class="probe-desc">${p.desc}</div>
          </div>
          <div class="probe-scores">
            <div class="score-dot ${p.scores.phase}" title="社会段階適合度">適</div>
            <div class="score-dot ${p.scores.learn}" title="学習貢献度">学</div>
            <div class="score-dot ${p.scores.translate}" title="翻訳可能性">訳</div>
          </div>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:16px; padding:14px 16px; background:#f3ede6; border:1px solid var(--border);">
      <div style="font-size:13px; font-weight:700; color:var(--deep-brown); margin-bottom:8px;">ポートフォリオ評価基準</div>
      <div style="display:flex; gap:10px; flex-wrap:wrap;">
        <span style="font-size:12px; padding:4px 12px; background:#faf6f0; border:1px solid #e0d2c4;">① 社会段階適合度</span>
        <span style="font-size:12px; padding:4px 12px; background:#faf6f0; border:1px solid #e0d2c4;">② 学習貢献度</span>
        <span style="font-size:12px; padding:4px 12px; background:#faf6f0; border:1px solid #e0d2c4;">③ 翻訳可能性</span>
      </div>
    </div>
  `;
}

function renderCirculation() {
  return `
    <div class="page-header">
      <div>
        <div class="page-title">五循環モニター</div>
        <div class="page-subtitle">三層を縦断する5つの循環の活性度を測定</div>
      </div>
    </div>
    <div class="circulation-chart" style="max-width:500px;">
      ${circulations.map(c => `
        <div class="circulation-bar">
          <div class="circulation-bar-fill" style="height:120px;">
            <div class="circulation-bar-value" style="height:${c.value}%"></div>
          </div>
          <div class="circulation-bar-percent">${c.value}%</div>
          <div class="circulation-bar-label">${c.name}</div>
        </div>
      `).join('')}
    </div>
    <div style="margin-top:24px;">
      ${circulations.map((c, i) => `
        <div style="padding:12px 16px; border-bottom:1px solid var(--border); display:flex; align-items:center; gap:16px;">
          <span style="font-size:12px; font-weight:700; color:var(--deep-brown); width:60px;">循環${i+1}</span>
          <div style="flex:1; height:8px; background:#f3ede6; overflow:hidden;">
            <div style="height:100%; width:${c.value}%; background:var(--terracotta);"></div>
          </div>
          <span style="font-size:13px; font-weight:700; color:var(--deep-brown); width:40px; text-align:right;">${c.value}%</span>
        </div>
      `).join('')}
    </div>
  `;
}

function renderPhase() {
  return `
    <div class="page-header">
      <div>
        <div class="page-title">社会段階層</div>
        <div class="page-subtitle">Social Phase Layer — 社会進化のリアルタイムモニタリング</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary">+ シグナル追加</button>
      </div>
    </div>
    <div class="phase-timeline" style="margin-bottom:24px;">
      <div class="phase-block current"><span class="phase-indicator active"></span><span class="phase-name">最適化社会</span><div class="phase-period">現在 — 移行期</div></div>
      <div class="phase-block next"><span class="phase-indicator pending"></span><span class="phase-name">自律社会</span><div class="phase-period">兆候検知中</div></div>
      <div class="phase-block future"><span class="phase-indicator pending"></span><span class="phase-name">自然社会</span><div class="phase-period">ビジョン探索中</div></div>
    </div>
    <div class="card" style="margin-bottom:16px;">
      <div class="card-header"><div class="card-title">最近検知したシグナル</div><div class="card-badge">Seed型 / Need型</div></div>
      <div class="card-body">
        <div class="activity-feed">
          <div class="activity-item"><div class="activity-dot" style="background:var(--deep-brown);"></div><div class="activity-text"><strong>[Seed]</strong> 非侵襲型脳波解析が95%精度に到達 — 自律社会の意思決定支援技術</div><div class="activity-time">2日前</div></div>
          <div class="activity-item"><div class="activity-dot" style="background:var(--terracotta);"></div><div class="activity-text"><strong>[Need]</strong> Z世代の「意味ある仕事」志向が70%超 — 自律社会の労働価値観</div><div class="activity-time">1週間前</div></div>
          <div class="activity-item"><div class="activity-dot" style="background:var(--golden);"></div><div class="activity-text"><strong>[Seed]</strong> 量子コンピューティングの商用化加速 — 最適化社会の深化</div><div class="activity-time">2週間前</div></div>
          <div class="activity-item"><div class="activity-dot" style="background:var(--terracotta);"></div><div class="activity-text"><strong>[Need]</strong> 企業の再生型経営（Regenerative）への転換宣言が急増</div><div class="activity-time">3週間前</div></div>
        </div>
      </div>
    </div>
  `;
}

function renderPlaceholder(title) {
  return `
    <div class="page-header">
      <div><div class="page-title">${title}</div><div class="page-subtitle">この機能は開発中です</div></div>
    </div>
    <div class="card"><div class="card-body" style="text-align:center; padding:60px;">
      <div style="font-size:48px; color:var(--border); margin-bottom:16px;">◉</div>
      <div style="font-size:14px; color:var(--text-muted);">Coming Soon</div>
    </div></div>
  `;
}

// Initialize
render();

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
          <div class="nav-section">
            <div class="nav-section-title">ガイド</div>
            <div class="nav-item" data-page="about">
              <span class="nav-icon">？</span> このツールについて
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
      else if (page === 'kpi') main.innerHTML = renderKPIDashboard();
      else if (page === 'correspondence') main.innerHTML = renderCorrespondence();
      else if (page === 'portfolio') main.innerHTML = renderPortfolio();
      else if (page === 'circulation') main.innerHTML = renderCirculation();
      else if (page === 'phase') main.innerHTML = renderPhase();
      else if (page === 'org') main.innerHTML = renderOrgLayer();
      else if (page === 'sense') main.innerHTML = renderSenseLayer();
      else if (page === 'about') main.innerHTML = renderAbout();
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

function renderKPIDashboard() {
  const kpiDetails = [
    {
      id: 1, color: 'var(--deep-brown)', title: '社会段階知覚指標',
      subtitle: 'Social Phase Perception',
      mainValue: 24, mainUnit: '件', mainLabel: '移行シグナル検知数',
      trend: '+8', trendLabel: '前期比',
      metrics: [
        { label: 'Seed型シグナル', value: 14, max: 30, desc: '科学・技術起点の移行兆候' },
        { label: 'Need型シグナル', value: 10, max: 30, desc: '社会ニーズ起点の移行兆候' },
        { label: '戦略的意思決定', value: 6, max: 15, desc: 'シグナルに基づく経営判断の件数' },
        { label: 'マッピング更新', value: 3, max: 6, desc: '社会段階マッピングの更新回数（半期）' },
      ],
      quarterly: [8, 12, 18, 24],
      insight: '自律社会への移行シグナルが加速。特にAI自律エージェントの企業内統合とZ世代の「意味ある仕事」志向の二つのNeed型シグナルが顕著。'
    },
    {
      id: 2, color: 'var(--amber)', title: '段階移行準備度指標',
      subtitle: 'Stage Transition Readiness',
      mainValue: 18, mainUnit: '%', mainLabel: '次段階準備の資源配分',
      trend: '+3', trendLabel: '前期比',
      metrics: [
        { label: '人的資源配分', value: 22, max: 100, desc: '次段階準備に従事する人員比率' },
        { label: '財務資源配分', value: 14, max: 100, desc: '次段階準備への予算配分比率' },
        { label: 'Probe数', value: 3, max: 10, desc: 'バックキャスティング・ポートフォリオのProbe数' },
        { label: 'SINIC理解度', value: 35, max: 100, desc: '本質的理解に達したメンバー比率' },
      ],
      quarterly: [10, 12, 15, 18],
      insight: '資源配分は漸増傾向だが、目標の30%にはまだ距離がある。SINIC理論の理解浸透が最大のボトルネック。フィールドトリップ経験者の理解度は非経験者の2.5倍。'
    },
    {
      id: 3, color: 'var(--terracotta)', title: '循環活性度指標',
      subtitle: 'Circulation Vitality',
      mainValue: 72, mainUnit: '%', mainLabel: '5循環の総合活性度',
      trend: '+12', trendLabel: '前期比',
      metrics: [
        { label: 'Seed-Need循環', value: 65, max: 100, desc: '科学⇔社会ニーズの双方向活動バランス' },
        { label: '段階移行循環', value: 45, max: 100, desc: 'シグナルに基づく組織構造調整の速度' },
        { label: '翻訳循環', value: 58, max: 100, desc: 'ビジョン→現場実践への翻訳事例数' },
        { label: '共創循環', value: 72, max: 100, desc: '異業種・異セクターとの共創活動の深度' },
        { label: '身体知循環', value: 38, max: 100, desc: 'FT・体験学習の実施頻度と参加者数' },
      ],
      quarterly: [42, 52, 60, 72],
      insight: '共創循環がコンソーシアム活動により大幅に活性化。一方、身体知循環は定常的なFT機会の不足により低水準。翻訳循環の「抽象→具体」変換が課題。'
    },
    {
      id: 4, color: 'var(--golden)', title: '意味生成活性度指標',
      subtitle: 'Sensemaking Vitality',
      mainValue: 4.2, mainUnit: '回/月', mainLabel: 'パーパス対話の実施頻度',
      trend: '+0.8', trendLabel: '前期比',
      metrics: [
        { label: '対話実施頻度', value: 42, max: 60, desc: '月あたりのパーパス対話セッション数（×10）' },
        { label: '参加多様性', value: 68, max: 100, desc: '部門横断・階層横断の参加度合い' },
        { label: 'パーパス再定義', value: 2, max: 5, desc: 'パーパスの更新・再定義の件数（半期）' },
        { label: '自分語り率', value: 45, max: 100, desc: '自社パーパスを自分の言葉で語れるメンバー割合' },
      ],
      quarterly: [2.0, 2.8, 3.4, 4.2],
      insight: '対話頻度は順調に向上。ただし「自分語り率」45%はまだ半数に満たない。経営層の参加率が低く、意味生成が現場レベルにとどまる傾向。'
    },
  ];

  return `
    <div class="page-header">
      <div>
        <div class="page-title">KPI詳細ダッシュボード</div>
        <div class="page-subtitle">SINIC循環経営モデル — 4カテゴリの社会段階移行準備度指標</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-secondary">レポート出力</button>
        <button class="btn btn-primary">データ更新</button>
      </div>
    </div>

    <!-- KPI Summary Row -->
    <div class="kpi-grid">
      ${kpiDetails.map(k => `
        <div class="kpi-overview-card">
          <div class="kpi-label">${k.title}</div>
          <div class="kpi-value">${k.mainValue}<span class="kpi-unit">${k.mainUnit}</span></div>
          <div class="kpi-trend up">▲ ${k.trend} <span style="color:var(--text-muted)">${k.trendLabel}</span></div>
        </div>
      `).join('')}
    </div>

    <!-- KPI Detail Cards -->
    ${kpiDetails.map(k => `
      <div class="card" style="margin-bottom:20px; border-top:3px solid ${k.color};">
        <div class="card-header">
          <div>
            <div class="card-title" style="font-size:16px;">${k.title}</div>
            <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">${k.subtitle}</div>
          </div>
          <div style="text-align:right;">
            <div style="font-family:'Hiragino Mincho ProN',serif; font-size:28px; font-weight:700; color:var(--deep-brown);">${k.mainValue}<span style="font-size:14px; font-weight:400; color:var(--text-muted);">${k.mainUnit}</span></div>
            <div style="font-size:11px; color:#2d8a4e;">▲ ${k.trend} ${k.trendLabel}</div>
          </div>
        </div>
        <div class="card-body">
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
            <!-- Left: Sub-metrics -->
            <div>
              <div style="font-size:12px; font-weight:600; color:var(--deep-brown); margin-bottom:12px; letter-spacing:0.05em;">サブ指標</div>
              ${k.metrics.map(m => `
                <div style="margin-bottom:14px;">
                  <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:4px;">
                    <span style="font-size:12px; font-weight:600; color:var(--text);">${m.label}</span>
                    <span style="font-size:14px; font-weight:700; color:var(--deep-brown);">${m.value}<span style="font-size:10px; color:var(--text-muted);">/${m.max}</span></span>
                  </div>
                  <div style="height:6px; background:#f3ede6; overflow:hidden;">
                    <div style="height:100%; width:${m.value/m.max*100}%; background:${k.color}; transition:width 0.5s;"></div>
                  </div>
                  <div style="font-size:10px; color:var(--text-muted); margin-top:3px;">${m.desc}</div>
                </div>
              `).join('')}
            </div>
            <!-- Right: Trend + Insight -->
            <div>
              <div style="font-size:12px; font-weight:600; color:var(--deep-brown); margin-bottom:12px; letter-spacing:0.05em;">四半期トレンド</div>
              <div style="display:flex; align-items:flex-end; gap:8px; height:100px; margin-bottom:8px;">
                ${k.quarterly.map((q, i) => {
                  const maxQ = Math.max(...k.quarterly);
                  const h = (q / maxQ) * 90;
                  const labels = ['Q1', 'Q2', 'Q3', 'Q4'];
                  return `
                    <div style="flex:1; text-align:center;">
                      <div style="font-size:11px; font-weight:700; color:var(--deep-brown); margin-bottom:4px;">${q}</div>
                      <div style="height:${h}px; background:${i === 3 ? k.color : '#e8ddd0'}; transition:height 0.5s;"></div>
                      <div style="font-size:9px; color:var(--text-muted); margin-top:4px;">${labels[i]}</div>
                    </div>
                  `;
                }).join('')}
              </div>

              <div style="margin-top:16px; padding:14px; background:#f8f4ef; border-left:3px solid ${k.color};">
                <div style="font-size:10px; font-weight:600; color:var(--deep-brown); margin-bottom:6px; letter-spacing:0.08em;">INSIGHT</div>
                <div style="font-size:12px; color:var(--text-secondary); line-height:1.7;">${k.insight}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('')}

    <!-- Overall Score -->
    <div class="card" style="border-top:3px solid var(--deep-brown);">
      <div class="card-header">
        <div class="card-title">総合準備度スコア</div>
        <div style="font-family:'Hiragino Mincho ProN',serif; font-size:32px; font-weight:700; color:var(--deep-brown);">68<span style="font-size:14px; font-weight:400; color:var(--text-muted);">/100</span></div>
      </div>
      <div class="card-body">
        <div style="display:flex; gap:0; height:12px; overflow:hidden; border:1px solid var(--border);">
          <div style="width:25%; background:var(--deep-brown);" title="社会段階知覚"></div>
          <div style="width:18%; background:var(--amber);" title="段階移行準備度"></div>
          <div style="width:72%; background:var(--terracotta);" title="循環活性度"></div>
          <div style="width:42%; background:var(--golden);" title="意味生成活性度"></div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:10px; color:var(--text-muted);">
          <span>■ 知覚 24/100</span>
          <span>■ 準備度 18/100</span>
          <span>■ 循環 72/100</span>
          <span>■ 意味生成 42/100</span>
        </div>
        <div style="margin-top:16px; padding:14px; background:var(--deep-brown); color:white;">
          <div style="font-size:10px; letter-spacing:0.1em; color:var(--peach); margin-bottom:6px;">判定</div>
          <div style="font-size:13px; line-height:1.7;">循環活性度は高水準だが、段階移行準備度が18%と低水準。次四半期は「次段階準備」への資源配分の引き上げとSINIC理論の組織浸透を優先課題とする。身体知循環の活性化のため、定期的なフィールドトリップの制度化を提言。</div>
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
  const socialVelocity = 72;
  const orgReadiness = 38;
  const adaptationGap = socialVelocity - orgReadiness;

  return `
    <div class="page-header">
      <div>
        <div class="page-title">社会段階層</div>
        <div class="page-subtitle">Social Phase Layer — 社会進化のリアルタイムモニタリングと適応ギャップ測定</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-secondary">レポート</button>
        <button class="btn btn-primary">+ シグナル追加</button>
      </div>
    </div>

    <!-- Phase Timeline -->
    <div class="phase-timeline" style="margin-bottom:24px;">
      <div class="phase-block current"><span class="phase-indicator active"></span><span class="phase-name">最適化社会</span><div class="phase-period">現在 — 移行期</div></div>
      <div class="phase-block next"><span class="phase-indicator pending"></span><span class="phase-name">自律社会</span><div class="phase-period">兆候検知中</div></div>
      <div class="phase-block future"><span class="phase-indicator pending"></span><span class="phase-name">自然社会</span><div class="phase-period">ビジョン起点</div></div>
    </div>

    <!-- Adaptation Gap (SINIC固有) -->
    <div class="card" style="margin-bottom:16px; border-top:3px solid var(--deep-brown);">
      <div class="card-header">
        <div class="card-title">適応ギャップ（SINIC固有指標）</div>
        <div class="card-badge" style="background:${adaptationGap > 30 ? 'rgba(192,57,43,0.1); color:#c0392b;' : 'rgba(45,138,78,0.1); color:#2d8a4e;'}">${adaptationGap > 30 ? '要注意' : '健全'}</div>
      </div>
      <div class="card-body">
        <div style="display:grid; grid-template-columns:1fr auto 1fr; gap:16px; align-items:center; margin-bottom:16px;">
          <div style="text-align:center; padding:20px; background:#f8f4ef;">
            <div style="font-size:10px; color:var(--text-muted); letter-spacing:0.08em; margin-bottom:6px;">社会変化速度</div>
            <div style="font-family:'Hiragino Mincho ProN',serif; font-size:36px; font-weight:700; color:var(--deep-brown);">${socialVelocity}</div>
            <div style="font-size:11px; color:var(--text-muted);">外部指標</div>
          </div>
          <div style="text-align:center;">
            <div style="font-size:24px; color:var(--terra);">−</div>
          </div>
          <div style="text-align:center; padding:20px; background:#f8f4ef;">
            <div style="font-size:10px; color:var(--text-muted); letter-spacing:0.08em; margin-bottom:6px;">自社準備状況</div>
            <div style="font-family:'Hiragino Mincho ProN',serif; font-size:36px; font-weight:700; color:var(--deep-brown);">${orgReadiness}</div>
            <div style="font-size:11px; color:var(--text-muted);">内部指標</div>
          </div>
        </div>
        <div style="text-align:center; padding:16px; background:${adaptationGap > 30 ? 'rgba(192,57,43,0.06)' : 'rgba(45,138,78,0.06)'}; border:1px solid ${adaptationGap > 30 ? 'rgba(192,57,43,0.2)' : 'rgba(45,138,78,0.2)'};">
          <div style="font-size:10px; color:var(--text-muted); margin-bottom:4px;">適応ギャップ</div>
          <div style="font-family:'Hiragino Mincho ProN',serif; font-size:42px; font-weight:700; color:${adaptationGap > 30 ? '#c0392b' : '#2d8a4e'};">${adaptationGap}</div>
          <div style="font-size:11px; color:var(--text-muted);">ギャップが拡大 → 危機 / 縮小 → 健全</div>
        </div>
        <div style="margin-top:12px; padding:12px; background:var(--deep-brown); color:white; font-size:12px; line-height:1.7;">
          <strong style="color:var(--peach);">診断:</strong> 社会変化速度（72）に対して自社準備（38）が大きく遅れている。適応ギャップ34は要注意水準。自律社会への移行シグナルが加速する中、次段階準備への資源配分の大幅引き上げが急務。
        </div>
      </div>
    </div>

    <!-- Signal Sources (拡張版) -->
    <div class="content-grid">
      <div class="card">
        <div class="card-header"><div class="card-title">シグナルスキャン</div><div class="card-badge">3ソース統合</div></div>
        <div class="card-body">
          <div style="display:flex; gap:8px; margin-bottom:12px;">
            <span style="padding:4px 10px; background:var(--deep-brown); color:white; font-size:10px; font-weight:600;">ニュース</span>
            <span style="padding:4px 10px; background:var(--terra); color:white; font-size:10px; font-weight:600;">投資情報</span>
            <span style="padding:4px 10px; background:var(--gold); color:var(--deep-brown); font-size:10px; font-weight:600;">技術加速度</span>
          </div>
          <div class="activity-feed">
            <div class="activity-item"><div class="activity-dot" style="background:var(--deep-brown);"></div><div class="activity-text"><strong>[Seed]</strong> 非侵襲型脳波解析が95%精度 — 自律社会の意思決定支援</div><div class="activity-time">2日前</div></div>
            <div class="activity-item"><div class="activity-dot" style="background:var(--terra);"></div><div class="activity-text"><strong>[投資]</strong> 再生型農業スタートアップへのVC投資が前年比3.2倍 — 自然社会の萌芽</div><div class="activity-time">5日前</div></div>
            <div class="activity-item"><div class="activity-dot" style="background:var(--golden);"></div><div class="activity-text"><strong>[加速]</strong> AIエージェント性能が18ヶ月で10倍に — 指数関数的加速</div><div class="activity-time">1週間前</div></div>
            <div class="activity-item"><div class="activity-dot" style="background:var(--terracotta);"></div><div class="activity-text"><strong>[Need]</strong> Z世代「意味ある仕事」志向が70%超 — 自律社会の価値観</div><div class="activity-time">1週間前</div></div>
            <div class="activity-item"><div class="activity-dot" style="background:var(--terra);"></div><div class="activity-text"><strong>[投資]</strong> ウェルビーイング関連SaaSへのシリーズB投資が急増</div><div class="activity-time">2週間前</div></div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header"><div class="card-title">技術加速度モニター</div><div class="card-badge">指数関数的変化</div></div>
        <div class="card-body">
          <div style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-bottom:16px;">
            SINIC理論のSeed型イノベーション循環において、技術進展の<strong>加速度</strong>が社会段階移行の速度を決定する。
          </div>
          ${[
            { name: 'AI/自律エージェント', speed: 92, phase: '自律社会' },
            { name: '量子コンピューティング', speed: 68, phase: '最適化深化' },
            { name: 'バイオ・生態系技術', speed: 45, phase: '自然社会' },
            { name: 'ニューロサイエンス', speed: 58, phase: '自律社会' },
            { name: '循環型素材', speed: 52, phase: '自然社会' },
          ].map(t => `
            <div style="margin-bottom:10px;">
              <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:3px;">
                <span style="font-weight:600;">${t.name}</span>
                <span style="font-size:10px; color:var(--text-muted);">${t.phase}</span>
              </div>
              <div style="height:6px; background:#f3ede6; overflow:hidden;">
                <div style="height:100%; width:${t.speed}%; background:${t.speed > 80 ? 'var(--deep-brown)' : t.speed > 60 ? 'var(--terra)' : 'var(--gold)'};"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Bali Insight -->
    <div class="card" style="border-top:3px solid var(--gold);">
      <div class="card-body" style="background:var(--deep-brown); color:white; padding:20px 24px;">
        <div style="font-size:10px; letter-spacing:0.12em; color:var(--peach); margin-bottom:8px;">FIELD INSIGHT — バリ島ウブド</div>
        <div style="font-family:'Hiragino Mincho ProN',serif; font-size:15px; font-weight:700; margin-bottom:10px;">「自然社会」は抽象概念ではなく、いまも実在する生活世界である</div>
        <div style="font-size:12px; color:rgba(255,255,255,0.85); line-height:1.8;">
          トリ・ヒタ・カラナ（人と神と自然の調和）は哲学ではなく、住まいの向き・身体動作・経済行為に至るまで社会に実装されている。SUBAKの水利システムは「公平な分配」を生態学的制約から自然に導いている。この「哲学の社会実装」こそが、SINIC理論が描く自然社会の先行モデルである。
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

function renderOrgLayer() {
  const allocation = { optimize: 64, prepare: 22, envision: 14 };
  const recommended = { optimize: 50, prepare: 30, envision: 20 };
  const capabilities = [
    { name: 'デジタル・トランスフォーメーション', current: 78, needed: 85 },
    { name: '分散型意思決定', current: 35, needed: 70 },
    { name: 'エコシステム構築力', current: 52, needed: 80 },
    { name: '非財務価値の測定', current: 28, needed: 65 },
    { name: '身体知の組織的活用', current: 22, needed: 60 },
  ];

  return `
    <div class="page-header">
      <div>
        <div class="page-title">組織構造層</div>
        <div class="page-subtitle">Organizational Architecture — 社会段階の移行に連動する変換装置</div>
      </div>
    </div>

    <!-- Three-axis allocation -->
    <div class="content-grid">
      <div class="card">
        <div class="card-header">
          <div class="card-title">三軸資源配分バランス</div>
          <div class="card-badge">動的調整</div>
        </div>
        <div class="card-body">
          <div style="margin-bottom:20px;">
            <div style="font-size:11px; color:var(--text-muted); margin-bottom:6px;">現在の配分</div>
            <div style="display:flex; height:32px; overflow:hidden; border:1px solid var(--border);">
              <div style="width:${allocation.optimize}%; background:var(--deep-brown); display:flex; align-items:center; justify-content:center; color:white; font-size:11px; font-weight:600;">${allocation.optimize}%</div>
              <div style="width:${allocation.prepare}%; background:var(--terra); display:flex; align-items:center; justify-content:center; color:white; font-size:11px; font-weight:600;">${allocation.prepare}%</div>
              <div style="width:${allocation.envision}%; background:var(--gold); display:flex; align-items:center; justify-content:center; color:var(--deep-brown); font-size:11px; font-weight:600;">${allocation.envision}%</div>
            </div>
          </div>
          <div style="margin-bottom:20px;">
            <div style="font-size:11px; color:var(--text-muted); margin-bottom:6px;">推奨配分（社会段階移行進行度に基づく）</div>
            <div style="display:flex; height:32px; overflow:hidden; border:1px dashed var(--border);">
              <div style="width:${recommended.optimize}%; background:rgba(122,64,51,0.15); display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; color:var(--deep-brown);">${recommended.optimize}%</div>
              <div style="width:${recommended.prepare}%; background:rgba(220,135,102,0.15); display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; color:var(--terra);">${recommended.prepare}%</div>
              <div style="width:${recommended.envision}%; background:rgba(240,166,113,0.15); display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; color:var(--amber);">${recommended.envision}%</div>
            </div>
          </div>
          <div style="display:flex; gap:16px; font-size:11px; color:var(--text-muted);">
            <span>■ 現段階最適化</span><span>■ 次段階準備</span><span>■ 遠未来構想</span>
          </div>
          <div style="margin-top:16px; padding:12px; background:#f8f4ef; border-left:3px solid var(--terra); font-size:12px; color:var(--text-secondary); line-height:1.7;">
            <strong style="color:var(--deep-brown);">診断:</strong> 次段階準備の配分が推奨値（30%）に対して22%と不足。自律社会への移行シグナルが加速しているため、次四半期に8%の重心移動を推奨。
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title">組織能力ギャップ分析</div>
          <div class="card-badge">段階別</div>
        </div>
        <div class="card-body">
          ${capabilities.map(c => `
            <div style="margin-bottom:14px;">
              <div style="display:flex; justify-content:space-between; font-size:12px; margin-bottom:4px;">
                <span style="font-weight:600; color:var(--text);">${c.name}</span>
                <span style="color:${c.current >= c.needed ? '#2d8a4e' : 'var(--terra)'}; font-weight:600;">${c.current}/${c.needed}</span>
              </div>
              <div style="position:relative; height:8px; background:#f3ede6;">
                <div style="position:absolute; height:100%; width:${c.current}%; background:var(--terra);"></div>
                <div style="position:absolute; height:100%; width:2px; left:${c.needed}%; background:var(--deep-brown);"></div>
              </div>
              <div style="display:flex; justify-content:space-between; font-size:9px; color:var(--text-muted); margin-top:2px;">
                <span>現在</span><span>必要水準 →</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Probe Portfolio -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">バックキャスティング・ポートフォリオ</div>
        <div class="card-badge">${probes.length} Probes</div>
      </div>
      <div class="card-body">
        <div style="text-align:center; padding:8px 0 16px; font-size:13px; color:var(--deep-brown); font-weight:700;">
          ◀◀◀ 自然社会ビジョンから現在へ逆算 ◀◀◀
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
      </div>
    </div>
  `;
}

function renderSenseLayer() {
  const dialogSessions = [
    { date: '4/18', topic: 'パーパス再考：自然社会における存在意義', participants: 18, departments: 6, depth: 'high' },
    { date: '4/4', topic: '翻訳の困難：抽象ビジョンと現場実践のギャップ', participants: 12, departments: 4, depth: 'mid' },
    { date: '3/21', topic: 'バリFTの身体知を事業にどう接続するか', participants: 22, departments: 7, depth: 'high' },
    { date: '3/7', topic: '応答としての経営判断：次四半期の方向性', participants: 15, departments: 5, depth: 'mid' },
  ];

  const purposeEvolution = [
    { quarter: '2025 Q2', words: '効率性、最適化、競争力、成長' },
    { quarter: '2025 Q4', words: '共生、関係性、意味、自律' },
    { quarter: '2026 Q1', words: '応答、盾、身体知、自然社会' },
    { quarter: '2026 Q2', words: '循環、創発、翻訳、協調' },
  ];

  return `
    <div class="page-header">
      <div>
        <div class="page-title">意味生成層</div>
        <div class="page-subtitle">Sensemaking Layer — 未来への責任ある応答を生成する創造装置</div>
      </div>
      <div class="page-actions">
        <button class="btn btn-primary">+ 新しい問いを作成</button>
      </div>
    </div>

    <div class="content-grid">
      <!-- Correspondence -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">未来への応答（Correspondence）</div>
          <div class="card-badge">${correspondences.length} Questions</div>
        </div>
        <div class="card-body">
          <div style="padding:12px; background:var(--deep-brown); color:white; margin-bottom:16px; font-size:12px; line-height:1.7;">
            <strong style="color:var(--peach);">応答の哲学:</strong> 受動的な「対応（Response）」ではなく、避け難い未来に対して責任を持って向き合う「応答（Correspondence）」。
          </div>
          <div class="correspondence-list">
            ${correspondences.map(c => `
              <div class="correspondence-item">
                <div class="correspondence-question">${c.question}</div>
                <div class="response-count">${c.responses.length}件の応答</div>
                ${c.responses.slice(0, 1).map(r => `
                  <div class="response-preview"><span class="response-author">${r.author}</span><span>${r.text.slice(0, 80)}...</span></div>
                `).join('')}
                <button class="add-response-btn">+ 応答を追加する</button>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Dialogue Sessions -->
      <div class="card">
        <div class="card-header">
          <div class="card-title">意味生成対話セッション</div>
          <div class="card-badge">月2回実施</div>
        </div>
        <div class="card-body">
          ${dialogSessions.map(s => `
            <div style="display:flex; gap:12px; align-items:center; padding:12px 0; border-bottom:1px solid var(--border);">
              <div style="width:48px; text-align:center; font-size:12px; font-weight:700; color:var(--deep-brown);">${s.date}</div>
              <div style="flex:1;">
                <div style="font-size:13px; font-weight:600; color:var(--text);">${s.topic}</div>
                <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">
                  参加${s.participants}名 / ${s.departments}部門横断
                </div>
              </div>
              <div style="width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:9px; font-weight:700; ${s.depth === 'high' ? 'background:rgba(45,138,78,0.1); color:#2d8a4e;' : 'background:rgba(240,166,113,0.15); color:var(--amber);'}">${s.depth === 'high' ? '深' : '中'}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Purpose Evolution -->
    <div class="card">
      <div class="card-header">
        <div class="card-title">パーパス進化マップ</div>
        <div class="card-badge">言語の変遷</div>
      </div>
      <div class="card-body">
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:0;">
          ${purposeEvolution.map((p, i) => `
            <div style="padding:16px; text-align:center; border-right:${i < 3 ? '1px solid var(--border)' : 'none'}; ${i === 3 ? 'background:rgba(122,64,51,0.04);' : ''}">
              <div style="font-size:11px; font-weight:600; color:var(--warm); margin-bottom:8px;">${p.quarter}</div>
              <div style="font-size:13px; color:var(--text-secondary); line-height:1.6;">${p.words.split('、').map(w => `<span style="display:inline-block; padding:2px 8px; margin:2px; background:#f3ede6; font-size:11px; color:var(--deep-brown);">${w}</span>`).join('')}</div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center; padding:12px 0 0; font-size:12px; color:var(--text-muted);">
          → パーパスを語る言葉が「効率・競争」から「応答・循環・共生」へ変遷
        </div>
      </div>
    </div>

    <!-- Sensemaking KPI -->
    <div class="card" style="border-top:3px solid var(--golden);">
      <div class="card-header">
        <div class="card-title">意味生成活性度スコア</div>
        <div style="font-family:'Hiragino Mincho ProN',serif; font-size:28px; font-weight:700; color:var(--deep-brown);">4.2<span style="font-size:14px; font-weight:400; color:var(--text-muted);">回/月</span></div>
      </div>
      <div class="card-body">
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px;">
          <div style="text-align:center; padding:16px; background:#f8f4ef;">
            <div style="font-size:24px; font-weight:700; color:var(--deep-brown);">68%</div>
            <div style="font-size:11px; color:var(--text-muted);">参加多様性</div>
          </div>
          <div style="text-align:center; padding:16px; background:#f8f4ef;">
            <div style="font-size:24px; font-weight:700; color:var(--deep-brown);">45%</div>
            <div style="font-size:11px; color:var(--text-muted);">自分語り率</div>
          </div>
          <div style="text-align:center; padding:16px; background:#f8f4ef;">
            <div style="font-size:24px; font-weight:700; color:var(--deep-brown);">2</div>
            <div style="font-size:11px; color:var(--text-muted);">パーパス再定義（半期）</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAbout() {
  return `
    <div class="page-header">
      <div>
        <div class="page-title">このツールについて</div>
        <div class="page-subtitle">SINIC経営ダッシュボード — バックキャスティング経営管理ツール</div>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-body" style="padding:28px;">
        <h2 style="font-family:'Hiragino Mincho ProN',serif; font-size:18px; color:var(--deep-brown); margin-bottom:16px;">SINIC経営ダッシュボードとは</h2>
        <p style="font-size:14px; line-height:2; color:var(--text-secondary); margin-bottom:16px;">
          SINIC経営ダッシュボードは、オムロン創業者・立石一真が1970年に提唱した未来予測理論<strong>「SINIC理論」</strong>（Seed-Innovation to Need-Impetus Cyclic Evolution）を経営に実装するための管理ツールです。
        </p>
        <p style="font-size:14px; line-height:2; color:var(--text-secondary); margin-bottom:16px;">
          SINIC理論は、科学・技術・社会の三者が円環的に相互作用しながら社会が進化していくという動的モデルです。この理論は、情報化社会の到来を正確に予見し、現在の<strong>最適化社会</strong>から<strong>自律社会</strong>（2025年頃〜）、そして<strong>自然社会</strong>（2033年頃〜）への段階的移行を描いています。
        </p>
        <p style="font-size:14px; line-height:2; color:var(--text-secondary);">
          本ダッシュボードは、2025年のSINIC経営コンソーシアムで提案された<strong>「SINIC循環経営モデル（SCM）」</strong>を実装するものです。従来の財務KPIを補完する「社会段階移行への準備度」を測定・可視化し、組織の<strong>未来への応答力（Correspondence）</strong>を高めます。
        </p>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-header">
        <div class="card-title">SINIC循環経営モデルの三層構造</div>
      </div>
      <div class="card-body">
        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px;">
          <div style="padding:16px; border:1px solid var(--border); border-top:3px solid var(--deep-brown); text-align:center;">
            <div style="font-size:12px; font-weight:700; color:white; background:var(--deep-brown); width:24px; height:24px; line-height:24px; border-radius:50%; margin:0 auto 8px;">1</div>
            <div style="font-family:'Hiragino Mincho ProN',serif; font-size:14px; font-weight:700; color:var(--deep-brown);">社会段階層</div>
            <div style="font-size:10px; color:var(--text-muted); margin-bottom:8px;">Social Phase Layer</div>
            <div style="font-size:12px; color:var(--text-secondary); line-height:1.7; text-align:left;">
              SINIC理論の社会段階モデルを「地図」として、最適化社会・自律社会・自然社会への移行シグナルをリアルタイムでモニタリングする<strong>知覚装置</strong>。
            </div>
          </div>
          <div style="padding:16px; border:1px solid var(--border); border-top:3px solid var(--amber); text-align:center;">
            <div style="font-size:12px; font-weight:700; color:white; background:var(--amber); width:24px; height:24px; line-height:24px; border-radius:50%; margin:0 auto 8px;">2</div>
            <div style="font-family:'Hiragino Mincho ProN',serif; font-size:14px; font-weight:700; color:var(--deep-brown);">組織構造層</div>
            <div style="font-size:10px; color:var(--text-muted); margin-bottom:8px;">Organizational Architecture</div>
            <div style="font-size:12px; color:var(--text-secondary); line-height:1.7; text-align:left;">
              社会段階の移行に連動して、現段階最適化・次段階準備・遠未来構想の三軸の重心を動的に移動させる<strong>変換装置</strong>。
            </div>
          </div>
          <div style="padding:16px; border:1px solid var(--border); border-top:3px solid var(--terracotta); text-align:center; background:#faf6f0;">
            <div style="font-size:12px; font-weight:700; color:white; background:var(--terracotta); width:24px; height:24px; line-height:24px; border-radius:50%; margin:0 auto 8px;">3</div>
            <div style="font-family:'Hiragino Mincho ProN',serif; font-size:14px; font-weight:700; color:var(--deep-brown);">意味生成層</div>
            <div style="font-size:10px; color:var(--text-muted); margin-bottom:8px;">Sensemaking Layer</div>
            <div style="font-size:12px; color:var(--text-secondary); line-height:1.7; text-align:left;">
              「自然社会における我々の存在意義は何か」を問い続け、未来への責任ある<strong>応答（Correspondence）</strong>を生成する<strong>創造装置</strong>。
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-header">
        <div class="card-title">ダッシュボード機能一覧</div>
      </div>
      <div class="card-body">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          ${[
            { icon: '◉', title: 'ダッシュボード', desc: '4つのKPIカテゴリ、社会段階タイムライン、五循環モニター、ポートフォリオ、応答を一画面に統合表示' },
            { icon: '◎', title: 'KPI詳細', desc: '社会段階知覚・段階移行準備度・循環活性度・意味生成活性度の4カテゴリをサブ指標・トレンド・インサイト付きで可視化' },
            { icon: '①', title: '社会段階層', desc: 'Seed型（科学→技術→社会）とNeed型（社会→技術→科学）の移行シグナルを検知・記録し、社会段階マッピング上に配置' },
            { icon: '▣', title: 'ポートフォリオ', desc: '自然社会ビジョンから逆算した複数の移行経路仮説（Probe）を管理。社会段階適合度・学習貢献度・翻訳可能性の3基準で評価' },
            { icon: '⇄', title: '未来への応答', desc: '「避け難い未来」からの問いかけに対する組織的な応答を蓄積。受動的な「対応」ではなく責任ある「応答」を組織文化に埋め込む' },
            { icon: '⟳', title: '五循環モニター', desc: 'Seed-Need循環・段階移行循環・翻訳循環・共創循環・身体知循環の5つの循環の活性度を測定' },
          ].map(f => `
            <div style="display:flex; gap:12px; padding:14px; border:1px solid var(--border);">
              <div style="width:32px; height:32px; line-height:32px; text-align:center; background:#f3ede6; color:var(--deep-brown); font-size:16px; flex-shrink:0;">${f.icon}</div>
              <div>
                <div style="font-size:13px; font-weight:700; color:var(--deep-brown); margin-bottom:4px;">${f.title}</div>
                <div style="font-size:11px; color:var(--text-secondary); line-height:1.6;">${f.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="card" style="border-top:3px solid var(--deep-brown);">
      <div class="card-body" style="padding:24px; background:var(--deep-brown); color:white;">
        <div style="font-size:10px; letter-spacing:0.12em; color:var(--peach); margin-bottom:8px;">CORRESPONDENCE</div>
        <div style="font-family:'Hiragino Mincho ProN',serif; font-size:16px; font-weight:700; margin-bottom:12px;">「対応」から「応答」へ</div>
        <p style="font-size:13px; line-height:1.9; color:rgba(255,255,255,0.9); margin-bottom:12px;">
          SINIC経営の本質は、未来を予測することよりもむしろ、予測された未来に対する応答を出せる<strong style="color:white;">「判断の力」</strong>を組織の中に持つことにあります。
        </p>
        <p style="font-size:13px; line-height:1.9; color:rgba(255,255,255,0.9);">
          受動的な「対応（Response）」ではなく、責任を持って未来に向き合う<strong style="color:white;">「応答（Correspondence）」</strong>。このダッシュボードは、その営みを組織的に構造化し、持続可能な形で運用するためのツールです。
        </p>
      </div>
    </div>

    <div style="margin-top:20px; padding:16px; text-align:center; font-size:11px; color:var(--text-muted);">
      SINIC経営ダッシュボード v1.0 — 特定非営利活動法人ミラツク / 株式会社ヒューマンルネッサンス研究所<br>
      <a href="https://yuyanishimura0312.github.io/sinic-dashboard/" style="color:var(--terracotta);">https://yuyanishimura0312.github.io/sinic-dashboard/</a>
    </div>
  `;
}

// Initialize
render();

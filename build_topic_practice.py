# Construct TopicPractice component for TET 2A Telugu
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('data/questions.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

# Define TOPICS with area grouping
TOPICS = [
  {"id": 1, "name": "పద్య అవగాహన / పద్యార్థం", "area": "సాహిత్యం", "count": 42},
  {"id": 2, "name": "గద్య పఠనం మరియు సాహిత్య అవగాహన", "area": "సాహిత్యం", "count": 14},
  {"id": 3, "name": "తెలుగు సాహిత్య అవగాహన", "area": "సాహిత్యం", "count": 24},
  {"id": 4, "name": "కవులు, రచయితలు మరియు రచనలు", "area": "సాహిత్యం", "count": 10},
  {"id": 5, "name": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు", "area": "సాహిత్యం", "count": 59},
  {"id": 6, "name": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు", "area": "సాహిత్యం", "count": 20},
  {"id": 7, "name": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు", "area": "సాహిత్యం", "count": 60},
  {"id": 8, "name": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు", "area": "సాహిత్యం", "count": 30},
  {"id": 9, "name": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు", "area": "సాహిత్యం", "count": 39},
  {"id": 10, "name": "పదార్థాలు మరియు పర్యాయపదాలు", "area": "భాషాంశాలు", "count": 21},
  {"id": 11, "name": "పర్యాయపదాలు", "area": "భాషాంశాలు", "count": 10},
  {"id": 12, "name": "నానార్థాలు", "area": "భాషాంశాలు", "count": 20},
  {"id": 13, "name": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు", "area": "భాషాంశాలు", "count": 30},
  {"id": 14, "name": "ప్రకృతి – వికృతులు", "area": "భాషాంశాలు", "count": 20},
  {"id": 15, "name": "జాతీయాలు", "area": "భాషాంశాలు", "count": 20},
  {"id": 16, "name": "సామెతలు", "area": "భాషాంశాలు", "count": 30},
  {"id": 17, "name": "పొడుపుకథలు / పదబంధాలు", "area": "భాషాంశాలు", "count": 20},
  {"id": 18, "name": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు", "area": "వ్యాకరణం", "count": 20},
  {"id": 19, "name": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు", "area": "వ్యాకరణం", "count": 10},
  {"id": 20, "name": "సంధులు", "area": "వ్యాకరణం", "count": 30},
  {"id": 21, "name": "సమాసాలు", "area": "వ్యాకరణం", "count": 18},
  {"id": 22, "name": "ఛందస్సు", "area": "వ్యాకరణం", "count": 22},
  {"id": 23, "name": "అలంకారాలు", "area": "వ్యాకరణం", "count": 20},
  {"id": 24, "name": "వాక్య నిర్మాణం – వాక్య రకాలు", "area": "వ్యాకరణం", "count": 10},
  {"id": 25, "name": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు", "area": "వ్యాకరణం", "count": 9},
  {"id": 26, "name": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం", "area": "వ్యాకరణం", "count": 21}
]

# Ensure each question has topicId matching TOPICS
topic_name_to_id = {t["name"]: t["id"] for t in TOPICS}
for q in questions:
    q["topicId"] = topic_name_to_id.get(q["topic"], 1)

component_js = '''import React, { useCallback, useEffect, useMemo, useState } from "react";

export const TOPICS = ''' + json.dumps(TOPICS, ensure_ascii=False, indent=2) + ''';

export const QUESTION_BANK = ''' + json.dumps(questions, ensure_ascii=False, indent=2) + ''';

/* ------------------------------------------------------------------ */
/*  Styles matching responsive layout                                  */
/* ------------------------------------------------------------------ */
const CSS = `
.tp {
  --bg: #f8fafc;
  --panel: #ffffff;
  --ink: #0f172a;
  --muted: #64748b;
  --line: #e2e8f0;
  --accent: #2563eb;
  --accent-ink: #ffffff;
  --ok: #16a34a;
  --ok-bg: #f0fdf4;
  --bad: #dc2626;
  --bad-bg: #fef2f2;
  --sel: #eff6ff;
  --warn-bg: #fffbeb;
  --warn: #b45309;
  font-family: 'Noto Sans Telugu', system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  color: var(--ink);
  background: var(--bg);
  min-height: 100vh;
  box-sizing: border-box;
  line-height: 1.6;
}

@media (prefers-color-scheme: dark) {
  .tp {
    --bg: #0f172a;
    --panel: #1e293b;
    --ink: #f1f5f9;
    --muted: #94a3b8;
    --line: #334155;
    --accent: #3b82f6;
    --accent-ink: #ffffff;
    --ok: #4ade80;
    --ok-bg: #052e16;
    --bad: #f87171;
    --bad-bg: #450a0a;
    --sel: #1e3a8a;
    --warn-bg: #451a03;
    --warn: #fde68a;
  }
}

.tp * { box-sizing: border-box; }

.tp-shell {
  display: grid;
  grid-template-columns: 320px 1fr;
  min-height: 100vh;
}

.tp-side {
  border-right: 1px solid var(--line);
  background: var(--panel);
  padding: 18px 16px;
  overflow-y: auto;
  max-height: 100vh;
  position: sticky;
  top: 0;
}

.tp-brand {
  font-weight: 700;
  font-size: 18px;
  margin: 0 0 2px;
  color: var(--ink);
}

.tp-sub {
  color: var(--muted);
  font-size: 13px;
  margin: 0 0 14px;
}

.tp-tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  margin-bottom: 12px;
}

.tp-tab {
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  padding: 8px 10px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  transition: all 0.15s ease;
}

.tp-tab:hover {
  background: var(--sel);
}

.tp-tab[aria-selected="true"] {
  background: var(--accent);
  color: var(--accent-ink);
  border-color: var(--accent);
}

.tp-search {
  width: 100%;
  padding: 9px 12px;
  border: 1.5px solid var(--line);
  border-radius: 8px;
  background: var(--bg);
  color: var(--ink);
  font-size: 14px;
  font-family: inherit;
  margin-bottom: 10px;
  outline: none;
}

.tp-search:focus {
  border-color: var(--accent);
}

.tp-topic {
  display: block;
  width: 100%;
  text-align: left;
  border: 1px solid transparent;
  background: transparent;
  color: var(--ink);
  padding: 10px 12px;
  border-radius: 9px;
  cursor: pointer;
  margin-bottom: 3px;
  font-size: 14px;
  font-family: inherit;
  transition: all 0.15s ease;
}

.tp-topic:hover {
  background: var(--bg);
}

.tp-topic[aria-current="true"] {
  background: var(--sel);
  border-color: var(--accent);
  font-weight: 600;
}

.tp-topic-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.tp-count {
  color: var(--muted);
  font-size: 12px;
  white-space: nowrap;
}

.tp-bar {
  height: 4px;
  background: var(--line);
  border-radius: 4px;
  margin-top: 6px;
  overflow: hidden;
}

.tp-bar > span {
  display: block;
  height: 100%;
  background: var(--accent);
  transition: width 0.3s ease;
}

.tp-main {
  padding: 28px clamp(16px, 4vw, 48px);
  max-width: 900px;
  width: 100%;
}

.tp-topichead {
  border-bottom: 2px solid var(--line);
  padding-bottom: 16px;
  margin-bottom: 20px;
}

.tp-area {
  font-size: 12px;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 700;
  margin: 0 0 4px;
}

.tp-h1 {
  font-size: 24px;
  margin: 0 0 10px;
  color: var(--ink);
  font-weight: 700;
}

.tp-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
}

.tp-pill {
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 4px 12px;
  background: var(--panel);
  color: var(--muted);
}

.tp-pill strong {
  color: var(--ink);
}

.tp-palette {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  margin: 0 0 20px;
}

.tp-dot {
  width: 36px;
  height: 36px;
  border-radius: 9px;
  border: 1.5px solid var(--line);
  background: var(--panel);
  color: var(--ink);
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}

.tp-dot:hover {
  border-color: var(--accent);
}

.tp-dot[data-state="correct"] {
  background: var(--ok-bg);
  border-color: var(--ok);
  color: var(--ok);
}

.tp-dot[data-state="wrong"] {
  background: var(--bad-bg);
  border-color: var(--bad);
  color: var(--bad);
}

.tp-dot[aria-current="true"] {
  outline: 2.5px solid var(--accent);
  outline-offset: 2px;
}

.tp-card {
  background: var(--panel);
  border: 1.5px solid var(--line);
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.tp-qmeta {
  display: flex;
  justify-content: space-between;
  color: var(--muted);
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 12px;
}

.tp-stem {
  white-space: pre-wrap;
  font-size: 17px;
  line-height: 1.75;
  margin: 0 0 20px;
  color: var(--ink);
  font-weight: 500;
}

.tp-opts {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.tp-opt {
  width: 100%;
  display: flex;
  gap: 14px;
  align-items: center;
  text-align: left;
  padding: 14px 16px;
  border: 1.5px solid var(--line);
  border-radius: 12px;
  background: var(--panel);
  color: var(--ink);
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  line-height: 1.5;
  transition: all 0.15s ease;
}

.tp-opt:hover:not(:disabled) {
  border-color: var(--accent);
  background: var(--sel);
}

.tp-opt[aria-checked="true"] {
  border-color: var(--accent);
  background: var(--sel);
}

.tp-opt:disabled {
  cursor: default;
}

.tp-opt[data-result="correct"] {
  border-color: var(--ok);
  background: var(--ok-bg);
  color: var(--ok);
  font-weight: 600;
}

.tp-opt[data-result="wrong"] {
  border-color: var(--bad);
  background: var(--bad-bg);
  color: var(--bad);
}

.tp-key {
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1.5px solid currentColor;
  display: grid;
  place-items: center;
  font-size: 13px;
  font-weight: 700;
  opacity: 0.85;
}

.tp-opt-text {
  flex: 1;
}

.tp-mark {
  margin-left: auto;
  font-weight: 700;
  font-size: 16px;
}

.tp-feedback {
  margin-top: 18px;
  padding: 14px 18px;
  border-radius: 10px;
  font-size: 15px;
  line-height: 1.6;
}

.tp-feedback.ok {
  background: var(--ok-bg);
  color: var(--ok);
  border: 1.5px solid var(--ok);
}

.tp-feedback.bad {
  background: var(--bad-bg);
  color: var(--bad);
  border: 1.5px solid var(--bad);
}

.tp-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  margin-top: 22px;
}

.tp-btn {
  border: 1.5px solid var(--line);
  background: var(--panel);
  color: var(--ink);
  padding: 11px 20px;
  border-radius: 9px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  font-family: inherit;
  transition: all 0.15s ease;
}

.tp-btn:hover:not(:disabled) {
  background: var(--sel);
  border-color: var(--accent);
}

.tp-btn.primary {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}

.tp-btn.primary:hover:not(:disabled) {
  opacity: 0.92;
}

.tp-btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.tp-summary {
  margin-top: 22px;
  background: var(--panel);
  border: 1.5px solid var(--line);
  border-radius: 12px;
  padding: 20px;
  font-size: 16px;
}

.tp-menu {
  display: none;
}

@media (max-width: 860px) {
  .tp-shell {
    grid-template-columns: 1fr;
  }
  .tp-side {
    position: fixed;
    inset: 0 auto 0 0;
    width: min(320px, 86vw);
    z-index: 20;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.25);
  }
  .tp-side[data-open="true"] {
    transform: none;
  }
  .tp-menu {
    display: inline-block;
    margin-bottom: 14px;
  }
  .tp-scrim {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 10;
  }
}
`;

export default function TetTeluguMockTest() {
  const [topicId, setTopicId] = useState(1);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState({});
  const [answers, setAnswers] = useState({});
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [area, setArea] = useState("సాహిత్యం");

  // Group questions by topicId
  const byTopic = useMemo(() => {
    const map = {};
    TOPICS.forEach(t => { map[t.id] = []; });
    QUESTION_BANK.forEach(q => {
      const tid = q.topicId || 1;
      if (!map[tid]) map[tid] = [];
      map[tid].push(q);
    });
    return map;
  }, []);

  const areas = ["సాహిత్యం", "భాషాంశాలు", "వ్యాకరణం"];
  const topic = TOPICS.find(t => t.id === topicId) || TOPICS[0];
  const list = byTopic[topicId] || [];
  const q = list[index];

  const topicStats = useCallback((tid) => {
    const qs = byTopic[tid] || [];
    let done = 0, right = 0;
    qs.forEach(x => {
      const ans = answers[x.id];
      if (ans != null) {
        done++;
        if (Number(ans) === Number(x.correctOption)) right++;
      }
    });
    return { total: qs.length, done, right };
  }, [byTopic, answers]);

  const openTopic = (tid) => {
    setTopicId(tid);
    const qs = byTopic[tid] || [];
    const firstOpen = qs.findIndex(x => answers[x.id] == null);
    setIndex(firstOpen === -1 ? 0 : firstOpen);
    setMenuOpen(false);
  };

  const choose = (key) => {
    if (!q || answers[q.id] != null) return;
    setSelected(s => ({ ...s, [q.id]: key }));
  };

  const submit = () => {
    if (!q || answers[q.id] != null || selected[q.id] == null) return;
    const choice = selected[q.id];
    setAnswers(prev => ({ ...prev, [q.id]: choice }));
  };

  const go = (delta) => {
    setIndex(i => Math.min(Math.max(i + delta, 0), list.length - 1));
  };

  const resetTopic = () => {
    const ids = new Set(list.map(x => x.id));
    setAnswers(prev => {
      const next = { ...prev };
      ids.forEach(id => delete next[id]);
      return next;
    });
    setSelected(prev => {
      const next = { ...prev };
      ids.forEach(id => delete next[id]);
      return next;
    });
    setIndex(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.target && /input|textarea/i.test(e.target.tagName)) return;
      if (!q) return;
      if (["1", "2", "3", "4"].includes(e.key)) choose(Number(e.key));
      else if (e.key === "Enter") answers[q.id] != null ? go(1) : submit();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const stats = topicStats(topicId);
  const submitted = q ? answers[q.id] : undefined;
  const currentChoice = q ? (submitted ?? selected[q.id]) : undefined;
  const isCorrect = submitted != null && Number(submitted) === Number(q?.correctOption);

  const visibleTopics = TOPICS.filter(t =>
    t.area === area && t.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  return (
    <div className="tp">
      <style>{CSS}</style>
      <div className="tp-shell">
        {menuOpen && <div className="tp-scrim" onClick={() => setMenuOpen(false)} />}

        {/* ---------------- Sidebar Topics ---------------- */}
        <nav className="tp-side" data-open={menuOpen} aria-label="Topics">
          <p className="tp-brand">TET Telugu · Paper 2A</p>
          <p className="tp-sub">
            {QUESTION_BANK.length} questions · {TOPICS.length} topics
          </p>

          <div className="tp-tabs" role="tablist">
            {areas.map(a => (
              <button
                key={a}
                role="tab"
                className="tp-tab"
                aria-selected={area === a}
                onClick={() => setArea(a)}
              >
                {a}
              </button>
            ))}
          </div>

          <input
            className="tp-search"
            type="search"
            placeholder="Search topics / అంశాలు వెతకండి"
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search topics"
          />

          {visibleTopics.map(t => {
            const st = topicStats(t.id);
            return (
              <button
                key={t.id}
                className="tp-topic"
                aria-current={t.id === topicId}
                onClick={() => openTopic(t.id)}
              >
                <div className="tp-topic-row">
                  <span>{t.id}. {t.name}</span>
                  <span className="tp-count">
                    {st.done}/{st.total}
                  </span>
                </div>
                <div className="tp-bar" aria-hidden="true">
                  <span style={{ width: `${st.total ? (st.done / st.total) * 100 : 0}%` }} />
                </div>
              </button>
            );
          })}
          {visibleTopics.length === 0 && <p className="tp-sub">ఎటువంటి అంశాలు దొరకలేదు.</p>}
        </nav>

        {/* ---------------- Main Question Area ---------------- */}
        <main className="tp-main">
          <button className="tp-btn tp-menu" onClick={() => setMenuOpen(true)}>
            ☰ Topics (అంశాల జాబితా)
          </button>

          {topic && (
            <header className="tp-topichead">
              <p className="tp-area">{topic.area}</p>
              <h1 className="tp-h1">{topic.name}</h1>
              <div className="tp-stats">
                <span className="tp-pill">
                  <strong>{stats.total}</strong> questions
                </span>
                <span className="tp-pill">Answered {stats.done}</span>
                <span className="tp-pill">Correct {stats.right}</span>
                <span className="tp-pill">
                  Accuracy {stats.done ? Math.round((stats.right / stats.done) * 100) : 0}%
                </span>
              </div>
            </header>
          )}

          {/* Question palette buttons */}
          <div className="tp-palette" aria-label="Questions in this topic">
            {list.map((x, i) => {
              const ans = answers[x.id];
              let state = "open";
              if (ans != null) {
                state = Number(ans) === Number(x.correctOption) ? "correct" : "wrong";
              }
              return (
                <button
                  key={x.id}
                  className="tp-dot"
                  aria-current={i === index}
                  aria-label={`Question ${i + 1}`}
                  data-state={state}
                  onClick={() => setIndex(i)}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          {q ? (
            <article className="tp-card" aria-live="polite">
              <div className="tp-qmeta">
                <span>Question {index + 1} of {list.length}</span>
                <span>Source Q{q.printedNumber}</span>
              </div>

              <p className="tp-stem">{q.stem}</p>

              <ul className="tp-opts" role="radiogroup" aria-label="Options">
                {q.options.map(option => {
                  const key = option.number;
                  let result;
                  if (submitted != null) {
                    if (Number(key) === Number(q.correctOption)) result = "correct";
                    else if (Number(key) === Number(submitted)) result = "wrong";
                  }
                  return (
                    <li key={key}>
                      <button
                        className="tp-opt"
                        role="radio"
                        aria-checked={Number(currentChoice) === Number(key)}
                        data-result={result}
                        disabled={submitted != null}
                        onClick={() => choose(key)}
                      >
                        <span className="tp-key">{key}</span>
                        <span className="tp-opt-text">{option.text}</span>
                        {result === "correct" && <span className="tp-mark" aria-label="correct answer">✓</span>}
                        {result === "wrong" && <span className="tp-mark" aria-label="your answer, wrong">✗</span>}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {submitted != null && (
                <div className={`tp-feedback ${isCorrect ? "ok" : "bad"}`} role="status">
                  {isCorrect ? (
                    <div>
                      <strong>✓ Correct (సరైన సమాధానం!)</strong>
                      <div style={{ marginTop: "4px" }}>
                        Option {q.correctOption} — {q.correctText}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <strong>✗ Not correct (తప్పు సమాధానం).</strong>
                      <div style={{ marginTop: "4px" }}>
                        మీరు ఎంచుకున్నది: Option {submitted}. <strong>సరైన సమాధానం: Option {q.correctOption} — {q.correctText}</strong>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="tp-actions">
                <button className="tp-btn" onClick={() => go(-1)} disabled={index === 0}>
                  ← Previous
                </button>
                {submitted == null ? (
                  <button
                    className="tp-btn primary"
                    onClick={submit}
                    disabled={selected[q.id] == null}
                  >
                    Submit answer
                  </button>
                ) : (
                  <button
                    className="tp-btn primary"
                    onClick={() => go(1)}
                    disabled={index === list.length - 1}
                  >
                    Next →
                  </button>
                )}
              </div>
            </article>
          ) : (
            <p className="tp-sub">ఈ అంశంలో ప్రశ్నలు లేవు.</p>
          )}

          {stats.total > 0 && stats.done === stats.total && (
            <section className="tp-summary">
              <strong>అంశం పూర్తయింది! (Topic complete).</strong> మీరు {stats.right} / {stats.total} సాధించారు (
              {Math.round((stats.right / stats.total) * 100)}%).{" "}
              <button className="tp-btn" onClick={resetTopic} style={{ marginLeft: 8 }}>
                మళ్ళీ ప్రాక్టీస్ చేయండి (Practise again)
              </button>
            </section>
          )}

          {stats.done > 0 && stats.done < stats.total && (
            <div style={{ marginTop: 14 }}>
              <button className="tp-btn" onClick={resetTopic}>
                ఈ అంశాన్ని రీసెట్ చేయండి (Reset this topic)
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
'''

with open('src/TET 2A Telugu.jsx', 'w', encoding='utf-8') as f:
    f.write(component_js)

with open('TET 2A Telugu.jsx', 'w', encoding='utf-8') as f:
    f.write(component_js)

print("Saved updated component to src/TET 2A Telugu.jsx and TET 2A Telugu.jsx.")

# Script to update component in TET 2A Telugu.jsx and src/TET 2A Telugu.jsx
import re

new_component_code = '''
function QuestionCard({ question, selected, onSelect, isSubmitted }) {
  const correct = question.correctOption;
  const isCorrect = selected === correct;

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-number">ప్రశ్న {question.id} (మూలం సంఖ్య: {question.printedNumber})</span>
        <span className="question-topic-badge">{question.topic}</span>
      </div>

      <pre className="question-stem">{question.stem}</pre>

      <div className="options">
        {question.options.map(option => {
          const isSelected = selected === option.number;
          const isThisCorrect = option.number === correct;
          let cls = "option";
          if (isSelected) cls += " selected";
          if (isSubmitted) {
            if (isThisCorrect) cls += " correct";
            else if (isSelected) cls += " incorrect";
          }
          return (
            <label className={cls} key={option.number}>
              <input
                type="radio"
                name={`q-${question.id}`}
                checked={isSelected}
                disabled={isSubmitted}
                onChange={() => !isSubmitted && onSelect(option.number)}
              />
              <span className="option-label">
                <strong>{option.number})</strong> {option.text}
              </span>
              {isSubmitted && isThisCorrect && (
                <span className="badge-mark correct-badge">✓ సరైన సమాధానం</span>
              )}
              {isSubmitted && isSelected && !isThisCorrect && (
                <span className="badge-mark wrong-badge">✗ మీ ఎంపిక</span>
              )}
            </label>
          );
        })}
      </div>

      {isSubmitted && (
        <div className={`answer-box ${isCorrect ? "correct" : "incorrect"}`}>
          {isCorrect ? (
            <div className="feedback-content">
              <span className="feedback-icon">🎉</span>
              <div>
                <strong>అద్భుతం! సరైన సమాధానం.</strong>
                <p>ఆప్షన్ {correct} — {question.correctText}</p>
              </div>
            </div>
          ) : (
            <div className="feedback-content">
              <span className="feedback-icon">❌</span>
              <div>
                <strong>తప్పు సమాధానం.</strong>
                {selected != null ? (
                  <p>మీరు ఎంచుకున్నది: <strong>ఆప్షన్ {selected}</strong></p>
                ) : (
                  <p>మీరు సమాధానం ఎంచుకోలేదు.</p>
                )}
                <p className="correct-highlight">
                  👉 <strong>సరైన సమాధానం:</strong> ఆప్షన్ {correct} — {question.correctText}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function TetTeluguMockTest() {
  const [topicId, setTopicId] = useState("all");
  const [count, setCount] = useState(20);
  const [timed, setTimed] = useState(true);
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submittedMap, setSubmittedMap] = useState({});
  const [seconds, setSeconds] = useState(0);
  const [activeQuestions, setActiveQuestions] = useState([]);

  const pool = useMemo(() => {
    if (topicId === "all") return QUESTION_BANK;
    const selectedTopic = TOPICS.find(t => String(t.id) === String(topicId));
    return QUESTION_BANK.filter(q => q.topic === selectedTopic?.name);
  }, [topicId]);

  const startTest = () => {
    const selected = shuffle(pool).slice(0, Math.min(Number(count), pool.length));
    setActiveQuestions(selected);
    setStarted(true);
    setSubmitted(false);
    setIndex(0);
    setAnswers({});
    setSubmittedMap({});
    setSeconds(0);
  };

  useEffect(() => {
    if (!started || submitted || !timed) return;
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, [started, submitted, timed]);

  const current = activeQuestions[index];
  const isCurrentSubmitted = current ? !!submittedMap[current.id] : false;

  const selectAnswer = option => {
    if (isCurrentSubmitted) return;
    setAnswers(a => ({ ...a, [current.id]: option }));
  };

  const submitCurrentAnswer = () => {
    if (!current || answers[current.id] == null) return;
    setSubmittedMap(m => ({ ...m, [current.id]: true }));
  };

  const submittedQuestionsList = activeQuestions.filter(q => submittedMap[q.id]);
  const correctCount = submittedQuestionsList.filter(q => answers[q.id] === q.correctOption).length;
  const wrongCount = submittedQuestionsList.filter(q => answers[q.id] !== q.correctOption).length;

  const finishTest = () => {
    setSubmitted(true);
  };

  if (!started) {
    return (
      <main className="tet-app">
        <h1>TET 2A తెలుగు ప్రాక్టీస్ & మాక్ టెస్ట్</h1>
        <p className="subtitle">
          అధ్యాయాల వారీగా ప్రశ్నలు ప్రాక్టీస్ చేయండి. ప్రతి ప్రశ్నకు సమాధానం సమర్పించగానే వెంటనే సరైన సమాధానం మరియు వివరాలు కనిపిస్తాయి.
        </p>

        <div className="form-group">
          <label>
            <span>అంశం (Topic ఎంచుకోండి):</span>
            <select value={topicId} onChange={e => setTopicId(e.target.value)}>
              <option value="all">అన్ని అంశాలు (మొత్తం {QUESTION_BANK.length} ప్రశ్నలు)</option>
              {TOPICS.map(t => (
                <option key={t.id} value={t.id}>
                  {t.id}. {t.name} ({t.questionCount} ప్రశ్నలు)
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            <span>ప్రశ్నల సంఖ్య (Number of Questions):</span>
            <input
              type="number"
              min="1"
              max={Math.max(1, pool.length)}
              value={count}
              onChange={e => setCount(e.target.value)}
            />
          </label>
          <small className="help-text">ఈ అంశంలో అందుబాటులో ఉన్న ప్రశ్నలు: {pool.length}</small>
        </div>

        <div className="form-group-checkbox">
          <label>
            <input
              type="checkbox"
              checked={timed}
              onChange={e => setTimed(e.target.checked)}
            />
            <span>సమయ పరిమితి (Timer అమలు చేయండి)</span>
          </label>
        </div>

        <button className="btn-primary" onClick={startTest}>
          టెస్ట్ ప్రారంభించండి (Start Practice) 🚀
        </button>
      </main>
    );
  }

  if (submitted) {
    const totalScore = correctCount;
    const totalQuestions = activeQuestions.length;
    const percentage = Math.round((totalScore / totalQuestions) * 100);

    return (
      <main className="tet-app">
        <h1>పరీక్ష ఫలితాలు (Test Results)</h1>
        <div className="result-summary-card">
          <div className="score-circle">
            <span className="score-number">{totalScore}</span>
            <span className="score-total">/ {totalQuestions}</span>
            <span className="score-pct">{percentage}%</span>
          </div>

          <div className="result-stats">
            <div className="stat-item correct">
              <span className="stat-label">సరైన సమాధానాలు:</span>
              <span className="stat-val">{correctCount}</span>
            </div>
            <div className="stat-item wrong">
              <span className="stat-label">తప్పు సమాధానాలు:</span>
              <span className="stat-val">{wrongCount}</span>
            </div>
            <div className="stat-item unanswered">
              <span className="stat-label">రాయని ప్రశ్నలు:</span>
              <span className="stat-val">{totalQuestions - submittedQuestionsList.length}</span>
            </div>
            <div className="stat-item time">
              <span className="stat-label">పట్టిన సమయం:</span>
              <span className="stat-val">
                {Math.floor(seconds / 60)} నిమి. {String(seconds % 60).padStart(2, "0")} సెక.
              </span>
            </div>
          </div>
        </div>

        <div className="result-actions">
          <button
            className="btn-primary"
            onClick={() => {
              setStarted(false);
              setSubmitted(false);
            }}
          >
            మళ్ళీ కొత్త టెస్ట్ రాయండి (New Test) 🔄
          </button>
        </div>

        <hr />
        <h2>ప్రశ్నల సమీక్ష (Detailed Review)</h2>
        <div className="review-list">
          {activeQuestions.map(q => (
            <QuestionCard
              key={q.id}
              question={q}
              selected={answers[q.id]}
              onSelect={() => {}}
              isSubmitted={true}
            />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="tet-app">
      <header className="test-header">
        <div className="header-left">
          <h1>TET 2A తెలుగు ప్రాక్టీస్</h1>
          <div className="live-score">
            స్కోర్: <strong>{correctCount}</strong> / {submittedQuestionsList.length} సరైనవి
          </div>
        </div>
        {timed && (
          <div className="header-timer">
            ⏱️ {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")}
          </div>
        )}
      </header>

      <div className="progress-bar-container">
        <div className="progress-info">
          <span>ప్రశ్న <strong>{index + 1}</strong> / {activeQuestions.length}</span>
          <span>పూర్తయినవి: {Math.round((submittedQuestionsList.length / activeQuestions.length) * 100)}%</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${((index + 1) / activeQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <QuestionCard
        question={current}
        selected={answers[current.id]}
        onSelect={selectAnswer}
        isSubmitted={isCurrentSubmitted}
      />

      <nav className="test-nav">
        <button
          className="btn-nav"
          disabled={index === 0}
          onClick={() => setIndex(i => i - 1)}
        >
          ← మునుపటి ప్రశ్న (Previous)
        </button>

        {!isCurrentSubmitted ? (
          <button
            className="btn-submit"
            disabled={answers[current.id] == null}
            onClick={submitCurrentAnswer}
          >
            సమాధానం సరిచూడండి (Submit Answer) ✓
          </button>
        ) : index < activeQuestions.length - 1 ? (
          <button
            className="btn-next"
            onClick={() => setIndex(i => i + 1)}
          >
            తరువాతి ప్రశ్న → (Next)
          </button>
        ) : (
          <button
            className="btn-finish"
            onClick={finishTest}
          >
            టెస్ట్ ముగించండి & ఫలితాలు చూడండి 🏁
          </button>
        )}
      </nav>
    </main>
  );
}
'''

for file_path in ['src/TET 2A Telugu.jsx', 'TET 2A Telugu.jsx']:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find where function QuestionCard begins
    qcard_idx = content.find('function QuestionCard')
    if qcard_idx == -1:
        print(f"Error: Could not find QuestionCard in {file_path}")
        continue

    # Replace from function QuestionCard to the end of the file
    updated_content = content[:qcard_idx] + new_component_code.strip() + '\n'

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    print(f"Updated {file_path} successfully.")

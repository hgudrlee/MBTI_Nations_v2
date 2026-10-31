export default function QuestionScreen({
  current,
  questions,
  answers,
  progress,
  onHome,
  onBack,
  onSelect,
}) {
  const question = questions[current];

  return (
    <main className={`app-shell quiz-screen question-bg-${Math.floor(current / 2) + 1}`}>
      <header className="topbar">
        <button className="brand-button" onClick={onHome}>민족 <span>MBTI</span></button>
      </header>
      <div className="progress-wrap">
        <div className="progress-info">
          <span>QUESTION {String(current + 1).padStart(2, "0")} <b>/ {String(questions.length).padStart(2, "0")}</b></span>
        </div>
        <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
      </div>
      <section className="question-layout">
        <div className="question-copy">
          <button className="back-button question-back" onClick={onBack} disabled={current === 0}>← 이전 질문</button>
          <p className="question-count">{String(current + 1).padStart(2, "0")}</p>
          <h1>{question.title}</h1>
        </div>
        <div className="choices" role="group" aria-label={question.title}>
          {question.choices.map((choice, index) => (
            <button
              className={`choice-card ${answers[current] === choice.positive ? "selected" : ""}`}
              key={choice.label}
              onClick={() => onSelect(choice.positive)}
            >
              <span className="choice-index">0{index + 1}</span>
              <span className="choice-content">
                <strong>{choice.label}</strong>
                <small>{choice.detail}</small>
              </span>
              <span className="choice-arrow">→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}

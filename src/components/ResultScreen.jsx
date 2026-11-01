export default function ResultScreen({
  result,
  scores,
  axisLetters,
  nationMap,
  nationNotes,
  onHome,
  onRestart,
  onShare,
}) {
  return (
    <main className="app-shell result-screen">
      <header className="topbar">
        <button className="brand-button" onClick={onHome}>
          <img className="brand-logo" src="/favicon.svg?v=2" alt="" />
          <span className="brand-name">민족 <span>MBTI</span></span>
        </button>
      </header>
      <section className="result-layout">
        <div className="result-intro">
          <p className="result-overline">당신의 민족은</p>
          <h1>{nationMap[result]}</h1>
          <div className={`nation-flag flag-${result}`} role="img" aria-label={`${nationMap[result]} 국기`} />
        </div>
        <div className="result-panel">
          <p className="result-panel-note">{nationNotes[nationMap[result]]}</p>
          <div className="axis-list">
            {Object.entries(axisLetters).map(([axis, letters]) => {
              const positive = scores[axis] > 0;
              const strength = Math.max(4, Math.round(Math.abs(scores[axis]) * 48));
              return (
                <div className="axis-row" key={axis}>
                  <div className="axis-labels">
                    <span className={positive ? "active" : ""}>{letters[0]}</span>
                    <span className={!positive ? "active" : ""}>{letters[1]}</span>
                  </div>
                  <div className="axis-track"><span className={`axis-fill ${positive ? "left" : "right"}`} style={{ width: `${strength}%` }} /></div>
                  <div className="axis-name">
                    {axis === "EI" ? "에너지" : axis === "NS" ? "인식" : axis === "FT" ? "판단" : "생활"}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="result-actions">
            <button className="primary-button" onClick={onShare}>결과 공유하기 <span>↗</span></button>
            <button className="text-button" onClick={onRestart}>다시 테스트하기</button>
          </div>
        </div>
      </section>
      <footer className="site-footer">© vision_pohang</footer>
    </main>
  );
}

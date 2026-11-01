export default function IntroScreen({ onStart }) {
  return (
    <main className="app-shell intro-screen">
      <header className="topbar">
        <button className="brand-button" type="button">
          <img className="brand-logo" src="/favicon.svg?v=2" alt="" />
          <span className="brand-name">민족 <span>MBTI</span></span>
        </button>
      </header>
      <section className="intro-card">
        <h1>나의 <em>민족 MBTI</em>는?</h1>
        <p className="intro-copy">
          12개의 선택으로 알아보는<br />
          나에게 어울리는 민족 추천
        </p>
        <button className="primary-button" onClick={onStart}>
          테스트 시작하기 <span>→</span>
        </button>
        <div className="intro-meta">
          <span>약 1분</span>
          <span>12 질문</span>
        </div>
      </section>
      <footer className="site-footer">© vision_pohang</footer>
    </main>
  );
}

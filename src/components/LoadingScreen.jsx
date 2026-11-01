export default function LoadingScreen() {
  return (
    <main className="app-shell loading-screen" role="status" aria-live="polite">
      <div className="loading-content">
        <div className="loading-map" aria-hidden="true">
          <svg viewBox="0 0 320 210" fill="none">
            <path className="map-contour" d="M22 44 79 25l35 18 42-16 32 19 43-13 65 25M8 92l47-18 43 15 34-23 39 15 48-20 73 19M13 146l53-20 42 21 38-25 43 17 42-24 67 19M42 190l41-25 42 15 33-22 41 16 45-24 41 15" />
            <path className="map-route" d="M34 166c41 0 42-54 84-48s50-59 92-43 38 22 75-38" />
            <circle className="map-origin" cx="34" cy="166" r="5" />
            <circle className="map-destination-pulse" cx="285" cy="37" r="17" />
            <path className="map-destination" d="M285 22c-8.3 0-15 6.7-15 15 0 11.2 15 25 15 25s15-13.8 15-25c0-8.3-6.7-15-15-15Zm0 20a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
          </svg>
        </div>
        <h1>당신의 여정을<br />정리하고 있어요</h1>
        <p className="loading-description">12개의 답변 속에서 당신과 닮은 민족을 찾고 있어요.</p>
      </div>
      <footer className="site-footer">© vision_pohang</footer>
    </main>
  );
}

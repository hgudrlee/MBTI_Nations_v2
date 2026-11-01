import { getResultBackground } from "../utils/resultImage";
import nationStories from "../data/nationStories.json";

export default function ResultScreen({ result, nationMap, onRestart }) {
  const nation = nationMap[result];
  const backgroundUrl = getResultBackground(nation);
  const story = nationStories[nation];
  const hasFlag = result !== "INFJ";

  return (
    <main
      className="app-shell result-screen result-restart-screen"
      style={backgroundUrl ? { "--result-background-image": `url("${backgroundUrl}")` } : undefined}
    >
      <section className={hasFlag ? "result-restart-content" : "result-restart-content without-flag"}>
        {hasFlag && <div className={`nation-flag flag-${result}`} role="img" aria-label={`${nation} 국기`} />}
        <div className="result-restart-text">
          <p className="result-overline">나의 민족은</p>
          <h1>{nation}</h1>
        </div>
      </section>
      {story && <p className="nation-story">{story}</p>}
      <button className="primary-button result-restart-button" onClick={onRestart}>
        다시 테스트하기
      </button>
      <p className="result-type-label">MBTI · {result}</p>
    </main>
  );
}

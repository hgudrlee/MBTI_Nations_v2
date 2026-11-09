import { useEffect, useMemo, useState } from "react";
import "./App.css";
import IntroScreen from "./components/IntroScreen";
import LoadingScreen from "./components/LoadingScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import { getMbti, getScores } from "./utils/scoring";
import { getResultBackground } from "./utils/resultImage";
import { axisLetters, nationMap, questions } from "./data/quizData";


function App() {
  const [screen, setScreen] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(null));
  const scores = useMemo(() => getScores(answers, questions), [answers]);
  const result = useMemo(() => getMbti(scores, axisLetters), [scores]);
  const question = questions[current];
  const progress = ((current + (screen === "result" ? 1 : 0)) / questions.length) * 100;

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [screen, current]);

  useEffect(() => {
    if (screen !== "loading") return undefined;

    const backgroundUrl = getResultBackground(nationMap[result]);
    if (backgroundUrl) {
      const background = new Image();
      background.decoding = "async";
      background.src = backgroundUrl;
      background.decode().catch(() => {});
    }

    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1000 : 3800;
    const timeout = window.setTimeout(() => setScreen("result"), duration);
    return () => window.clearTimeout(timeout);
  }, [screen, result]);

  const start = () => { setAnswers(Array(questions.length).fill(null)); setCurrent(0); setScreen("quiz"); };
  const selectAnswer = (value) => {
    if (!question) return;
    const nextAnswers = [...answers]; nextAnswers[current] = value; setAnswers(nextAnswers);
    if (current === questions.length - 1) setScreen("loading");
    else setCurrent((step) => Math.min(step + 1, questions.length - 1));
  };
  const goBack = () => current === 0 ? setScreen("intro") : setCurrent((step) => step - 1);
  const goIntro = () => { setAnswers(Array(questions.length).fill(null)); setCurrent(0); setScreen("intro"); };

  if (screen === "intro") return <IntroScreen onStart={start} />;
  if (screen === "loading") return <LoadingScreen />;
  if (screen === "result") return <ResultScreen result={result} nationMap={nationMap} onRestart={goIntro} />;
  return <QuestionScreen current={current} questions={questions} answers={answers} progress={progress} onHome={goIntro} onBack={goBack} onSelect={selectAnswer} />;

}

export default App;

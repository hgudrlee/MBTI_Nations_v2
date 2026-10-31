import { useEffect, useMemo, useState } from "react";
import "./App.css";
import IntroScreen from "./components/IntroScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import { getMbti, getScores } from "./utils/scoring";
import { axisLetters, nationMap, nationNotes, questions } from "./data/quizData";


function App() {
  const [screen, setScreen] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(null));
  const scores = useMemo(() => getScores(answers, questions), [answers]);
  const result = useMemo(() => getMbti(scores, axisLetters), [scores]);
  const question = questions[current];
  const progress = ((current + (screen === "result" ? 1 : 0)) / questions.length) * 100;

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [screen, current]);

  const start = () => { setAnswers(Array(questions.length).fill(null)); setCurrent(0); setScreen("quiz"); };
  const selectAnswer = (value) => {
    if (!question) return;
    const nextAnswers = [...answers]; nextAnswers[current] = value; setAnswers(nextAnswers);
    if (current === questions.length - 1) setScreen("result");
    else setCurrent((step) => Math.min(step + 1, questions.length - 1));
  };
  const goBack = () => current === 0 ? setScreen("intro") : setCurrent((step) => step - 1);
  const goIntro = () => { setAnswers(Array(questions.length).fill(null)); setCurrent(0); setScreen("intro"); };
  const handleShare = async () => {
    const text = `나의 민족 MBTI는 ${result}, ${nationMap[result]} 민족입니다.`;
    if (navigator.share) await navigator.share({ title: "민족 MBTI", text });
    else if (navigator.clipboard) await navigator.clipboard.writeText(text);
  };

  if (screen === "intro") return <IntroScreen onStart={start} />;
  if (screen === "result") return <ResultScreen result={result} scores={scores} axisLetters={axisLetters} nationMap={nationMap} nationNotes={nationNotes} onHome={goIntro} onRestart={goIntro} onShare={handleShare} />;
  return <QuestionScreen current={current} questions={questions} answers={answers} progress={progress} onHome={goIntro} onBack={goBack} onSelect={selectAnswer} />;

}

export default App;

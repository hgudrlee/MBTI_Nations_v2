import { useEffect, useMemo, useState } from "react";
import "./App.css";
import IntroScreen from "./components/IntroScreen";
import LoadingScreen from "./components/LoadingScreen";
import QuestionScreen from "./components/QuestionScreen";
import ResultScreen from "./components/ResultScreen";
import { getMbti, getScores } from "./utils/scoring";
import { getResultImage } from "./utils/resultImage";
import { axisLetters, nationMap, nationNotes, questions } from "./data/quizData";


function App() {
  const [screen, setScreen] = useState("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(() => Array(questions.length).fill(null));
  const [shareImage, setShareImage] = useState(null);
  const [shareMessage, setShareMessage] = useState("");
  const scores = useMemo(() => getScores(answers, questions), [answers]);
  const result = useMemo(() => getMbti(scores, axisLetters), [scores]);
  const question = questions[current];
  const progress = ((current + (screen === "result" ? 1 : 0)) / questions.length) * 100;

  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [screen, current]);

  useEffect(() => {
    if (screen !== "loading") return undefined;

    const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1000 : 3800;
    const timeout = window.setTimeout(() => setScreen("result"), duration);
    return () => window.clearTimeout(timeout);
  }, [screen]);

  useEffect(() => {
    if (screen !== "result") return undefined;

    let cancelled = false;
    const { fileName, url } = getResultImage(nationMap[result]);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load result image: ${response.status}`);
        }
        return response.blob();
      })
      .then((blob) => {
        if (!cancelled) setShareImage({ result, file: new File([blob], fileName, { type: "image/png" }), url, fileName });
      })
      .catch((error) => {
        if (cancelled) return;
        console.error("Failed to load result image.", error);
        setShareMessage("결과 이미지를 불러오지 못했어요. 페이지를 새로고침한 뒤 다시 시도해 주세요.");
      });

    return () => { cancelled = true; };
  }, [screen, result]);

  const start = () => { setAnswers(Array(questions.length).fill(null)); setCurrent(0); setShareMessage(""); setScreen("quiz"); };
  const selectAnswer = (value) => {
    if (!question) return;
    const nextAnswers = [...answers]; nextAnswers[current] = value; setAnswers(nextAnswers);
    if (current === questions.length - 1) setScreen("loading");
    else setCurrent((step) => Math.min(step + 1, questions.length - 1));
  };
  const goBack = () => current === 0 ? setScreen("intro") : setCurrent((step) => step - 1);
  const goIntro = () => { setAnswers(Array(questions.length).fill(null)); setCurrent(0); setShareMessage(""); setScreen("intro"); };
  const currentShareImage = shareImage?.result === result ? shareImage : null;
  const handleShare = () => {
    setShareMessage("");

    if (!currentShareImage) return;

    if (typeof navigator.share === "function" && navigator.canShare?.({ files: [currentShareImage.file] })) {
      try {
        navigator.share({ files: [currentShareImage.file] }).catch((error) => {
          if (error?.name === "AbortError") return;
          console.error("Failed to share result image.", error);
          setShareMessage("결과 이미지를 공유하지 못했어요. 다시 시도해 주세요.");
        });
      } catch (error) {
        console.error("Failed to share result image.", error);
        setShareMessage("결과 이미지를 공유하지 못했어요. 다시 시도해 주세요.");
      }
      return;
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = currentShareImage.url;
    downloadLink.download = currentShareImage.fileName;
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    setShareMessage("이 브라우저는 이미지 공유를 지원하지 않아 결과 이미지를 다운로드했어요.");
  };

  if (screen === "intro") return <IntroScreen onStart={start} />;
  if (screen === "loading") return <LoadingScreen />;
  if (screen === "result") return <ResultScreen result={result} scores={scores} axisLetters={axisLetters} nationMap={nationMap} nationNotes={nationNotes} shareReady={Boolean(currentShareImage)} shareMessage={shareMessage} onHome={goIntro} onRestart={goIntro} onShare={handleShare} />;
  return <QuestionScreen current={current} questions={questions} answers={answers} progress={progress} onHome={goIntro} onBack={goBack} onSelect={selectAnswer} />;

}

export default App;

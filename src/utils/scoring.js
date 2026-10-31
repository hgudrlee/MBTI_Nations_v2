export function getScores(answers, questions) {
  return answers.reduce((scores, answer, index) => {
    if (answer === null) return scores;
    scores[questions[index].axis] += answer ? 1 : -1;
    return scores;
  }, { EI: 0, NS: 0, FT: 0, PJ: 0 });
}

export function getMbti(scores, axisLetters) {
  return Object.entries(axisLetters)
    .map(([axis, letters]) => (scores[axis] > 0 ? letters[0] : letters[1]))
    .join("");
}

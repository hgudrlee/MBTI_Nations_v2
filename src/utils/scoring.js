const AXES = Object.freeze(["EI", "NS", "FT", "PJ"]);

const createAxisRecord = (factory) =>
  Object.fromEntries(AXES.map((axis) => [axis, factory(axis)]));

const createScoreState = () =>
  createAxisRecord(() => ({ raw: 0, answered: 0 }));

const isValidAnswer = (answer) => typeof answer === "boolean";

export function getScores(answers = [], questions = []) {
  const state = answers.reduce((scores, answer, index) => {
    const axis = questions[index]?.axis;

    if (!AXES.includes(axis) || !isValidAnswer(answer)) return scores;

    scores[axis].raw += answer ? 1 : -1;
    scores[axis].answered += 1;
    return scores;
  }, createScoreState());

  // Normalize every axis to -1..1 so different question counts are comparable.
  return Object.fromEntries(
    AXES.map((axis) => {
      const { raw, answered } = state[axis];
      return [axis, answered === 0 ? 0 : raw / answered];
    }),
  );
}

export function getMbti(scores = {}, axisLetters = {}) {
  return Object.entries(axisLetters)
    .map(([axis, [positive, negative]]) =>
      scores[axis] > 0 ? positive : negative,
    )
    .join("");
}

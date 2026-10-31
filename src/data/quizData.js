export const questions = [
  { axis: "NS", title: "선교 일정을 계획할 때 나는", choices: [{ label: "새로운 가능성을 따라 유연하게 계획한다", detail: "현장에서 생길 뜻밖의 만남도 기대해요.", positive: true }, { label: "확실한 계획과 가이드라인을 먼저 세운다", detail: "빠짐없이 준비하면 마음이 놓여요.", positive: false }] },
  { axis: "PJ", title: "출발 전날의 나는", choices: [{ label: "누구를 만날지 상상하며 설렌다", detail: "일단 떠나면 길이 보일 거라고 생각해요.", positive: true }, { label: "짐과 일정을 꼼꼼히 다시 확인한다", detail: "작은 변수까지 미리 대비하는 편이에요.", positive: false }] },
  { axis: "NS", title: "전체 일정을 잘 모를 때 나는", choices: [{ label: "큰 흐름과 목적부터 파악한다", detail: "전체 그림을 알아야 움직이기 편해요.", positive: true }, { label: "지금 만나는 사람에게 집중한다", detail: "눈앞의 경험이 가장 중요하다고 느껴요.", positive: false }] },
  { axis: "EI", title: "점심시간인데 아무도 먼저 말하지 않을 때 나는", choices: [{ label: "먼저 말을 꺼내 함께 먹자고 한다", detail: "어색한 침묵보다 함께하는 게 좋아요.", positive: true }, { label: "누군가 말할 때까지 잠시 기다린다", detail: "상황을 살피며 자연스럽게 움직여요.", positive: false }] },
  { axis: "PJ", title: "버스를 놓쳤을 때 나는", choices: [{ label: "괜찮아, 다음 버스를 타면 된다고 생각한다", detail: "계획이 바뀌어도 흐름을 이어가요.", positive: true }, { label: "다음 버스와 이후 일정을 바로 확인한다", detail: "전체 일정에 미칠 영향을 먼저 계산해요.", positive: false }] },
  { axis: "FT", title: "팀의 회계가 재정의 일부를 잃어버렸을 때 나는", choices: [{ label: "담당자의 마음부터 살핀다", detail: "혼자 감당하지 않도록 곁을 지켜줘요.", positive: true }, { label: "재정 계획을 다시 세운다", detail: "문제를 해결할 수 있는 방법을 찾는 게 먼저예요.", positive: false }] },
  { axis: "EI", title: "현지 파티에 초대받았을 때 나는", choices: [{ label: "재밌겠다! 일단 가본다", detail: "새로운 사람과 에너지를 나누는 걸 좋아해요.", positive: true }, { label: "소수의 현지인과 깊이 만나고 싶다", detail: "조용하지만 진짜 연결을 선호해요.", positive: false }] },
  { axis: "EI", title: "현지인을 만났는데 팀원들이 머뭇거릴 때 나는", choices: [{ label: "내가 먼저 다가가 말을 건다", detail: "첫 문을 여는 데 주저하지 않아요.", positive: true }, { label: "팀원들이 먼저 대화를 열길 기다린다", detail: "상대와 팀의 속도를 존중해요.", positive: false }] },
  { axis: "FT", title: "현지인이 자신의 어려움을 털어놓을 때 나는", choices: [{ label: "그 마음을 먼저 공감하고 위로한다", detail: "해결보다 이해가 먼저일 때가 있어요.", positive: true }, { label: "현실적인 방법과 의견을 전한다", detail: "실제로 도움이 될 길을 함께 찾고 싶어요.", positive: false }] },
  { axis: "FT", title: "누군가 복음을 받아들였을 때 나는", choices: [{ label: "그 순간의 감동을 함께 나눈다", detail: "마음으로 느낀 기쁨을 소중히 여겨요.", positive: true }, { label: "앞으로의 현실적인 신앙생활을 생각한다", detail: "지속 가능한 다음 단계를 고민해요.", positive: false }] },
  { axis: "PJ", title: "마지막 날 새로운 장소를 발견했을 때 나는", choices: [{ label: "궁금하니 일단 가서 둘러본다", detail: "새로운 발견은 놓치고 싶지 않아요.", positive: true }, { label: "기존 일정에 무리가 없는지 먼저 본다", detail: "약속한 흐름을 지키는 게 중요해요.", positive: false }] },
  { axis: "NS", title: "선교를 다녀와 간증할 때 나는", choices: [{ label: "전체적으로 느낀 점과 의미를 나눈다", detail: "경험 속에서 큰 메시지를 발견해요.", positive: true }, { label: "하루하루의 경험을 꼼꼼히 전달한다", detail: "구체적인 장면이 이야기를 생생하게 만들어요.", positive: false }] },
];

export const axisLetters = { EI: ["E", "I"], NS: ["N", "S"], FT: ["F", "T"], PJ: ["P", "J"] };
export const nationMap = { ENFJ: "모로코", ENFP: "크림타타르", ENTJ: "쿠르디스탄", ENTP: "시리아", ESFJ: "팔레스타인", ESFP: "위구르", ESTJ: "카슈미르", ESTP: "이집트", INFJ: "사하", INFP: "튀니지", INTJ: "투멘", INTP: "라다크", ISFJ: "오만", ISFP: "카라칼팍", ISTJ: "쿠르디스탄", ISTP: "팔레스타인" };
export const nationNotes = { 모로코: "사람을 연결하고 공동체에 따뜻한 방향을 제시하는 타입", 크림타타르: "새로운 가능성을 사랑하고 자유롭게 길을 만들어가는 타입", 쿠르디스탄: "뚜렷한 목표와 긴 호흡으로 변화를 만들어가는 타입", 시리아: "깊은 맥락을 읽고 세상을 새롭게 해석하는 타입", 팔레스타인: "관계와 연대를 소중히 여기며 곁을 지키는 타입", 위구르: "생생한 경험 속에서 에너지를 얻고 유연하게 움직이는 타입", 카슈미르: "신념을 현실의 행동으로 옮기며 꾸준히 나아가는 타입", 이집트: "호기심과 추진력으로 현장에서 기회를 발견하는 타입", 사하: "깊은 내면과 넓은 시야로 조용한 힘을 발휘하는 타입", 튀니지: "자신만의 가치와 이상을 잃지 않는 섬세한 타입", 투멘: "복잡한 상황을 분석하고 미래의 전략을 세우는 타입", 라다크: "사실과 원리를 탐구하며 자신만의 답을 찾는 타입", 오만: "책임감 있게 사람과 약속을 돌보는 안정적인 타입", 카라칼팍: "자기만의 감각과 진정성을 지키며 살아가는 타입" };

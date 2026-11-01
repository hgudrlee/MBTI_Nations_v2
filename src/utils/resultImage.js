const resultImageUrls = import.meta.glob("../assets/images/results/*_results.png", {
  eager: true,
  query: "?url",
  import: "default",
});

const nationImageSlugs = {
  모로코: "morocco",
  위구르: "uyghur",
  쿠르디스탄: "kurdistan",
  시리아: "syria",
  팔레스타인: "palestine",
  이집트: "egypt",
  튀니지: "tunisia",
  라다크: "ladakh",
  크림타타르: "crimean_tatar",
  투르크메니스탄: "turkmenistan",
  카슈미르: "kashmir",
  오만: "oman",
  카라칼팍: "karakalpak",
  사하: "sakha",
};

export function getResultImage(nation) {
  const slug = nationImageSlugs[nation];
  if (!slug) {
    throw new Error(`No result image is configured for "${nation}".`);
  }

  const path = `../assets/images/results/${slug}_results.png`;
  const url = resultImageUrls[path];
  if (typeof url !== "string") {
    throw new Error(`Result image not found: ${path}`);
  }

  return { fileName: `${slug}_results.png`, url };
}
exports.getModules = (req, res) => {
  res.json({
    career: "Career guidance content",
    roadmaps: "Roadmap content",
    colleges: "College info",
    quiz: "Quiz data",
  });
};
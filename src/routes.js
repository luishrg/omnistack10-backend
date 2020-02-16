const { Router } = require("express");

const routes = Router();

routes.post("/devs", (req, res) => {
  const { github_username } = req.body;
  return res.json({ github_username });
});

module.exports = routes;

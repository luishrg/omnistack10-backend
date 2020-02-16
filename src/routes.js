const { Router } = require("express");

const routes = Router();

routes.post("/devs", (req, res) => {
  return res.json({ body: req.body });
});

module.exports = routes;

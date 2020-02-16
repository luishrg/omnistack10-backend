const { Router } = require("express");
const axios = require("axios");
const DevModel = require("./models/Dev");

const routes = Router();

routes.post("/devs", async (req, res) => {
  const { github_username, techs } = req.body;

  const response = (
    await axios.get(`https://api.github.com/users/${github_username}`)
  ).data;

  const { name = login, avatar_url, bio } = response;

  const techsArray = techs.split(",").map(tech => tech.trim());

  const dev = await DevModel.create({
    github_username,
    name,
    avatar_url,
    bio,
    techs: techsArray
  });

  return res.json(dev);
});

module.exports = routes;

const axios = require("axios");
const DevModel = require("../models/Dev");

module.exports = {
  async list(req, res) {
    const devs = await DevModel.find().lean();

    return res.json({ devs });
  },

  async create(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await DevModel.findOne({ github_username });
    if (!dev) {
      const response = (
        await axios.get(`https://api.github.com/users/${github_username}`)
      ).data;

      const { name = login, avatar_url, bio } = response;

      const techsArray = techs.split(",").map(tech => tech.trim());

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await DevModel.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return res.json(dev);
  }
};

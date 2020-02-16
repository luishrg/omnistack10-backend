const axios = require("axios");
const DevModel = require("../models/Dev");

module.exports = {
  async create(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = DevModel.findOne({ github_username });
    if (!existingDev) {
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

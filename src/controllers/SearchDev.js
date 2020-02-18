const DevModel = require("../models/Dev");
const parseArrayAsString = require("../utils/parseStringAsArray");

module.exports = {
  async search(req, res) {
    const { longitude, latitude, techs } = req.query;

    const query = {
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 1000000
        }
      }
    };

    if (techs) {
      const techsArray = parseArrayAsString(techs);
      query["techs"] = {
        $in: techsArray
      };
    }

    const devs = await DevModel.find(query);

    return res.json({ devs });
  }
};

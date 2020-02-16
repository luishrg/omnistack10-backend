const { Schema, model } = require("mongoose");

const DevSchema = new Schema(
  {
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Dev", DevSchema);

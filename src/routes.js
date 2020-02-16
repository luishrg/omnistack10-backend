const { Router } = require("express");
const DevController = require("./controllers/Dev");

const routes = Router();

routes.get("/devs", DevController.list);
routes.post("/devs", DevController.create);

module.exports = routes;

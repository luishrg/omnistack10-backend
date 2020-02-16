const { Router } = require("express");
const DevController = require("./controllers/Dev");
const SearchDevController = require("./controllers/SearchDev");

const routes = Router();

routes.get("/devs", DevController.list);
routes.post("/devs", DevController.create);
routes.get("/devs/search", SearchDevController.search);

module.exports = routes;

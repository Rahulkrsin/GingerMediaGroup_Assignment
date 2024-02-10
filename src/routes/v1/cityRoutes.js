const express = require("express");
const { CityController } = require("../../controllers");
const cityRouter = express.Router();

const cityController = new CityController();
cityRouter.get("/", cityController.getAll);
cityRouter.get("/:id", cityController.get);
cityRouter.post("/", cityController.create);
cityRouter.patch("/:id", cityController.update);
cityRouter.delete("/:id", cityController.deleteCity);
cityRouter.get("/:id/airports", cityController.getAllAirportInCity);

module.exports = cityRouter;

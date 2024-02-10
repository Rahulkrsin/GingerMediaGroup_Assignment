const express = require("express");
const { AirportController } = require("../../controllers");
const airportRouter = express.Router();

const airportController = new AirportController();
airportRouter.get("/", airportController.getAll);
airportRouter.get("/:id", airportController.get);
airportRouter.post("/", airportController.create);
airportRouter.post("/all", airportController.createMultiple);
airportRouter.patch("/:id", airportController.update);
airportRouter.delete("/:id", airportController.deleteAirport);

module.exports = airportRouter;

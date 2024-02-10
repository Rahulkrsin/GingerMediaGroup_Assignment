const { AirportService } = require("../services");

const airportService = new AirportService();

class AirportController {
  async create(req, res) {
    try {
      const airport = await airportService.createAirport(req.body);
      res.status(201).json({
        data: airport,
        message: "sucessfully created the airport",
        success: true,
        error: {},
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }
  async createMultiple(req, res) {
    try {
      const airport = await airportService.createMultipleAirport(req.body);
      res.status(201).json({
        data: airport,
        message: "sucessfully created the airport",
        success: true,
        error: {},
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }

  async get(req, res) {
    try {
      const airport = await airportService.getAirport(req.params.id);

      res.status(200).json({
        data: airport,
        message: "sucessfully fetched the airport",
        success: true,
        error: {},
      });
    } catch (error) {
      res.status(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: {},
      });
    }
  }
  async getAll(req, res) {
    try {
      const airport = await airportService.getAllAirport(req.query);

      res.status(200).json({
        data: airport,
        message: "sucessfully fetched all the airport",
        success: true,
        error: {},
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: {},
      });
    }
  }

  async update(req, res) {
    const airportId = req.params.id;
    const { name, address } = req.body;
    try {
      const airport = await airportService.updateAirport({
        airportId,
        name,
        address,
      });
      res.status(201).json({
        data: airport,
        message: "sucessfully updated the airport",
        success: true,
        error: {},
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }

  async deleteAirport(req, res) {
    const airportId = req.params.id;
    try {
      const airport = await airportService.deleteAirport(airportId);
      res.status(201).json({
        data: airport,
        message: "sucessfully deleted Airport",
        success: true,
        error: {},
      });
    } catch (error) {
      res.json(400).json({
        data: {},
        message: "something went wrong ",
        success: false,
        error: error.message,
      });
    }
  }
}

module.exports = AirportController;

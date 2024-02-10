const { CityService } = require("../services");

const cityService = new CityService();

class CityController {
  async create(req, res) {
    try {
      const city = await cityService.createCity(req.body);
      res.status(201).json({
        data: city,
        message: "sucessfully created the city",
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
      const city = await cityService.getCity(req.params.id);

      res.status(200).json({
        data: city,
        message: "sucessfully fetched the city",
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
      const city = await cityService.getAllCity(req.query);

      res.status(200).json({
        data: city,
        message: "sucessfully fetched all the city",
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
    const cityId = req.params.id;
    const name = req.body.name;
    try {
      const city = await cityService.updateCity({ cityId, name });
      res.status(201).json({
        data: city,
        message: "sucessfully updated the city",
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

  async deleteCity(req, res) {
    const cityId = req.params.id;
    try {
      const city = await cityService.deleteCity(cityId);
      res.status(201).json({
        data: city,
        message: "sucessfully deleted the city",
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
  async getAllAirportInCity(req, res) {
    const cityId = req.params.id;
    try {
      const city = await cityService.getAllAirport(cityId);
      res.status(201).json({
        data: city,
        message: "sucessfully get all airport in this city",
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

module.exports = CityController;

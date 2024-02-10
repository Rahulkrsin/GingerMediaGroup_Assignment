const { City, Airport } = require("../models/index");

class AirportRepository {
  async createAirport({ name, address, cityId }) {
    try {
      const airport = await Airport.create({ name, address, cityId });
      return airport;
    } catch (error) {
      return { error };
    }
  }

  async createMultipleAirport(data) {
    try {
      const airport = await Airport.bulkCreate(data);
      return airport;
    } catch (error) {
      return { error };
    }
  }

  async getAirport(airportId) {
    try {
      const airport = await Airport.findByPk(airportId);
      return airport;
    } catch (error) {
      throw { error };
    }
  }
  async getAllAirport() {
    try {
      const airport = await Airport.findAll();
      return airport;
    } catch (error) {
      throw { error };
    }
  }
  async updateAirport(airportId, name, address) {
    try {
      const airport = await Airport.findByPk(airportId);
      if (name) {
        airport.name = name;
      }
      if (address) {
        airport.address = address;
      }
      await airport.save();

      return airport;
    } catch (error) {
      throw { error };
    }
  }

  async deleteAirport(airportId) {
    try {
      await Airport.destroy({
        where: {
          id: airportId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = AirportRepository;

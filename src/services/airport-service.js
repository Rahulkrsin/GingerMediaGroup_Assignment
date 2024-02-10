const { AirportRepository } = require("../repository");

class AirportService {
  constructor() {
    this.airportRepository = new AirportRepository();
  }

  async createAirport({ name, address, cityId }) {
    try {
      const airport = await this.airportRepository.createAirport({
        name,
        address,
        cityId,
      });
      return airport;
    } catch (error) {
      throw { error };
    }
  }
  async createMultipleAirport(data) {
    try {
      const airport = await this.airportRepository.createMultipleAirport(data);
      return airport;
    } catch (error) {
      throw { error };
    }
  }

  async getAirport(airportId) {
    const airport = await this.airportRepository.getAirport(airportId);
    return airport;
    try {
    } catch (error) {
      throw { error };
    }
  }
  async getAllAirport(filter) {
    try {
      const airport = await this.airportRepository.getAllAirport(filter);
      return airport;
    } catch (error) {
      throw { error };
    }
  }
  async deleteAirport(airportId) {
    const response = await this.airportRepository.deleteAirport(airportId);
    return response;
    try {
    } catch (error) {
      throw { error };
    }
  }
  async updateAirport({ airportId, name, address }) {
    const airport = await this.airportRepository.updateAirport(
      airportId,
      name,
      address
    );
    return airport;
    try {
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = AirportService;

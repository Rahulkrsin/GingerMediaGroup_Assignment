const { CityRepository } = require("../repository");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity({ name }) {
    try {
      const city = await this.cityRepository.createCity({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const response = await this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      throw { error };
    }
  }
  async updateCity({ cityId, name }) {
    try {
      const city = await this.cityRepository.updateCity(cityId, name);
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = await this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async getAllCity(filter) {
    try {
      const city = await this.cityRepository.getAllCity(filter);
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async getAllCity(filter) {
    const city = await this.cityRepository.getAllCity(filter);
    return city;
    try {
    } catch (error) {
      throw { error };
    }
  }
  async getAllAirport(cityId) {
    const city = await this.cityRepository.getAllAirport(cityId);
    return city;
    try {
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityService;

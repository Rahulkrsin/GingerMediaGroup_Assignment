const { Op } = require("sequelize");
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      throw { error };
    }
  }
  async updateCity(cityId, name) {
    try {
      const city = await City.findByPk(cityId);
      city.name = name;
      await city.save();

      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCity(filter) {
    try {
      if (filter.name) {
        console.log(filter);
        const city = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return city;
      }

      const city = await City.findAll();
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async getAllAirport(cityId) {
    try {
      const city = await City.findOne({
        where: {
          id: cityId,
        },
      });
      const airports = await city.getAirports();

      return airports;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;

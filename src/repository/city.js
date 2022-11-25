const { City } = require("../models");

class cityRepository {
  constructor() {
    this.CityModel = City;
  }

  async getAllCity(filter) {
    const result = await this.CityModel.findAll(filter);
    return result;
  }

  async getCityById(id) {
    const result = await this.CityModel.findByPk(id);
    return result;
  }

  async createCity(data) {
    const result = await this.CityModel.create(data);
    return result;
  }

  async updateCity(data, id) {
    const result = await this.CityModel.update(data, {
      where: { id },
    });

    return result;
  }

  async deleteCity(id) {
    const result = await this.CityModel.destroy({
      where: { id },
    });
    return result;
  }
}

module.exports = cityRepository;

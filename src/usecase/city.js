class cityUseCase {
  constructor(cityRepository) {
    this.cityRepository = cityRepository;
  }

  async getAllCity(filter) {
    let result = {
      isSuccess: true,
      statusCode: 200,
      data: [],
    };

    const data = await this.cityRepository.getAllCity(filter);

    result.data = data;
    return result;
  }

  async getUserById(id) {
    const result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const data = await this.cityRepository.getCityById(id);
    if (data === null) {
      result.reason = "user not found";
      return result;
    }

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = result;

    return result;
  }

  async createCity(createData) {
    const result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const data = await this.cityRepository.createCity(createData);

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = data;

    return result;
  }

  async updateCity(updateData, id) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };
    const city = await this.cityRepository.getCityById(id);
    if (city === null) {
      result.reason = "city not found";
    }

    await this.cityRepository.updateCity(updateData, id);

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = result;
    return result;
  }

  async deleteCity(id) {
    const result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const city = await this.cityRepository.getCityById(id);
    if (city === null) {
      result.reason = "city not found";
    }

    await this.cityRepository.deleteCity(id);

    result.isSuccess = true;
    result.statusCode = 200;

    return result;
  }
}

module.exports = cityUseCase;

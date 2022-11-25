class userUseCase {
  constructor(userRepository, urlFotoRepository) {
    this.userRepository = userRepository;
    this.urlFotoRepository = urlFotoRepository;
  }

  async getAllUser(filter) {
    let result = {
      isSuccess: true,
      statusCode: 200,
      data: [],
    };

    const userResult = await this.userRepository.getAllUser(filter);

    result.data = userResult;
    return result;
  }

  async getUserById(id) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const userResult = await this.userRepository.getUserById(id);
    if (userResult === null) {
      result.reason = "user not found";
      return result;
    }

    const urlFoto = await this.urlFotoRepository.getFotoByUserId(id);
    const neWuser = {
      id: userResult.id,
      name: userResult.name,
      birth: userResult.birth,
      age: userResult.age,
      phone: userResult.phone,
      city: userResult.city,
      educationLevel: userResult.educationLevel,
      urlFotoId: urlFoto.id,
      urlFoto,
    };

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = neWuser;
    return result;
  }

  async createUser(userData) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

    const getAge = Math.floor(new Date() - new Date(userData.birth).getTime());
    const newAge = getAge / 31556926000;
    userData.age = Math.floor(newAge);

    const userResult = await this.userRepository.createUser(userData);

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = userResult;
    return result;
  }

  async updateUser(userData, id) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
    };
    const getUser = await this.userRepository.getUserById(id);
    if (getUser === null) {
      result.reason = "user not found";
      return result;
    }

    await this.userRepository.updateUser(userData, id);

    result.isSuccess = true;
    result.statusCode = 200;
    return result;
  }

  async deleteUser(id) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };
    const getUser = await this.userRepository.getUserById(id);
    if (getUser === null) {
      result.reason = "user not found";
    }

    await this.userRepository.deleteUser(id);

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = userResult;
    return result;
  }

  async getAge(birthDate) {
    await Math.floor(new Date() - new Date(birthDate).getTime());
  }
}

module.exports = userUseCase;

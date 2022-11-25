const { City, Media } = require("../models");
class userUseCase {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAllUser(filter) {
    let result = {
      isSuccess: true,
      statusCode: 200,
      data: [],
    };

    const userResult = await this.userRepository.getAllUser({
      where: filter,
      include: [
        {
          model: City,
          as: "city",
        },
        {
          model: Media,
          as: "photo",
        },
      ],
    });

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

    const userResult = await this.userRepository.getUserById(id, {
      include: [
        {
          model: City,
          as: "city",
        },
        {
          model: Media,
          as: "photo",
        },
      ],
    });

    if (userResult === null) {
      result.reason = "user not found";
      return result;
    }
    result.isSuccess = true;
    result.statusCode = 200;
    result.data = userResult;
    return result;
  }

  async createUser(userData) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };

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
      data: null,
    };
    const getUser = await this.userRepository.getUserById(id);
    if (getUser === null) {
      result.reason = "user not found";
    }

    await this.userRepository.updateUser(userData, id);

    const updatedUser = await this.userRepository.getUserById(id);

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = updatedUser;
    return result;
  }

  async deleteUser(userData, id) {
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

    await this.userRepository.deleteUser(userData, id);

    result.isSuccess = true;
    result.statusCode = 200;
    return result;
  }
}

module.exports = userUseCase;

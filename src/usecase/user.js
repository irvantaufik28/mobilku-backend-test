class userUseCase {
  constructor(userRepository, func) {
    this.userRepository = userRepository;
    this.func = func;
  }

  async getAllUser() {
    let result = {
      isSuccess: true,
      statusCode: 200,
      data: [],
    };

    const userResult = await this.userRepository.getAllUser();

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

    const userAge = this.func.getAge(userData.dateOfBirth);
    userData.age = userAge;
    const userResult = await this.userRepository.createUser(userData);

    result.isSuccess = true;
    result.statusCode = 200;
    result.data = userResult;
    return result;
  }

  async updateUser(userData, name) {
    let result = {
      isSuccess: false,
      statusCode: 404,
      reason: null,
      data: null,
    };
    const getUser = await this.userRepository.getUserById(name);
    if (getUser === null) {
      result.reason = "user not found";
    }
    const userAge = this.func.getAge(userData.dateOfBirth);
    userData.age = userAge;

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

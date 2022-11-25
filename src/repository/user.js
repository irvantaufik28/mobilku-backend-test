const { User } = require("../models");

class userRepository {
  constructor() {
    this.UserModel = User;
  }

  async getAllUser(filter) {
    const result = await this.UserModel.findAll(filter);
    return result;
  }

  async getUserById(id) {
    const result = await this.UserModel.findOne({
      where: { id },
    });
    return result;
  }

  async createUser(data) {
    const result = await this.UserModel.create(data);
    return result;
  }

  async updateUser(data, id) {
    const result = await this.UserModel.update(data, {
      where: { id },
    });

    return result;
  }
}

module.exports = userRepository;

const { User } = require("../models");

class userRepository {
  constructor() {
    this.UserModel = User;
  }

  async getAllUser(options) {
    const result = await this.UserModel.findAll(options);
    return result;
  }

  async getUserById(id, options) {
    const result = await this.UserModel.findByPk(id, options);
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

  async deleteUser(id) {
    const result = await this.UserModel.destroy({
      where: { id },
    });
    return result;
  }
}

module.exports = userRepository;

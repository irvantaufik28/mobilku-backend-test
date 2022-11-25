const { UrlFoto } = require("../models");

class userRepository {
  constructor() {
    this.UrlFotoModel = UrlFoto;
  }

  async getFotoByUserId(userId) {
    const result = await this.UrlFotoModel.findAll({
      where: { userId },
    });
    return result;
  }

  async createUrlFoto(data) {
    const result = await this.UrlFotoModel.create(data);
    return result;
  }

  async deleteUrlFoto(id) {
    const result = await this.UrlFotoModel.destroy({
      where: { id },
    });
    return result;
  }
}

module.exports = userRepository;

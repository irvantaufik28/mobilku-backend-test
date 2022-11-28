const { User, City , Media} = require("../models");

class userRepository {
  constructor() {
    this.UserModel = User;
    this.CityModel = City;
    this.MediaModel = Media;
  }

  async getAllUser() {
    const result = await this.UserModel.findAll({
      where: filter,
      include: [
        {
          model: this.CityModel,
          as: "city",
        },
        {
          model: this.MediaModel,
          as: "photo",
        },
      ],
    });
    return result;
  }

  async getUserById(id) {
    const result = await this.UserModel.findByPk(id,{
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
    return result;
  }

  async createUser(data) {
    const result = await this.UserModel.create(data);
    return result;
  }

  async updateUser(data, name) {
    const result = await this.UserModel.update(data, {
      where: { name },
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

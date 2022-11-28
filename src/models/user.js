"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.City, { foreignKey: "cityId", as: "city" });
      this.belongsTo(models.Media, { foreignKey: "photoId", as: "photo" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      age: DataTypes.STRING,
      whatsapp: DataTypes.STRING,
      cityId: DataTypes.INTEGER,
      photoId: DataTypes.INTEGER,
      education: DataTypes.STRING,
      usia: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.age
        },
      },
      mobile: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.whatsapp
        },
      },
      date: {
        type: DataTypes.VIRTUAL,
        get() {
          return this.dateOfBirth
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
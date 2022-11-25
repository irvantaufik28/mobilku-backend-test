const resData = require("../helpers/response");
const helper = require("../helpers");

module.exports = {
  getUserById: async (req, res, next) => {
    try {
      let { id } = req.params;
      let user = await req.userUC.getUserById(id);
      if (!user.isSuccess) {
        return res.status(user.statusCode).json(resData.failed(user.reason));
      }
      res.status(user.statusCode).json(resData.success(user.data));
    } catch (e) {
      next(e);
    }
  },

  getAllUser: async (req, res, next) => {
    try {
      let user = await req.userUC.getAllUser();
      if (!user.isSuccess) {
        return res.status(user.statusCode).json(resData.failed(user.reason));
      }
      res.status(user.statusCode).json(resData.success(user.data));
    } catch (e) {
      next(e);
    }
  },

  createUser: async (req, res, next) => {
    try {
      const payload = req.body;

      const dateOfBirth = payload.dateOfBirth ? new Date(payload.dateOfBirth) : null;
      const age = dateOfBirth ? helper.getAge(new Date(payload.dateOfBirth)) : null;
      const userData = {
        name: payload.name,
        dateOfBirth,
        age,
        whatsapp: payload.whatsapp,
        cityId: payload.cityId,
        education: payload.education,
        photoId: payload.photoId ?? null,
      };

      const user = await req.userUC.createUser(userData);

      if (!user.isSuccess) {
        return res.status(user.statusCode).json(resData.failed(user.reason));
      }
      res.status(user.statusCode).json(resData.success(user.data));
    } catch (e) {
      next(e);
    }
  },

  updateUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload = req.body;

      const dateOfBirth = payload.dateOfBirth ? new Date(payload.dateOfBirth) : null;
      const age = dateOfBirth ? helper.getAge(new Date(payload.dateOfBirth)) : null;

      if (age) payload.age = age;

      const user = await req.userUC.updateUser(payload, id);
      if (!user.isSuccess) {
        return res.status(user.statusCode).json(resData.failed(user.reason));
      }

      res.status(user.statusCode).json(resData.success(user.data));
    } catch (e) {
      next(e);
    }
  },
};

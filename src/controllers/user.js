const resData = require("../helpers/response");

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
      const userData = {
        name: req.body.name,
        dateOfBirth: new Date(req.body.dateOfBirth),
        age: null,
        whatsapp: req.body.whatsapp,
        cityId: req.body.cityId,
        education: req.body.education,
        photoId: req.body.photoId ?? null,
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
      const userData = {
        name: req.body.name,
        dateOfBirth: new Date(req.body.dateOfBirth),
        age: null,
        whatsapp: req.body.whatsapp,
        cityId: req.body.cityId,
        education: req.body.education,
        photoId: req.body.photoId ?? null,
      };

      
      const user = await req.userUC.updateUser(userData, id);
      if (!user.isSuccess) {
        return res.status(user.statusCode).json(resData.failed(user.reason));
      }

      res.status(user.statusCode).json(resData.success(user.data));
    } catch (e) {
      next(e);
    }
  },
};

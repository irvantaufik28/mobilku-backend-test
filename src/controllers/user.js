const resData = require("../helpers/response");

module.exports = {
  getUserById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await req.userUC.getUserById(id);
      const user = response.data;

      if (!response.isSuccess) {
        return res.status(response.statusCode).json(resData.failed(response.reason));
      }

      if (user.city) {
        user.setDataValue("city", user.city.name);
      }

      if (user.photo) {
        user.setDataValue("image1", user.photo.smallUrl);
        user.setDataValue("image2", user.photo.largeUrl);
      }

      res.status(response.statusCode).json(resData.success(user));
    } catch (e) {
      next(e);
    }
  },

  getAllUser: async (req, res, next) => {
    try {
      const response = await req.userUC.getAllUser();
      const lists = response.data.map((user) => {
        if (user.city) {
          user.setDataValue("city", user.city.name);
        }

        if (user.photo) {
          user.setDataValue("image1", user.photo.smallUrl);
          user.setDataValue("image2", user.photo.largeUrl);
        }

        return user;
      });

      if (!response.isSuccess) {
        return res.status(response.statusCode).json(resData.failed(response.reason));
      }
      res.status(response.statusCode).json(lists);
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
  getUserByIdTesting: async (req, res, next) => {
    try {
      const { id } = req.params;
      const response = await req.userUC.getUserById(id);
      const user = response.data;

      if (user.city) {
        user.setDataValue("city", user.city.name);
      }

      if (user.photo) {
        user.setDataValue("image1", user.photo.smallUrl);
        user.setDataValue("image2", user.photo.largeUrl);
      }

      res.status(response.statusCode).json(resData.success(user));
    } catch (e) {
      next(e);
    }
  },
};

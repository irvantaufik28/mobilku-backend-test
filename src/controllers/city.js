const resData = require("../helpers/response");

module.exports = {
  getCityById: async (req, res, next) => {
    try {
      let { id } = req.params;
      const city = await req.cityUC.getCityById(id);
      if (!city.isSuccess) {
        return res.status(city.statusCode).json(resData.failed(city.reason));
      }
      res.status(city.statusCode).json(resData.success(city.data));
    } catch (e) {
      next(e);
    }
  },

  getAllCity: async (req, res, next) => {
    try {
      const city = await req.cityUC.getAllCity();
      if (!city.isSuccess) {
        return res.status(city.statusCode).json(resData.failed(city.reason));
      }
      res.status(city.statusCode).json(resData.success(city.data));
    } catch (e) {
      next(e);
    }
  },

  createCity: async (req, res, next) => {
    try {
      const payload = req.body;
      const cityData = {
        name: payload.name,
      };

      const city = await req.cityUC.createCity(cityData);

      if (!city.isSuccess) {
        return res.status(city.statusCode).json(resData.failed(city.reason));
      }
      res.status(city.statusCode).json(resData.success(city.data));
    } catch (e) {
      next(e);
    }
  },

  updateCity: async (req, res, next) => {
    try {
      const { id } = req.params;
      const payload = req.body;
      const cityData = {
        name: payload.name,
      };

      const city = await req.cityUC.updateCity(cityData, id);
      if (!city.isSuccess) {
        return res.status(city.statusCode).json(resData.failed(city.reason));
      }
      res.status(city.statusCode).json(resData.success());
    } catch (e) {
      next(e);
    }
  },
};

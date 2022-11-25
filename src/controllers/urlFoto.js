const resData = require("../helper/response");

module.exports = {
  urlFotoCreate: async (req, res, next) => {
    try {
     
        const dataImage = {
            userId: req.body.userId,
            url: req.file.filename
        }

      const result = await req.urlFotoUC.urlFotoCreate(dataImage);

      if (!result.isSuccess) {
        return res
          .status(result.statusCode)
          .json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
};

const resData = require("../helpers/response");

module.exports = {
  upload: async (req, res, next) => {
    try {
      const result = await req.mediaUC.upload(req.file);

      if (!result.isSuccess) {
        return res.status(result.statusCode).json(resData.failed(result.reason));
      }

      return res.status(result.statusCode).json(resData.success(result.data));
    } catch (error) {
      next(error);
    }
  },
};

const express = require("express");
const rootRouter = express.Router();

const user = require("./user");
const city = require("./city");
const media = require("./media");

rootRouter.use("/user", user);
rootRouter.use("/city", city);
rootRouter.use("/media", media);

module.exports = rootRouter;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const serverError = require("./middlerware/serverError");

const rootRouter = require("./routes/index");
const userRepository = require("../src/repository/user");
const cityRepository = require("../src/repository/city");
const mediaRepository = require("../src/repository/media");

const userUseCase = require("../src/usecase/user");
const cityUseCase = require("../src/usecase/city");
const mediaUseCase = require("../src/usecase/media");

const userUC = new userUseCase(new userRepository());
const cityUC = new cityUseCase(new cityRepository());
const mediaUC = new mediaUseCase(new mediaRepository());

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
  req.userUC = userUC;
  req.cityUC = cityUC;
  req.mediaUC = mediaUC;
  next();
});

app.get("/", (req, res) => {
  res.json("welcome to mobilkita.com");
});

app.use("/api/v1", rootRouter);
app.use("/uploads", express.static("public/uploads"));

app.use(serverError);

module.exports = app;

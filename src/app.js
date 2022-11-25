const express = require("express");

const app = express();
const cors = require("cors");
const morgan = require("morgan")
const serverError = require("./middlerware/serverError");

const userRouter = require("../src/routes/user");
const urlFotoRouter = require("../src/routes/urlFoto");

const userRepository = require("../src/repository/user");
const urlFotoRepository = require("../src/repository/urlFoto");
const userUseCase = require("../src/usecase/user");
const urlFotoUseCase = require("../src/usecase/urlFoto");

const userUC = new userUseCase(new userRepository(), new urlFotoRepository());
const urlFotoUC = new urlFotoUseCase(new urlFotoRepository(), new userRepository());

app.use((req, res, next) => {
  req.userUC = userUC;
  req.urlFotoUC = urlFotoUC;
  next();
});

app.use(cors());
app.use(express.json());
app.use(morgan("combined"))
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json("welcome to mobilkita.com");
});

app.use("/api/v1", userRouter);
app.use("/api/v1", urlFotoRouter );

app.use(serverError);
module.exports = app;

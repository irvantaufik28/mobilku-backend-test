const express = require("express");
const router = express.Router();

const cityController = require("../controllers/city");

router.get("/", cityController.getAllCity);
router.get(":id", cityController.getCityById);
router.post("/", cityController.createCity);
router.put(":id", cityController.updateCity);

module.exports = router;

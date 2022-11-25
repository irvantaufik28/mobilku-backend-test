const express = require("express");
const router = express.Router();

const multer = require("multer");
const storage = require("../config/upload-config");
const upload = multer(storage);

const mediaController = require("../controllers/media");

router.post("/upload", upload.single("image"), mediaController.upload);

module.exports = router;

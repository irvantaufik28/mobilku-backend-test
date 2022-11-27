const express = require("express");
const router = express.Router();


const upload = require("../../libs/mediaHandler");


const mediaController = require("../controllers/media");

router.post("/upload", upload.single("image"), mediaController.upload);

module.exports = router;

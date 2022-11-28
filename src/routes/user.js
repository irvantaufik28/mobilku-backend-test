const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/", userController.getAllUser);
router.get("/:id", userController.getUserById);
router.get("/:id/testing", userController.getUserByIdTesting);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);

module.exports = router;
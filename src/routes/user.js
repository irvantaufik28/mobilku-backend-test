const express = require('express')
const router = express.Router()

const userController = require('../controllers/user')

router.get('/user', userController.getAllUser)
router.get('/user/:id', userController.getUserById)
router.post('/user', userController.createUser)
router.put('/user/:id', userController.updateUser)

module.exports = router;

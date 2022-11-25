const express = require('express')
const router = express.Router()

const urlFoto = require('../controllers/urlFoto')
const mediahandler = require('../libs/mediahandler')

router.post('/urlfoto', mediahandler.single('url'), urlFoto.urlFotoCreate)

module.exports = router;

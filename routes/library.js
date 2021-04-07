const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const axios = require('axios')

//Get - /library show all boooks to the user
router.get('/', function(req, res) {
  res.send('library page')
})

//POST /library save a book to the library
router.post('/', function(req, res) {
  res.redirect('/library')
})


module.exports = router;
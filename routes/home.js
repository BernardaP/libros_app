const express = require('express')
const router = express.Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const axios = require('axios')

//Routes
//GET - / 
router.get('/', function(req, res) {
  axios.get(process.env.API_URL, { 
    params: {
      q: req.query.title || "the institute"
    }
  })
  .then(function(apiResponse) {
    const books = apiResponse.data;
    console.log(books)
    res.render('home', { books: books.items });
  })
  .catch(function(error){
    console.log(error)
    res.send('Error!')
  })
});





module.exports = router;
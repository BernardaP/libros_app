const express = require('express')
const router = express.Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const axios = require('axios')

//Routes
//GET - / 
router.get('/', function(req, res) {
  console.log(req.query)
  // const search_term = "Double cross"
  const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
  // Use request to call the API
  axios.get(apiUrl, { 
    params: {
      q: req.query.title || "Double cross"
    }

  })
  .then(function(apiResponse) {
    const books = apiResponse.data;
    console.log(books)
    // res.send('done')
    res.render('home', { books: books.items });

  })
  .catch(function(error){
      console.log(error)
      res.send('Error!')
  })
});





module.exports = router;
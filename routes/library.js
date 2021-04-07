const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const axios = require('axios')

//Get - /library show all boooks to the user
router.get('/', function(req, res) {
  //find all the books in db
  db.book.findAll()
    .then((foundBooks) => {
      console.log("+++++++",foundBooks)
       //render the view and pass the found books
      res.render('library/index.ejs', {books: foundBooks})
  })
  
 
 
})

//POST /library save a book to the library
router.post('/', function(req, res) {
  //check the contents of body
  // console.log(req.body)
  //call database and add a book via find or create
  db.book.findOrCreate({
    where: {
      isbn: req.body.isbn,
      
    },
    defaults: {
      title: req.body.title
    }

  }).then(([book, created]) => {
    res.redirect('/library')

  })
})


module.exports = router;
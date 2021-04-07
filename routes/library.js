const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const axios = require('axios')
const { route } = require('./home')

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

//GET -/library/:id
//show detail info of a book
router.get('/:id', function(req, res) {
  db.book.findByPk(req.params.id)
  .then((foundBook)=> {
    res.render('library/show.ejs', { book: foundBook})
  })
  .catch(function(error){
    console.log(error)
    res.send('Error!')
  })
})




//POST /library save a book to the library
router.post('/', function(req, res) {
  //check the contents of body
  // console.log(req.body)
  //call database and add a book via find or create
  db.book.findOrCreate({
    where: {
      title: req.body.title,
      image: req.body.image,
      description: req.body.description
    },
    defaults: {
      isbn: req.body.isbn
    }

  }).then(([book, created]) => {
    res.redirect('/library')

  })
  .catch(function(error){
    console.log(error)
    res.send('Error!')
  })
})


module.exports = router;
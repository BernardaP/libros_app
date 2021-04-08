const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const { route } = require('./home')


//POST - / to create a review
// router.post('/', function(req, res) {
//   //find all the books in db
//   db.book.findOrCreate()
//     .then((foundBooks) => {
//       // console.log("+++++++",foundBooks)
//        //render the view and pass the found books
//       res.render('library/index.ejs', {books: foundBooks})
//   })
 
// })


module.exports = router;
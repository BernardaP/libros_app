const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const { route } = require('./home')

//GET / show the review info to user
router.get('/', function(req, res) {
  db.book.findOne({
    where: {
      id: req.params.id
    }
  }).then((book) => {
    book.getLibraries().then(function(libraries){
      res.render(`library/${req.body.bookId}`, { book: book, library: libraries })
    })
    
  })
  .catch(function(error){
    console.log(error)
    res.send('Error!!!')
  })
})


// router.get('/', function(req, res) {
//   db.book.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then((book) => {
//     db.library.findOne({
//       where: { id: req.user.id },
      
//     }).then((library) => {
//       console.log("----&&&&&&&&&&",library)
//       res.render(`library/${req.body.bookId}`, { book: book, library: library })
//     })
//   })
//   .catch(function(error){
//     console.log(error)
//     res.send('Error!!!')
//   })
// })



//POST - / to save a review
router.post('/:id', function(req, res) {
  
  let completed

  if (req.body.completed === undefined) {
    completed = false
  } else {
    completed = req.body.completed
  }

  // if (!req.body.loanedDate){
  //   console.log("THERE IS NOT DATES")
  // }
  // console.log("here$$$$$$$",req.body.loanedDate)
  let loanedDate
  if ( !req.body.loanedDate) {
    loanedDate = null
  } else {
    loanedDate = req.body.loanedDate
  }

  db.book.findOne({
    where: {
      
      id: req.params.id
    }
    
    

  }).then(function (book) {
    console.log("----&&&&&&&&&&",book)
    book.update({
      comments: req.body.bookreview,
      completed: completed,
      rating: req.body.rating,
      loaned: req.body.loaned,
      loanedDate: loanedDate
    })
    res.redirect(`/library/${req.body.bookId}`)
  })
  .catch(function(error){
    console.log(error)
    res.send('Error ;(!')
  })
})

module.exports = router;
const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const { route } = require('./home')



//POST - / to save and display a review
router.post('/:id', function(req, res) {
  
  let completed
  if (req.body.completed === undefined) {
    completed = false
  } else {
    completed = req.body.completed
  }

  
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
    req.flash('error', error.message)
    res.send('Error ;(!')
  })
})

module.exports = router;
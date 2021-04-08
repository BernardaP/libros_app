const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const { route } = require('./home')

//GET / show the review info to user




//POST - / to save a review
router.post('/', function(req, res) {
  //check the contents of body
  // console.log(req.body)
  
  //call database and add a book-review via find or create
  let completed

  if (req.body.completed === undefined) {
    completed = false
  } else {
    completed = req.body.completed
  }

  db.library.findOrCreate({
    where: {
      comments: req.body.bookreview,
      completed: completed,
      rating: req.body.rating,

    },
    defaults: {
      userId: req.user.id
    },
    include: [ db.book ]

  }).then(function ([library, created]) {
    console.log("----&&&&&&&&&&",library)
    res.redirect(`/library/${req.body.bookId}`)
  })
  .catch(function(error){
    console.log(error)
    res.send('Error ;(!')
  })
})

module.exports = router;
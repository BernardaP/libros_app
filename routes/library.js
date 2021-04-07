const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const axios = require('axios')
const { route } = require('./home')

//Get - /library show all books added to library 
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
// router.get('/:id', function(req, res) {
//   db.book.findByPk(req.params.id)
//   .then((foundBook)=> {
//     res.render('library/show.ejs', { book: foundBook})
//   })
//   .catch(function(error){
//     console.log(error)
//     res.send('Error!')
//   })
// })
router.get('/:id', function(req, res) {
  db.book.findOne({
    where: {
      id: req.params.id
    },
    include: [db.author]
  })
  .then((foundBook) => {
    if (!foundBook) throw Error()
    console.log("===------+++", foundBook)
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

  }).then(function ([book, created]) {
    // console.log("%%%%%%%%%%%%%",book)
    db.author.findOrCreate({
      where: {
        firstName: req.body.author
      }
    }).then(function([author, created]) {
      console.log("%%%%%%%%%%%%%",author)
      author.addBook(book).then(function(relationInfo){ 
      // book.addAuthor(author.id).then(function(relationInfo){ 
        console.log('===========AUTHOR', author.firstName, "added to ", book.title)
      })

    })
    res.redirect('/library')

  })
  .catch(function(error){
    console.log(error)
    res.send('Error!')
  })
})


// POST - delete a book from library
router.delete('/:id', function(req, res) {
  db.book.destroy({
    where: {id: req.params.id}
  }).then(function(){
    res.redirect('/library')
  })
})

module.exports = router;
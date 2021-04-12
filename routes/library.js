const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const axios = require('axios')
const { route } = require('./home')

//Get - /library show all books added to library 
router.get('/', function(req, res) {
  db.user.findOne({
    where: {
      id: req.user.id
    },
    include: {
      model: db.book, include: [db.author]
    } 
  }).then((user)=> {
    res.render('library/index.ejs', { user: user })
  })
  .catch(function(error){
    req.flash('error', error.message)
    res.send('Error!')
  })
})

//GET -/library/:id
//show detail info of a book
router.get('/:id', function(req, res) {
  db.book.findOne({
    where: {
      id: req.params.id
    },
    include: [db.author ]
  })
  .then((foundBook) => {
    if (!foundBook) throw Error()
    res.render('library/show.ejs', { book: foundBook})
  })
  .catch(function(error){
    req.flash('error', error.message)
    res.send('Error!')
  })
})



//POST /library save a book to the library
router.post('/', async function(req, res) {
 
  try {
    const [book] = await db.book.findOrCreate({
      where: {
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
      },
      defaults: {
        isbn: req.body.isbn
      }
    })
    const [author] = await db.author.findOrCreate({ where: { firstName: req.body.author }})
    await author.addBook(book)
    const user = await db.user.findOne({ where: { id: req.user.id } });
    await user.addBook(book);
    res.redirect('/library')
    
  } catch (error) {
    req.flash('error', error.message)
    res.send('Error ;(!')
  }
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
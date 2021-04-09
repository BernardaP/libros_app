const router = require('express').Router()
const passport = require('../config/ppConfig')
const db = require("../models")
const axios = require('axios')
const { route } = require('./home')

//Get - /library show all books added to library 
router.get('/', function(req, res) {
  // console.log("hello")
  //find all the books in db
  console.log("HERE>>>>>>", req.user)
  db.user.findOne({
    where: {
      id: req.user.id
    },
    include: [db.book]
  }).then((user)=> {
    console.log("*******", user.books)
    res.render('library/index.ejs', { user: user })
  })

  



  // db.book.findAll({
  //   include: [db.author]
  // })
  //   .then((foundBooks) => {
  //     db.author.findAll()
  //     .then((authors) => {
  //       db.user.findOne({
  //         where: {
  //           id: req.user.id
  //         }
  //     }).then((user) => {
  //       res.render('library/index.ejs', {books: foundBooks, author: authors, user: user })

  //     })
  //   })
  //     //console.log("+++++++",foundBooks)
  //     // render the view and pass the found books
  // })
 
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
    include: [db.author ]
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
    console.log(error)
    res.send('Error ;(!')
  }
})

// router.post('/', function(req, res) {
//   //check the contents of body
//   // console.log(req.body)
//   //call database and add a book via find or create
//   db.book.findOrCreate({
//     where: {
//       title: req.body.title,
//       image: req.body.image,
//       description: req.body.description
//     },
//     defaults: {
//       isbn: req.body.isbn
//     }

//   }).then(function ([book, created]) {
//     // console.log("%%%%%%%%%%%%%",book)
//     db.author.findOrCreate({
//       where: {
//         firstName: req.body.author
//       }
//     }).then(function([author, created]) {
//       console.log("%%%%%%%%%%%%%",author)
//       author.addBook(book).then(function(relationInfo){ 
        
//         db.user.findOne({
//           where: {
//             id: req.user.id
//           }
//         }).then((user) => {
//           user.addBook(book).then(function(relationInfo){
//             res.redirect('/library')
//           })
//         })  
//       // book.addAuthor(author.id).then(function(relationInfo){ 
//         // console.log('===========AUTHOR', author.firstName, "added to ", book.title)
//       })

//     })
//     // res.redirect('/library')

//   })
//   .catch(function(error){
//     console.log(error)
//     res.send('Error ;(!')
//   })
// })


// POST - delete a book from library
router.delete('/:id', function(req, res) {
  db.book.destroy({
    where: {id: req.params.id}
  }).then(function(){
    res.redirect('/library')
  })
})

module.exports = router;
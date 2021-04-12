const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  }).then(([user, created]) => {
    if (created) {
      passport.authenticate('local', {
        successRedirect: '/library',
        successFlash: 'Account created and user logged in!'
      })(req, res)
    } else {
      req.flash('error', 'Email already exists')
      res.redirect('/auth/signup')
    }
  }).catch(error => {
    req.flash('error', error.message)
    res.redirect('/auth/signup')
  })
})

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/library',
  failureRedirect: '/auth/login',
  successFlash: 'You have logged in!',
  failureFlash: 'Invalid username and/or password.'
}))

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success', 'You have logged out!')
  res.redirect('/')
})

module.exports = router;

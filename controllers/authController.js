var express = require('express')
var router = express.Router()
var passport = require('../authentication/passport')
var isLoggedIn = require('../middleware/isLoggedIn')
var User = require('../models/user')

// send the user to the sign up page and create their account
router.route('/signup')
.get((req, res) => {
  res.render('auth/signup')
})
.post((req, res) => {
  if (req.body.country.length < 1 || req.body.number.length < 1) {
    req.flash('error', 'Your country code and phone number are both required. Please try again.')
    res.redirect('/auth/signup')
  } else {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: '+' + req.body.country + req.body.number
    }, (err, createdUser) => {
      if (err) {
        req.flash('error', 'Could not create user account. Please try again.')
        res.redirect('/auth/signup')
      } else {
        passport.authenticate('local', {
          successRedirect: '/',
          successFlash: 'Account created and logged in. Welcome to contraception land!'
        })(req, res)
      }
    })
  }
})

// log the user in
router.route('/login')
.get((req, res) => {
  if (req.isAuthenticated()) {
    req.flash('error', 'You are already logged in.')
    return res.redirect('/account')
  }
  res.render('auth/login')
})
.post(passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth/signup',
  failureFlash: 'Invalid username and/or password.',
  successFlash: 'You have logged in. Welcome back!'
}))

// check if the user is logged in so they can log out
router.use(isLoggedIn)

// log the user out
router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success', 'You have successfully logged out. Come back soon!')
  res.redirect('/')
})

module.exports = router

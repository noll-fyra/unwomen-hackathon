var express = require('express')
var router = express.Router()
var isLoggedIn = require('../middleware/isLoggedIn')
var Condition = require('../models/condition')
var schedule = require('../utilities/schedule')
// var User = require('../models/user')
// var sendSms = require('../utilities/send-sms')

// check that the user is logged in to access their account
router.use(isLoggedIn)

// display the user's account
router.route('/')
.get((req, res) => {
  Condition.find({user: req.user}).sort({ date: 1 }).exec((err, data) => {
    if (err) throw err
    res.render('account/account', {data: data})
  })
})
// update contraceptive
.post((req, res) => {
  if (req.body.contraceptiveType && req.body.contraceptiveBrand) {
    req.user.update({contraceptiveType: req.body.contraceptiveType, contraceptiveBrand: req.body.contraceptiveBrand}).exec((err, data) => {
      if (err) throw err
      res.redirect('/account')
    })
  } else {
    req.flash('error', 'You must enter both contraceptive fields.')
    res.redirect('/account')
  }
})

// start tracking
router.route('/track')
.post((req, res) => {
  if (req.body.track) {
    req.user.update({track: true}).exec((err, data) => {
      if (err) throw err
      schedule.create(req.user)
      res.redirect('/account')
    })
  }
})

// stop tracking
router.route('/stop')
.post((req, res) => {
  if (!req.body.track) {
    req.user.update({track: false}).exec((err, data) => {
      if (err) throw err
      schedule.cancel(req.user)
      res.redirect('/account')
    })
  }
})

module.exports = router

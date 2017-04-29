var express = require('express')
var router = express.Router()
var User = require('../models/user')
var Condition = require('../models/condition')
var isLoggedIn = require('../middleware/isLoggedIn')

// check that the user is logged in to get advice
router.use(isLoggedIn)

// the advice page
router.get('/seek/:id', (req, res) => {
    res.render('./advice/seek', {room: req.params.id, person: req.user})
})

router.get('/medpro', (req, res) => {
  res.render('./advice/medPro')
})

router.get('/give/:id', (req, res) => {
  Condition.find({user: req.params.id}).exec((err, data) => {
    if (err) throw err
    User.findById(req.params.id).exec((err, person) => {
      if (err) throw err
      res.render('./advice/give', {data: data, room: req.params.id, person: person})
    })
  })
})

module.exports = router

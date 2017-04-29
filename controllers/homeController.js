var express = require('express')
var router = express.Router()
var User = require('../models/user')

// the home page
router.get('/', (req, res) => {
  User.find({}).exec((err, data) => {
    if (err) throw err
    res.render('./index/index', {users: data,})
  })
})

module.exports = router

var express = require('express')
var router = express.Router()
var isLoggedIn = require('../middleware/isLoggedIn')

// check that the user is logged in to access their account
router.use(isLoggedIn)

// display the user's account
router.route('/')
.get((req, res) => {
  res.render('account/account')
})

module.exports = router

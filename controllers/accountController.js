var express = require('express')
var router = express.Router()
var isLoggedIn = require('../middleware/isLoggedIn')
var sendSms = require('../utilities/send-sms')

// check that the user is logged in to access their account
router.use(isLoggedIn)

// display the user's account
router.route('/')
.get((req, res) => {
  res.render('account/account', {twilio: sendSms})
//<button onclick='<%- twilio(currentUser.phone).bind(this) %>' type="button" name="button">Send me a message</button>

})

module.exports = router

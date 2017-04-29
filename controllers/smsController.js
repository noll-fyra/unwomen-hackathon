var express = require('express')
var router = express.Router()
var twilio = require('twilio')
var User = require('../models/user')

// the home page
router.post('/sms', (req, res) => {
  // console.log('the real one = req.body.Body and req.body.From')
  // console.log(req.body.Body)
  // console.log('end')
  var twiml = new twilio.TwimlResponse()

// 0 and 6 to allow only 1-5 responses
  if (!Number.isNaN(parseInt(req.body.Body)) && parseInt(req.body.Body) > 0 && parseInt(req.body.Body) < 6) {
    User.find({phone: req.body.From}).exec((err, user) => {
      if (err) {
        twiml.message('Thanks for your interest in we-contraception, but your number does not appear to be listed. Visit http://we-contraception.herokuapp.com to find out more.')
      }
      twiml.message('Thanks ' + user.name + ', your response of ' + req.body.Body + ' has been recorded! Stay safe!')
    })
  } else {
    twiml.message('You entered an invalid number. From a scale of 1 - 5, with 5 being the happiest, please tell us how happy you were today:')
  }
  res.writeHead(200, {'Content-Type': 'text/xml'})
  res.end(twiml.toString())
})

module.exports = router

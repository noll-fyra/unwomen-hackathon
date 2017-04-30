var express = require('express')
var router = express.Router()
var twilio = require('twilio')
var User = require('../models/user')
var Condition = require('../models/condition')

// receive incoming sms here
router.post('/', (req, res) => {
  var twiml = new twilio.TwimlResponse()
  // 0 and 6 to allow only 1-5 responses
  if (!Number.isNaN(parseInt(req.body.Body)) && parseInt(req.body.Body) > 0 && parseInt(req.body.Body) < 6) {
    User.findOne({phone: req.body.From}, (err, user) => {
      if (err) throw err
      // user number not found
      if (!user) {
        twiml.message('Thanks for your interest in Love Confidently, but your number does not appear to be listed. Visit http://love-confidently.herokuapp.com to find out more.')
      } else {
        // add condition to user's database
        Condition.create({
          user: user.id,
          level: parseInt(req.body.Body),
          date: new Date()
        })
        twiml.message('Thanks ' + user.name + ', your response of ' + req.body.Body + ' has been recorded! Stay safe!')
      }
      res.writeHead(200, {'Content-Type': 'text/xml'})
      res.end(twiml.toString())
    })
    // handle non 1-5 responses
  } else {
    twiml.message('Your entry is invalid. From a scale of 1 - 5, with 5 being the happiest, please tell us how happy you were today:')
    res.writeHead(200, {'Content-Type': 'text/xml'})
    res.end(twiml.toString())
  }
})

module.exports = router

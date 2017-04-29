// Twilio Credentials
var accountSid = 'ACc748f6414b6a04cfae120f1e9f3e2b9b'
var authToken = 'da808d0a9b53641120df28fd540968f4'

// require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken)

client.messages.create({
  to: '+6587427184',
  from: '+61428086370',
  body: 'This is the ship that made the Kessel Run in fourteen parsecs?'
}, function (err, message) {
  if (err) console.log(err)
  console.log(message)
})

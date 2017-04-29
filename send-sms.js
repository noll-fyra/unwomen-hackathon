// Twilio Credentials
var accountSid = 'ACc748f6414b6a04cfae120f1e9f3e2b9b'
var authToken = 'ba7f421bdc29b2ca609f3b6e047b3b94'

// require the Twilio module and create a REST client
var twilio = require('twilio')
var client = new twilio.RestClient(accountSid, authToken)

client.messages.create({
  to: '+6587427184',
  from: '+61428086370',
  body: 'This is the ship that made the Kessel Run in fourteen parsecs?'
}, function (err, message) {
  if (err) console.error(err.message)
  console.log(message.sid)
})

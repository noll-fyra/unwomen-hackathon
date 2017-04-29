// Twilio Credentials
var accountSid = 'ACc748f6414b6a04cfae120f1e9f3e2b9b'
var authToken = 'ba7f421bdc29b2ca609f3b6e047b3b94'

// require the Twilio module and create a REST client
var twilio = require('twilio')
var client = new twilio.RestClient(accountSid, authToken)

client.messages.create({
  to: '+6583383255',
  from: '+61428086370',
  body: 'On a scale of 1-10, how are you feeling today?'
}, function (err, message) {
  if (err) console.error(err.message)
  console.log(message.sid)
})

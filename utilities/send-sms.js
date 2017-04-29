module.exports = function (receiver) {
// Twilio Credentials
  var accountSid = process.env.TWILIO_ACCOUNT_SID
  var authToken = process.env.TWILIO_AUTH_TOKEN

// require the Twilio module and create a REST client
  var twilio = require('twilio')
  var client = new twilio.RestClient(accountSid, authToken)

  client.messages.create({
    to: receiver,
    from: '+61428086370',
    body: 'From a scale of 1 - 5, with 5 being the happiest, please tell us how happy you were today:'
  }, function (err, message) {
    if (err) console.error(err.message)
    console.log(message.sid)
  })
}

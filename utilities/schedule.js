var schedule = require('node-schedule')
var twilio = require('twilio')

// create track schedule
function create (user) {
  var startTime = new Date()
  var endTime = new Date(startTime.getTime() + 8 * 7 * 24 * 60 * 60 * 1000)
  schedule.scheduleJob(user.id, {start: startTime, end: endTime, rule: '* * 18 * * *'}, () => {
    twilio(user.number)
  })
}

// cancel track schedule
function cancel (user) {
  var job = schedule.scheduledJobs[user.id]
  job.cancel()
}

module.exports.create = create
module.exports.cancel = cancel

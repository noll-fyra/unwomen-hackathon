var schedule = require('node-schedule')
var twilio = require('twilio')
// var User = require('../models/user')

function create (user) {
var startTime = new Date()
var endTime = new Date(startTime.getTime() + 8 * 7 * 24 * 60 * 60 * 1000)
var j = schedule.scheduleJob(user.id, {start: startTime, end: endTime, rule: '* * 18 * * *'}, function () {
  twilio(user.number)
})
}

var job = schedule.scheduledJobs[user.id]
job.cancel()

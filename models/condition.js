var mongoose = require('mongoose')

var ConditionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  level: Number,
  description: String,
  date: Date
})

module.exports = mongoose.model('Condition', ConditionSchema)

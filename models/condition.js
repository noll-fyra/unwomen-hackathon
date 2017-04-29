var mongoose = require('mongoose')

var ConditionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  level: Number,
  description: String
})

module.exports = mongoose.model('Condition', ConditionSchema)

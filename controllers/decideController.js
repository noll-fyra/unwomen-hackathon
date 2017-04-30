var express = require('express')
var router = express.Router()
var User = require('../models/user')
var contraceptionOptions = require('./../options')

function filterOptions (has_steady_partner, need_to_be_well_organised, when_think_about, hormone_altering) {
  let filteredOptions = contraceptionOptions

  if(has_steady_partner != undefined) {
    filteredOptions = filteredOptions.filter((option) => {return option.has_steady_partner === has_steady_partner})
  }

  if(need_to_be_well_organised != undefined) {
    filteredOptions = filteredOptions.filter((option) => {return option.need_to_be_well_organised === need_to_be_well_organised})
  }

  if(when_think_about != undefined) {
    filteredOptions = filteredOptions.filter((option) => {return option.when_think_about === when_think_about})
  }

  if(hormone_altering != undefined) {
    filteredOptions = filteredOptions.filter((option) => {return option.hormone_altering === hormone_altering})
  }


  return filteredOptions.map((option) => { return option.id });
}

// the home page
router.get('/', (req, res) => {
  User.find({}).exec((err, data) => {
    if (err) throw err
    const filteredOptions = filterOptions(
      req.query.has_steady_partner,
      req.query.need_to_be_well_organised,
      req.query.when_think_about,
      req.query.hormone_altering
    )
    const formValues = {
      has_steady_partner: req.query.has_steady_partner,
      need_to_be_well_organised: req.query.need_to_be_well_organised,
      when_think_about: req.query.when_think_about,
      hormone_altering: req.query.hormone_altering
    };
    res.render('./decide/decide', {users: data, options: contraceptionOptions, filteredOptions: filteredOptions, formValues: formValues, current: 'decide'})
  })
})

module.exports = router

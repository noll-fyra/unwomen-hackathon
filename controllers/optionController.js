var express = require('express')
var router = express.Router()
const ContraceptionOptions = require('./../options')

// the contraception options page
router.get('/:optionID', (req, res) => {
  const optionID = req.params.optionID
  const option = ContraceptionOptions.find(option => option.id === optionID)
  if (!option) {
    return res.send('404')
  }
  return res.render('./option/option', { option: option })
})

module.exports = router

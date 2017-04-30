var express = require('express')
var router = express.Router()

// the home page
router.get('/', (req, res) => {
  res.render('./index/index', {current: 'home'})
})

module.exports = router

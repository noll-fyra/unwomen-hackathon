var express = require('express')
var router = express.Router()
var geocoder = require('geocoder')

// the home page
router.get('/', (req, res) => {
  res.render('./mapForm')
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (req.body.address) {
    geocoder.geocode(req.body.address, (err, data) => {
      if (err) throw err
      res.render('./map', {mapLat: data.results[0].geometry.location.lat, mapLong: data.results[0].geometry.location.lng})
    })
  } else if (req.body.yourlat && req.body.yourlong) {
    res.render('./map', {mapLat: req.body.yourlat, mapLong: req.body.yourlong})
  } else {
    res.send('error finding location please go back and try again')
  }
})

module.exports = router

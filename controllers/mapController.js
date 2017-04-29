var express = require('express')
var router = express.Router()
var geocoder = require('geocoder')

// the home page
router.get('/', (req, res) => {
  res.render('./map/mapForm')
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (req.body.address) {
    geocoder.geocode(req.body.address, (err, data) => {
      if (err) throw err
      res.render('./map/map', {mapLat: data.results[0].geometry.location.lat, mapLong: data.results[0].geometry.location.lng})
    })
  } else if (req.body.yourLat && req.body.yourLong) {
    res.render('./map/map', {mapLat: req.body.yourLat, mapLong: req.body.yourLong})
  } else {
    res.send('There was an error finding your location. Please go back and try again.')
  }
})

module.exports = router

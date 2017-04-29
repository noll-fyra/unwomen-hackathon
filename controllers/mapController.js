var express = require('express')
var router = express.Router()
var geocoder = require('geocoder')

// the home page
router.get('/', (req, res) => {
    res.render('./mapForm')
})

router.post('/', (req, res) => {
  geocoder.geocode(req.body.address, (err, data) => {
    if (err) throw err
    // console.log(JSON.stringify(data))
    res.render('./map', {map: data})
  })
})




module.exports = router

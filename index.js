var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Home')
});

app.get('/option/:optionID', function (req, res) {
  const optionID = req.params.optionID;
  res.send(optionID)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

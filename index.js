const express = require('express');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.render('index', {});
});

app.get('/option/:optionID', function (req, res) {
  const optionID = req.params.optionID;
  res.send(optionID)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

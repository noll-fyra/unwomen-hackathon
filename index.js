// set up hidden secret
require('dotenv').config({silent: true})

// set up express
const express = require('express')
const app = express()
const http = require('http')

// set up the database
const mongoose = require('mongoose')
const dbURI = process.env.PROD_MONGODB
const port = process.env.PORT || 3000
mongoose.Promise = global.Promise

// add middleware, views
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./authentication/passport')
const flash = require('connect-flash')

// sms
const twilio = require('twilio')

// connect to the database
if (!mongoose.connection.db) mongoose.connect(dbURI)
var db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection error:'))
db.once('open', () => {
  console.log('Connected!')
})

// set the layout
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// handle requests
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended: false}))

// handle login/logout (session comes before passport and flash)
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    url: process.env.PROD_MONGODB,
    autoReconnect: true,
    autoRemove: 'native',
    mongooseConnection: mongoose.connection
  })
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

// before every route, attach the flash messages and current user to res.locals
app.use((req, res, next) => {
  res.locals.alerts = req.flash()
  res.locals.currentUser = req.user
  next()
})

// routes
app.use('/', require('./controllers/homeController'))
app.use('/auth', require('./controllers/authController'))
app.use('/account', require('./controllers/accountController'))
app.use('/map', require('./controllers/mapController'))
app.use('/decide', require('./controllers/decideController'))
app.use('/option', require('./controllers/optionController'))

app.post('/sms', (req, res) => {
  // console.log('the real one = req.body.Body and req.body.From')
  // console.log(req.body.Body)
  // console.log('end')
  var twiml = new twilio.TwimlResponse()
  if (!Number.isNaN(parseInt(req.body.Body))) {
    twiml.message('Thanks Maria, your response of ' + req.body.Body + 'has been recorded! Stay safe!')
  } else {
    twiml.message('It sounds like you could die in the next 24 hours. The fates have spoken Maria...')
  }
  res.writeHead(200, {'Content-Type': 'text/xml'})
  res.end(twiml.toString())
})

http.createServer(app).listen(port, () => {
  console.log('App is running on port: ' + port)
})

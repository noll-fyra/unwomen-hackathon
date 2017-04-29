// set up express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const ejsLayouts = require('express-ejs-layouts')

// set the layout
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use((req, res) => {
  res.render('./index')
})

app.listen(port, () => {
  console.log('App is running on port: ' + port)
})

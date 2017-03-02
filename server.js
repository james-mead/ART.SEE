var path = require('path')
var express = require('express')
var hbs = require('express-handlebars')
var routes = require('./routes')

var app = express()

//Middleware
app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))

//routes
// app.get('/', routes.PLACEHOLDER)

module.exports = app

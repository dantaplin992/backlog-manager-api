const express = require('express')
const app = express()

const path = require("path")
const cors = require('cors')

app.use(cors({
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}))

app.get('/allow-cors', function(request, response) {
  response.set('Access-Control-Allow-Origin', '*')
})

app.use(express.json())

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, "public")))

const homeRouter = require('./routes/home')

module.exports = app

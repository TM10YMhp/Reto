const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const v1Routes = require('./routes/v1.route.js')

const app = express()

const whiteList = [process.env.ORIGIN1, 'http://localhost:5000']
app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin || whiteList.includes(origin)) {
        return callback(null, origin);
      }
      return callback("No autorizado por CORS");
    },
  })
);
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use('/favicon.ico', express.static(__dirname + '/public/favicon.ico'))
app.use('/v1', v1Routes)

app.get('/', (req, res) => {
  res.redirect('/index.html')
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || err
  console.error(err.name, '=>', err.message)
  res.status(status).send(message)
});

module.exports = app

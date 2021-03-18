const express = require('express')
const cors    = require('cors')
const helmet  = require('helmet')
const morgan  = require('morgan')
const {name, version} = require('./package.json')

const app = express()

app.set('json spaces', 2);

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));

app.use('/', (req, res) => {
  res.json({name, version})
})

app.use((err, req, res, next) => {
  let status = err.status || 500
  console.error(err)
  res.status(status).json({status, name: err.name, message: err.message})
})

module.exports = app


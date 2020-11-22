const express = require('express')
const app = express()
const { incrementSnus } = require('./mongo')
const { pipe } = require('ramda')

const defaultHandler = (req, res) => pipe(
  fn => fn(),
  () => res.send('incremented')
)

app.get('/increment', (...args) => defaultHandler(...args)(incrementSnus))
 
app.listen(process.env.PORT || 3000)
const express = require('express')
const app = express()
const { incrementSnus } = require('./mongo')

const isoDate = () => new Date().toISOString()

app.get('/', (req, res) => {
  res.send('use /increment')
})

app.get('/increment', (req, res) => incrementSnus())
 
app.listen(process.env.PORT || 3000)
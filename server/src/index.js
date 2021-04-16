require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 3001
const path = require('path')
const cors = require('cors')
const controllers = require('./controllers')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', controllers)

app.use(express.static(path.join(__dirname, '..', 'build')))
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
})

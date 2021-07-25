// app.js
const express = require('express')
const app = express()
const port = 3000


// Add app.use to print out every req's TIME & METHOD & URL

app.use(function (req, res, next) {
  const time = Date.now()
  if (req.url !== '/favicon.ico') {
    console.log(`Time: ${new Date(time)}, ${req.method} from URL: ${req.originalUrl}`)
  }
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})


app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
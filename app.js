// app.js
const express = require('express')
const onHeader = require('on-headers')
const onFinished = require('on-finished')
const app = express()
const port = 3000


// Add app.use to print out every req's TIME & METHOD & URL

app.use(function (req, res, next) {
  res._startTime = new Date().getTime()
  if (req.url !== '/favicon.ico') {
    onHeader(res, function () {
    res._endTime = new Date().getTime();     
    })
    onFinished(res, function () {
    console.log(`${new Date(res._startTime)} | ${req.method} from ${req.originalUrl} | total time: ${res._endTime - res._startTime} ms`)
    })
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
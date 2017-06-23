const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello world!')
})
app.listen(port, (err) => {
  if (err) {
    console.log(`Error listening on port ${port}`)
    return
  }
  console.log(`Listening on port ${port}`)
})

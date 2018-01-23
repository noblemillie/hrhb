// route actions required for functionality
const express = require('express')
const app = express()
// const $ = require('jQuery')

//create routes
app.get('/', (req, res) => res.send('server connected'))


app.post('/', (req, res) => {
  let output = charSortinator(req.body);
  res.send('sortinated!', output);
})

app.listen(3000, () => console.log('listening on port 3000'))

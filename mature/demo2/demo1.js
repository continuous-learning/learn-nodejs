const express = require('express')
const utility = require('utility')
const app = express()
app.get('/', (req, res) => {
  let q = req.query.q
  let md5Value = utility.md5(q)
  res.send(md5Value)
})

app.listen(3000, () => {
  console.log('app is listening at port 3000 please write query in location')
})
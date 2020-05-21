const express = require('express')
const async = require('async')
const fetchUrl = require('./fetchUrl')

const app = express()

let urls = [];
for(let i = 0; i < 30; i++) {
  urls.push('http://datasource_' + i);
}

app.get('/', (req, res) => {
  async.mapLimit(urls, 5, function (url, callback) {
    fetchUrl(url, callback)
  }, function (err, result) {
    console.log(result)
    res.send(result)
  })
})

app.listen(3000, () => {
  console.log('app is listening at port 3000')
})
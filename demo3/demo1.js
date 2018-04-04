const express = require('express')
const cheerio = require('cheerio')
const superagent = require('superagent')

const app = express()

app.get('/', (req, res, next) => {
  superagent.get('https://cnodejs.org/').end((err, sres) => {
    if(err) {
      return next(err)
    }
    let $ = cheerio.load(sres.text)
    let items = []
    $('#topic_list .topic_title').each((idx, element) => {
      let $element = $(element)
      items.push({
        title: $element.attr('title'),
        href: $element.attr('href')
      })
    })
    res.send(items)
  })
})

app.listen(3000, () => {
  console.log('app is listening at port 3000')
})
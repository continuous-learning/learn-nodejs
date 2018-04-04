const express = require('express')
const cheerio = require('cheerio')
const superagent = require('superagent')
const url = require('url')

const app = express()
const cnodeUrl = 'https://cnodejs.org/'

superagent.get(cnodeUrl).end((err, sres) => {
  if(err) return console.error(err)
  let topicUrls = []
  let $ = cheerio.load(sres.text)
  $('#topic_list .topic_title').each((idx, element) => {
    let $element = $(element)
    let href = url.resolve(cnodeUrl, $element.attr('href'))
    topicUrls.push(href)
  })
  console.log(topicUrls)
})

app.listen(3000, () => {
  'app is listening at port 3000'
})
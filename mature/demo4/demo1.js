const express = require('express')
const cheerio = require('cheerio')
const superagent = require('superagent')
const url = require('url')
const eventproxy = require('eventproxy')

const app = express()
const cnodeUrl = 'https://cnodejs.org/'

app.get('/', (req, res, next) => {
  superagent.get(cnodeUrl).end((err, sres) => {
    if(err) return next(err)
    let topicUrls = []
    let $ = cheerio.load(sres.text)
    $('#topic_list .topic_title').each((idx, element) => {
      let $element = $(element)
      let href = url.resolve(cnodeUrl, $element.attr('href'))
      topicUrls.push(href)
    })
    let ep = new eventproxy()
    // ep.after https://github.com/JacksonTian/eventproxy#%E9%87%8D%E5%A4%8D%E5%BC%82%E6%AD%A5%E5%8D%8F%E4%BD%9C
    ep.after('topic_html', topicUrls.length, (topics) => {
      topics = topics.map((topicPair) => {
        let topicUrl = topicPair[0]
        let topicHtml = topicPair[1]
        let $ = cheerio.load(topicHtml)
        return ({
          title: $('.topic_full_title').text().trim(),
          href: topicUrl,
          comment1: $('.reply_content').eq(0).text().trim()
        })
      })
      res.send(topics)
    })
    topicUrls.forEach((topicUrl) => {
      superagent.get(topicUrl).end((err, sres) => {
        console.log('fetch ' + topicUrl + ' successful');
        ep.emit('topic_html', [topicUrl, sres.text]);
      })
    })
  })
})

app.listen(3000, () => {
  console.log('app is listening at port 3000')
})
const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')
const Nightmare = require('nightmare')

const app = express()
const nightmare = Nightmare({ show: true })

const server = app.listen(3000, () => {
  // let host = server.address().address
  const port = server.address().port
  console.log(`You App is running at http://127.0.0.1:${port}`)
})

let hotNews = []
let localNews = []
let pageRes = {}

app.get('/', (req, res) => {
  res.send({
    hotNews: hotNews,
    localNews: localNews
  })
})


let getHotnews = (res) => {
  let hotNews = []

  let $ = cheerio.load(res.text)

  $('div#pane-news ul li a').each((idx, ele) => {
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    }
    hotNews.push(news)
  })
  return hotNews
}

let getLocalNews = (res) => {
  let localNews = []
  let $ = cheerio.load(res)

  // 本地新闻
  $('ul#localnews-focus li a').each((idx, ele) => {
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    }
    localNews.push(news)
  })

  // 本地资讯
  $('div#localnews-zixun ul li a').each((idx, ele) => {
    let news = {
      title: $(ele).text(),
      href: $(ele).attr('href')
    }
    localNews.push(news)
  })

  return localNews
}

superagent.get('http://news.baidu.com/').end((err, res) => {
  if (err) {
    console.error(`热点新闻抓取失败 - ${err}`)
  } else {
    // console.log(res)
    hotNews = getHotnews(res)
    localNews = getLocalNews(res)
    pageRes = res
  }
})

nightmare.goto('http://news.baidu.com/')
.wait("div#local_news")
.evaluate(() => document.querySelector("div#local_news").outerHTML)
.then((htmlStr) => {
  localNews = getLocalNews(htmlStr)
})
.catch((err) => console.error(`本地新闻抓取失败- ${err}`))

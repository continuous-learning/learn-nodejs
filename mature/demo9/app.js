const express = require('express')
const copySmallFile = require('./copySmallFile')
const copyBigFile = require('./copyBigFile')

const app = express()

// 小文件拷贝

app.get('/smallFile', function (req, res) {
  let params = [
    'F://nodejs_demo_black//demo1//demo1.js',
    'F://nodejs_demo_black//demo1.js'
  ]
  copySmallFile(params)
  // 后期可完善为拿try catch捕获异常，返回promise对象，显示不同的值0.0
  res.send('ok')
})

// 大文件拷贝

app.get('/copyBigFile', function (req, res) {
  let params = [
    'F://nodejs_demo_black//demo1//demo1.js',
    'F://nodejs_demo_black//demo1.js'
  ]
  copyBigFile(params)
  res.send('大文件拷贝当然是用流了Stream')
})

app.listen(3000, function () {
  console.log('app is listening at port 3000')
})
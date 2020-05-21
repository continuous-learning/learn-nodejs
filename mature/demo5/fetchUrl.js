let concurrencyCount = 0
let fetchUrl = function (url, callback) {
  let delay = parseInt((Math.random() * 10000000) % 2000, 10)
  concurrencyCount++
  console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒')
  setTimeout(function () {
    concurrencyCount--
    callback(null, url + ' html content')
  }, delay)
}
module.exports = fetchUrl
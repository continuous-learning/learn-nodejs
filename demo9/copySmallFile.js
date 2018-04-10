const fs = require('fs')

function copySmallFile(src, dst) {
  // readFileSync 不能读取文件夹...  否则会报错
  fs.writeFileSync(dst, fs.readFileSync(src), (err, data) => {
    console.log(err, data)
  })
}
 // process是一个全局变量，可通过process.argv获得命令行参数。由于argv[0]固定等于NodeJS执行程序的绝对路径，argv[1]固定等于主模块的绝对路径
module.exports = function (argv) {
  copySmallFile(argv[0], argv[1])
}
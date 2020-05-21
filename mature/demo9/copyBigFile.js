const fs = require('fs')

function copyBigFile(src, dst) {
  fs.createReadStream(src, {encoding: 'utf-8'}).pipe(fs.createWriteStream(dst))
}

module.exports = function (argv) {
  copyBigFile(argv[0], argv[1])
}
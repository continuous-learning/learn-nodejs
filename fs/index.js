const fs = require('fs')
const path = require('path')
const { readFile, readFileSync, writeFile, writeFileSync } = require('./utils/fileUtils')

const filePath = path.join(__dirname, 'data.json')
const writeFilePath = path.join(__dirname, 'newdata.txt')

const readFileFun = async () => {
  const data = await readFile({ filePath })
  const dataSync = await readFileSync({ filePath })
}

const writeFileFun = async () => {
  const result = await writeFile({ filePath: writeFilePath, data: '测试写入', options: { flag: 'a' } })
}

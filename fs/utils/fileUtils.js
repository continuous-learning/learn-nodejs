const fs = require('fs')

module.exports = {
  /**
   * 异步读取文件
   * @author blacklisten
   * @date 2020-06-30
   * @returns {any}
   */
  readFile({ filePath, options }) {
    return new Promise((resolve, reject) => {
      try {
        fs.readFile(filePath, options || 'utf8', (error, data) => {
          if (error) {
            console.error('读取错误...')
            reject(`读取错误...${error}`)
          }
          resolve(data)
        })
      } catch (error) {
        console.error('读取错误...')
        reject(`读取错误...${error}`)
      }
    })
  },
  /**
   * 同步读取文件
   * @author blacklisten
   * @date 2020-06-30
   * @returns {any}
   */
  readFileSync({ filePath, options }) {
    return new Promise((resolve, reject) => {
      try {
        const data = fs.readFileSync(filePath, 'uft8')
        resolve(data)
      } catch (error) {
        console.error('读取错误...')
        reject(`读取错误...${error}`)
      }
    })
  },
  /**
   * 异步写文件
   * @author blacklisten
   * @date 2020-06-30
   * @returns {any}
   */
  writeFile({ filePath, data, options = {} }) {
    return new Promise((resolve, reject) => {
      try {
        fs.writeFile(filePath, data, options, (error) => {
          if (error) {
            reject(error)
          }
          resolve('success')
        })
      } catch (error) {
        reject(error)
      }
    })
  },
  /**
   * 同步写文件
   * @author blacklisten
   * @date 2020-06-30
   * @returns {any}
   */
  writeFileSync({ filePath, data, options = {} }) {
    return new Promise((resolve, reject) => {
      try {
        fs.writeFileSync(filePath, data, options)
        resolve('success')
      } catch (error) {
        reject(error)
      }
    })
  },
  /**
   * 异步追加文件
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  appendFile({ filePath, data, options = {} }) {
    return new Promise((resolve, reject) => {
      try {
        fs.appendFile(filePath, data, options, (error) => {
          if (error) {
            reject(error)
          }
          resolve('success')
        })
      } catch (error) {
        reject(error)
      }
    })
  },
  /**
   * 同步追加文件
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  appendFileSync({ filePath, data, options = {} }) {
    return new Promise((resolve, reject) => {
      try {
        fs.appendFileSync(filePath, data, options)
        resolve('success')
      } catch (error) {
        reject('error')
      }
    })
  },
  /**
   * 同步复制文件
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  copyFile({ sourceFile, targetFile }) {
    return new Promise((resolve, reject) => {
      try {
        fs.copyFile(sourceFile, targetFile, (error) => {
          if (error) {
            reject(error)
          }
          resolve('success')
        })
      } catch (error) {
        reject(error)
      }
    })
  },
  /**
   * 异步复制文件
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  copyFileSync({ sourceFile, targetFile }) {
    return new Promise((resolve, reject) => {
      try {
        fs.copyFileSync(sourceFile, targetFile)
        resolve('success')
      } catch (error) {
        reject(error)
      }
    })
  },
  /**
   * 同步删除文件
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  unlink({ filePath }) {
    return new Promise((resolve, reject) => {
      try {
        fs.unlink(filePath, (error) => {
          if (error) {
            reject(error)
          }
          resolve('success')
        })
      } catch (error) {
        reject(error)
      }
    })
  },
  /**
   * 异步删除文件
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  unlinkSync({ filePath }) {
    return new Promise((resolve, reject) => {
      try {
        fs.unlinkSync(filePath)
        resolve('success')
      } catch (error) {
        reject(error)
      }
    })
  }
}

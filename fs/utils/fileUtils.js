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
  },
  /**
   * 打开文件 返回表示文件描述符的整数
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  open({ path, flags = 'r', mode = '0006' }) {
    return new Promise((resolve, reject) => {
      try {
        fs.open(path, flags, mode, (error, fd) => {
          if (error) {
            reject(error)
          }
          resolve(fd)
        })
      } catch (error) {
        reject(error)
      }
    })
  },
  /**
   * 同步打开文件 返回表示文件描述符的整数
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  openSync({ path, flags = 'r', mode = '0006' }) {
    return new Promise((resolve, reject) => {
      try {
        const result = fs.openSync(path, flags, mode)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  },
  /**
   * 文件读取 bytesRead：实际读取的字节数 buffer：被写入的缓存区对象
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  read({ fd, buffer = Buffer.alloc(16384), offset = 0, length = buffer.length, position = null }) {
    return new Promise((resolve, reject) => {
      try {
        fs.read(fd, buffer, offset, length, position, (error, bytesRead, buffer) => {
          if (error) {
            reject(error)
          }
          resolve({ bytesRead, buffer })
        })
      } catch (error) {
        reject(error)
      }
    })
  },
  /**
   * 关闭打开的文件
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  close({ fd }) {
    return new Promise((resolve, reject) => {
      try {
        fs.close(fd, (error) => {
          if (error) {
            reject(error)
          }
          resolve('success')
        })
      } catch (error) {
        reject(error)
      }
    })
  }
  /**
   * 创建一个文件夹
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  mkdir({ path }) {
    return new Promise((resolve, reject) => {
      try {
        fs.mkdir(path, (error) => {
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
   * 删除一个文件夹
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  rmdir({ path }) {
    return new Promise((resolve, reject) => {
      try {
        fs.rmdir(path, (error) => {
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
   * 读取一个文件夹
   * @author blacklisten
   * @date 2020-07-01
   * @returns {any}
   */
  readdir({ path }) {
    return new Promise((resolve, reject) => {
      try {
        fs.readdir(path, (error) => {
          if (error) {
            reject(error)
          }
          resolve('success')
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

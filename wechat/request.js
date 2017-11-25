// const Buffer = require('buffer') // buffer 模块
const https = require('https') // https 模块

exports.request = (url) => {
  return new Promise((resolve, reject) => {
    //! 目前需求只有get方法
    return https
      .get(url, (res) => {
        const buffer = []
        res.on('data', (data) => {
          buffer.push(data)
        })
        res.on('end', () => {
          const result = Buffer
            .concat(buffer)
            .toString('utf-8')
          return resolve(result)
        })
      })
      .on('error', (err) => {
        return reject(err)
      })
  })
}

const { auth } = require('./auth')
const { getAccessToken } = require('./accessToken')

/**
 * @param {Object} 配置参数
 */
function WeChat(config) {
  // common variable
  this.config = config
}

WeChat.prototype = {
  auth: function (req, res) {
    auth(req, res, this.config.token)
  },
  getAccessToken: function () {
    return getAccessToken(this.config)
  }
}

module.exports = WeChat

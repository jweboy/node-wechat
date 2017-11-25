const express = require('express')
const config = require('./config')
const WeChat = require('./wechat')

const app = express()
const wechatApp = new WeChat(config)

app.get('/', (req, res) => {
  wechatApp.auth(req, res)
})

app.get('/getAccessToken', (req, res) => {
  wechatApp
    .getAccessToken()
    .then((data) => {
      res.send(data)
    })
})

module.exports = app

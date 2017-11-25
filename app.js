const express = require('express')
const util = require('util')
// const chalk = require('chalk')
const config = require('./config')
const WeChat = require('./wechat')
// const menus = require('./wechat/menus')
// const { request } = require('./wechat/request')

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

//! 我觉得还是要一个后台界面 就基于我的那个nuxt项目好了 有一个可视的操作界面
// app.post('/', (req, res) => {
//   wechatApp
//     .getAccessToken()
//     .then((data) => {
//       const menuUrl = util.format(config.apiURL.createMenu, config.appDomain, data)
//       request('POST', menuUrl, JSON.stringify(menus))
//         .then(data => {
//           res.send(data)
//         })
//         .catch(err => {
//           res.send(err)
//         })
//     })
// })

module.exports = app

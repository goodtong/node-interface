const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const Swipe = require('./database/swipe')
const Newslist = require('./database/newslist')
const Comment = require('./database/comment')
const Photo = require('./database/photo')
const Goodslist =require('./database/goodslist')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('*', function(req, res, next) {
  //设置跨域访问
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/api/swipe', function(req, res) {
  //配置接口api
  Swipe.find(function(err, data) {
    if (err) {
      res.json({
        status: 1,
        data: null
      })
    } else {
      res.json({
        status: 0,
        swipe: data
      })
    }
  })
})

app.get('/api/newslist', function(req, res) {
  //配置接口api
  Newslist.find(function(err, data) {
    if (err) {
      res.json({
        status: 1,
        data: null
      })
    } else {
      res.json({
        status: 0,
        newslist: data
      })
    }
  })
})

// 获取评论列表
app.get('/api/comment', function(req, res) {
  //配置接口api
  Comment.find(function(err, data) {
    if (err) {
      res.json({
        status: 1,
        data: null
      })
    } else {
      res.json({
        status: 0,
        comment: data
      })
    }
  })
})


app.post('/api/comment', function(req, res) {
  new Comment(req.body).save(function(err, data) {
    if (err) {
      return res.status(500).send('Server error.')
    } else {
      res.json({
        status: 0,
        comment: data
      })
    }
  })
})

app.get('/api/photo', function(req, res) {
  Photo.find(function(err, data) {
    if (err) {
      res.json({
        status: 1,
        data: null
      })
    } else {
      res.json({
        status: 0,
        photo: data
      })
    }
  })
})

app.get('/api/goodslist', function(req, res) {
  Goodslist.find(function(err, data) {
    if (err) {
      res.json({
        status: 1,
        data: null
      })
    } else {
      res.json({
        status: 0,
        goodslist: data
      })
    }
  })
})

//配置服务端口
app.listen(3002, () => console.log('App listening at http://127.0.0.1:3002!'))

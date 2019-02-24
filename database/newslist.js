const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/study', { useNewUrlParser: true })

const Schema = mongoose.Schema

const newslist = new Schema()

module.exports = mongoose.model('Newslist', newslist)

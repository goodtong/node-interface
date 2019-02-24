const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/study', { useNewUrlParser: true })

const Schema = mongoose.Schema

const goodslist = new Schema()

module.exports = mongoose.model('Goodslist', goodslist)

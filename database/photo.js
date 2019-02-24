const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/study', { useNewUrlParser: true })

const Schema = mongoose.Schema

const photo = new Schema({
  id: Number,
  img: String
})

module.exports = mongoose.model('Photo', photo)

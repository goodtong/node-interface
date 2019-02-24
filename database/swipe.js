const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/study', { useNewUrlParser: true })

const Schema = mongoose.Schema

const swipeImageSchema = new Schema({
  url: String,
  img: String
})

module.exports = mongoose.model('Swipe', swipeImageSchema)
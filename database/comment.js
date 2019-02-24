const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/study', { useNewUrlParser: true })

const Schema = mongoose.Schema

const comment = new Schema({
  username: String,
  add_time: String,
  content: String
})

module.exports = mongoose.model('Comment', comment)

const mongoose = require("mongoose")

const NewsFeedSchema = new mongoose.Schema({
  userId: String,
  username: String,
  action: String,
  gameTitle: String,
  timeStamp: {
    type: Date,
    default: Date.now
  },
  review: String,
  likes: [],
})

const NewsFeed = mongoose.model("news-feed", NewsFeedSchema)
module.exports = NewsFeed

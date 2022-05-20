const NewsFeed = require('../models/news-feed')

const HomeController = {
  Index: (req, res) => {
    res.send("Hello, world!");
  },
  NewsFeed: (req, res) => {
    NewsFeed.find(
    ).then((data) => {res.send(data)})
  }
};

module.exports = HomeController;

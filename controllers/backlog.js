const Backlog = require('../models/backlogs')

const BacklogController = {
  All: (req, res) => {
    Backlog.find(
      { userId: req.query.userid }
    ).then((result) => {
      res.send(result)
    })
  },
  Add: (req, res) => {
    Backlog.updateOne(
      { userId: req.body.userId },
      { $push: { queued: req.body.game } }
    ).then((result) => {
      res.send(result)
    })
  },
  Remove: (req, res) => {
    console.log("Removing: " + req.body.game.name)
    Backlog.updateOne(
      { userId: req.body.userId },
      { $pull: { queued: { name: req.body.game.name } } }
    ).then((result) => {
      res.send(result)
    })
  },
  StartPlaying: (req, res) => {
    console.log("Start Playing: " + req.body.game.name)
    Backlog.updateOne(
      { userId: req.body.userId },
      { $pull: { queued: { name: req.body.game.name } }, $push: { currentlyPlaying : req.body.game } }
    ).then((result) => {
      res.send(result)
    })
  },
  PlayLater: (req, res) => {
    console.log("Moving " + req.body.game.name + " back into Backlog")
    Backlog.updateOne(
      { userId: req.body.userId },
      { $pull: { currentlyPlaying: { name: req.body.game.name } }, $push: { queued : req.body.game } }
    ).then((result) => {
      res.send(result)
    })
  }
}

module.exports = BacklogController;

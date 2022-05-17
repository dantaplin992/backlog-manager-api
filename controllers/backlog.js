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
    console.log(req.body.game.name)
    Backlog.updateOne(
      { userId: req.body.userId },
      { $pull: { queued: { name: req.body.game.name } } }
    ).then((result) => {
      res.send(result)
    })
  }
}

module.exports = BacklogController;

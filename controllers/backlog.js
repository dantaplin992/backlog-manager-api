const Backlog = require('../models/backlogs')

const BacklogController = {
  All: (req, res) => {
    Backlog.find(
      { userId: req.query.userid }
    ).then((result) => {
      console.log(result)
      res.send(result)
    })
  },
  Add: (req, res) => {
    Backlog.updateOne(
      { userId: req.body.userId },
      { $push: { games: req.body.game } }
    ).then((result) => {
      res.send(result)
    })
  },
}

module.exports = BacklogController;

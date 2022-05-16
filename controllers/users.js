const User = require('../models/users')
const Backlog = require('../models/backlogs')

const UsersController = {
  All: (req, res) => {
    User.find(
    ).then((data) => {
      res.send(data)
    })
  },
  New: (req, res) => {
    console.log(req.body)
    User.create(
      req.body
    ).then((result) => {
      console.log(`NEW ID: ${result._id}`)
      Backlog.create(
        { userId: result._id }
      ).then(() => {
        res.json({ result: "Success" })
      })
    })
  }
}

module.exports = UsersController

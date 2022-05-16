const User = require('../models/users')

const UsersController = {
  All: (req, res) => {
    User.find(
    ).then((data) => {
      res.send(data)
    })
  },
  New: (req, res) => {
    User.create(
        req.body
      ).then((result) => {
        res.json(result)
      })
  }
}

module.exports = UsersController

const User = require('../models/users')

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
      res.json({ result: "Success" })
    })
  }
}

module.exports = UsersController

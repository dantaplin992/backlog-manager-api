const User = require('../models/users')

const UsersController = {
  All: (req, res) => {
    User.find(
    ).then((data) => {
      res.send(data)
    })
  },
  New: (req, res) => {
    const newUser = new User(req.query)
    newUser.save((err) => {
      if (err) throw err
    })
  }
}

module.exports = UsersController

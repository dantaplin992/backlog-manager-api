const User = require('../models/users')
const Backlog = require('../models/backlogs')
const bcrypt = require('bcrypt')

const UsersController = {
  All: (req, res) => {
    User.find(
    ).then((data) => {
      res.send(data)
    })
  },
  New: (req, res) => {
    console.log(req.body)
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) throw err
      const newUserObj = { username: req.body.username, password: hash, email: req.body.email }
      User.create(
        newUserObj
      ).then((result) => {
        console.log(`NEW ID: ${result._id}`)
        Backlog.create(
          { userId: result._id }
        ).then(() => {
          res.json({ result: "Success" })
        })
      })
    })
  },
  Find: (req, res) => {
    console.log("finding " + req.query.username)
    User.find(
      { username: req.query.username }
    ).then((data) => {
      res.send(data)
    })
  }
}

module.exports = UsersController

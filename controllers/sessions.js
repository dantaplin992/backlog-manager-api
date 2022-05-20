const User = require('../models/users')
const bcrypt = require ('bcrypt')

const SessionsController = {
  New: (req, res) => {
    console.log("chacking credentials... ")
    console.log(req.body)
    User.findOne(
      { username: req.body.username }
    ).then((foundUser) => {
      if(foundUser) {
        console.log("Found user:")
        console.log(foundUser)
        bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
          if (err) throw err
          let message = result ? "Verified" : "Incorrect"
          res.json({ message: message, user: foundUser })
        })
      } else {
        console.log("No user with that name")
        res.json({ message: "no user with that name" })
      }
    })
  },
}

module.exports = SessionsController

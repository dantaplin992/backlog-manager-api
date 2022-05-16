const User = require('../models/users')

function comparePassword(userObj, password) {
  if (userObj.password === password) return true
  return false
}

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
        let message = comparePassword(foundUser, req.body.password) ? "Verified" : "Incorrect"
        res.json({ message: message })
      } else {
        console.log("No user with that name")
        res.json({ message: "no user with that name" })
      }
    })
  },
}

module.exports = SessionsController

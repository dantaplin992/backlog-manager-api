const mongoose = require("mongoose")

const BacklogSchema = new mongoose.Schema({
  userId: String,
  games: [],
})

const Backlog = mongoose.model("Backlog", BacklogSchema)
module.exports = Backlog

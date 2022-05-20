const mongoose = require("mongoose")

const BacklogSchema = new mongoose.Schema({
  userId: String,
  queued: [],
  currentlyPlaying: [],
  finished: [],
})

const Backlog = mongoose.model("Backlog", BacklogSchema)
module.exports = Backlog

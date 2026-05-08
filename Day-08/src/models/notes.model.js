const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
  index:String,
  title : String,
  descryption : String,
})

const noteModel = mongoose.model("notes",noteSchema)

module.exports = noteModel

const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()

module.exports = app

app.use(express.json())

app.post("/notes",async(req,res)=>{
  const {title,descryption} = req.body
  const note = await noteModel.create({
    title,descryption
  })
  res.status(201).json({
    message:"Note created Successfully",
    note
  })
})

app.get('/notes',async(req,res)=>{
  const notes = await noteModel.find()
  res.status(200).json({
    message:"Fetched successfully",
    notes
  })
})
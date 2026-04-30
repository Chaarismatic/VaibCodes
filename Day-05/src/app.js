const express = require("express")
const app = express ()
module.exports = app
const notes = []
app.use(express.json())
app.get("/notes",(req,res)=>{
  res.status(200).json({
    "notes":notes
  })
})
app.post("/notes",(req,res)=>{
  notes.push(req.body)
  res.status(201).json({
    "message":"Created successfully"
    })
})
app.delete("/notes/:index",(req,res)=>{
  delete notes[req.params.index]
  res.status(204).json({
    "message":"Deleted successfully"
  })
})
app.patch("/notes/:index",(req,res)=>{
  notes[req.params.index].descryption = req.body.descryption
  res.status(200).json({
    message:"updated successfully"
  })
})
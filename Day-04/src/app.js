const express = require("express")

const app = express()

module.exports = app

const notes =[]

app.use(express.json())

app.get("/notes",(req,res)=>{
  res.send(notes)
})

app.post("/notes",(req,res)=>{
  notes.push(req.body)
  res.send("Added Successfully")
})

app.delete("/notes/:index",(req,res)=>{
  delete notes[req.params.index]
  res.send("Deleted Successfully")
})

app.patch("/notes/:index",(req,res)=>{
  notes[req.params.index].descryption = req.body.descryption
  res.send("Updated")
})
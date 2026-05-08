const express = require("express")
const app = express()
module.exports = app

const noteModel  = require("./models/notes.model")

app.use(express.json())

app.get("/notes",async (req , res)=>{
  const notes = await noteModel.find()
  res.status(200).json({
    message:"Data fetched successfully",
    notes
  })
})

app.post("/notes",async(req,res)=>{
  const {index,title,descryption} = req.body
  const  note = await noteModel.create({
    index,title,descryption
  })
  res.status(201).json({
    message:"Data Created Successfully",
    note
  })
})

app.patch("/notes/:index",async(req,res)=>{
  const note = await noteModel.findOneAndUpdate(
    {index:req.params.index},
    {descryption:req.body.descryption}
  )
  res.status(200).json({
    message:"Updated Successfully",
    note
  })
})

app.delete("/notes/:index",async(req,res)=>{
  const note = await noteModel.findOneAndDelete(
    {index:req.params.index}
  )
  res.status(204).json({
    message:"Deleted Successfully",
    note
  })
})
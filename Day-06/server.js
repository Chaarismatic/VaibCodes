const app = require("./src/app")
const mongoose = require("mongoose")
require('dotenv').config();

const url = process.env.DB;

app.listen(3000,()=>{
  console.log("Server is running on port 3000")
})

function connectToDb(){mongoose.connect(`${url}day-06`).then(()=>{
  console.log("Connected to Database")
})}
connectToDb()
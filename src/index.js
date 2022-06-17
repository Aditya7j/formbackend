require("dotenv").config();
const express = require("express");
const connect  = require("./configs/db");
const formcontroller = require("./Controller/form.controller")
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(cors());
const PORT = process.env.PORT || 5000


app.use("/form",formcontroller)


app.listen(PORT,async()=>{
    try{
        await connect()
        console.log(PORT)
    }
    catch(err){
        console.log("err")
    }
})
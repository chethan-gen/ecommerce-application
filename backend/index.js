const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
 

const port = process.env.PORT || 3000; // default port to listen on

const MONGO_URI = process.env.MONGO_URI;

const app = express(); 

app.get("/",(req,res)=>{
    res.send("E-commerce backend successfully");
})

mongoose.connect(MONGO_URI)
.then((check) => {
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
}).catch((err) => {
    console.log("The server is not connected");
    console.log(err)
});



const express=require("express");
const connectDB=require("./config/db");

const app=express();

//connect mongoDB
connectDB();

app.get("/",(req,res)=>{
    res.send("server setup");
})


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`port running on ${PORT}`));
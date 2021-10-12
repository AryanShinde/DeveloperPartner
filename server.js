const express=require("express");
const connectDB=require("./config/db");

const app=express();

//connect mongoDB
connectDB();

app.get("/",(req,res)=>{
    res.send("server setup");
})

//middleWare
app.use(express.json({extended:false}));
app.use(express.urlencoded({extended:false}))


//routes setup
app.use("/api/user", require("./routes/api/users"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/profiles", require("./routes/api/profiles"))
app.use("/api/posts", require("./routes/api/posts"))


const PORT=process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`port running on ${PORT}`));
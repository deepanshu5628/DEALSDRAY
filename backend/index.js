const express=require("express");
const app=express();
require("dotenv").config();
const port=process.env.PORT||3000;
const startdb=require("./config");


// starting app 
app.listen(port,()=>{
    console.log("app is running on port ",port);
})

// connecting db 
startdb();

// adding middlwares
app.use(express.json());

// admin router
const adminRoute=require("./Routes/Admin");
app.use("/api/v1/admin",adminRoute);

app.get("/",(req,res)=>{
    res.send("home route");
    res.json({
        success:true,
        message:"home router",
    })
})
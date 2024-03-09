const express=require("express");
const app=express();
require("dotenv").config();
const port=process.env.PORT||3000;
const {startdb,connectcloudinary}=require("./config");
const cors=require("cors");
const fileUpload=require("express-fileupload");

// starting app 
app.listen(port,()=>{
    console.log("app is running on port ",port);
})

// connecting db 
startdb();
// connect cloudinary 
connectcloudinary();

// adding middlwares
app.use(express.json());
app.use(cors());

// file upload 
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
// admin router
const adminRoute=require("./Routes/Admin");
const employeeRoute=require("./Routes/Employee");
app.use("/api/v1/admin",adminRoute);
app.use("/api/v1/employee",employeeRoute);

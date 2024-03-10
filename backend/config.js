require("dotenv").config();
// db
const mongoose=require("mongoose");
let connectdb=async()=>{
    await mongoose.connect(`${process.env.MONGODB}`);
}
 const startdb=()=>{
    connectdb().then(()=>console.log("Connected to db successsfully"))
    .catch((err)=>console.log("err in connectiog to db"));
}

// cloudinary

const  cloudinary = require('cloudinary').v2;
let startcloudinary=async ()=>{
    cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})
}

let connectcloudinary=()=>{
    startcloudinary()
    .then(()=>console.log("connected to cloudinanary"))
    .catch((err)=>{
        console.log("err in connecting to clodinary");
        console.log(err);
    });
}
module.exports={startdb,connectcloudinary};
const mongoose=require("mongoose");

let connectdb=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/dealsdry");
}

 const startdb=()=>{
    connectdb().then(()=>console.log("Connected to db successsfully"))
    .catch((err)=>console.log("err in connectiog to db"));
}

module.exports=startdb;
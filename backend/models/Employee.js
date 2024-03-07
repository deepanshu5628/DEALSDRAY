const mongoose=require("mongoose");

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    mobileNo:{
        type:Number,
        required:true,
    
    },
    designation:{
        type:String,
        enum:["HR","Sales","Manager"],
        required:true,
    },
    gender:{
        type:String,
        enum:["Male","Female"],
        required:true,
    },
    course:{
        type:String,
        enum:["MCA","BCA","BSC"],
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
})

const employee=mongoose.model(("employee",employeeSchema));
module.exports=employee;
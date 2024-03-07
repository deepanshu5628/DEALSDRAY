const admin =require("../models/Admin");
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');
// -------------------------------admin create -----------------------------------------
const admincreate=async(req,res)=>{
    try {
        let {userName,password}=req.body;
        // check if details are empty
        if(!userName||!password){
            return res.json({
                success:false,
                message:"fill all the details",
            })
        }

        // check if userNmae already exist (to stop duplicacy);
        let user=await admin.findOne({userName});
        if(user){
            return res.json({
                success:false,
                message:"userNmae already exist",
            })
        }
        // hash the passowrd 
        let hashedpass=await bcrypt.hash(password,10);

        // create creditanitls
        let newadmin=await admin.create({
            userName:userName,
            password:hashedpass,
        });
        // send responce
        res.status(200).json({
            success:true,
            message:"admin created Successfully",
            data:newadmin,
        })

    } catch (error) {
        console.log("Error in login controller");
        console.log(error);
    }
}


// ------------------------------login-------------------------------------
const login=async (req,res)=>{
    try {
        let {userName,password}=req.body;
        // check if details are empty
        if(!userName||!password){
            return res.json({
                success:false,
                message:"fill all the details",
            })
        }
        // check if user exist with these details
        let userdetails=await admin.findOne({userName});

        if(!userdetails){
            return res.json({
                success:false,
                message:"user details are not valid ",
            })
        }

        // compare the password 
        let result=await bcrypt.compare(password,userdetails.password);
        
        if(!result){
            return res.json({
                success:false,
                message:"invalid password ",
            })
        }

        // genreate a token using jwt
        // create a payload
        let payload={
            userName:userName,
        }
        let token=jwt.sign(payload,process.env.JWT_SECRET);
        
        // send respoce 
        res.status(200).json({
            success:true,
            message:"successfully loged in ",
            token,    
        })
    } catch (error) {
        console.log("Error in login controller");
        console.log(error);
    }
}


module.exports={admincreate,login};
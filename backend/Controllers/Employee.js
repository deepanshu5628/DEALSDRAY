const imageuploader=require("../utils/imageupload");
const employee=require("../models/Employee");
const validator=require("validator");
// -----------------------------create employee ----------------------------------------
const createemployee=async(req,res)=>{
    try {
        // fetch data 
        let {name,email,mobileno,designation,gender,course}=req.body;
        // fetch file 
        // console.log(req.files);
        let image;
        try {
             image=req.files.image;
        } catch (error) {
            return res.status(400).json({
                message:"error while fetchign image",
                success:false,
            })
        }
        // validate data 
        if(!name||!email||!mobileno||!designation||!gender||!course){
            return res.status(400).json({
                success:false,
                message:"fill all the deatils ",
            })
        }
        if(!image){
            return res.status(400).json({
                success:false,
                message:"upload a image ",
            })
        }
        // console.log(image);
        // upload the image to cloudinary 
       let responce;
        try {
         responce=await imageuploader(image,"dealsdry");
       } catch (error) {
        return res.status(400).json({
            success:false,
            message:"error in uploading image to cloudinary",
            data:error.message,
        })
       }
        let imageurl=responce.secure_url;
        // create a new entry in the db 
        let newentry=await employee.create({
            name,email,mobileno,designation,gender,course,image:imageurl
        })

        // send responce
        res.status(200).json({
            success:true,
            message:"entry created successfully",
            data:newentry,
        });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"error in createemployee controller",
            data:error.message
        })
    }
}
// ----------------------------------get all details ------------------------------
const getallemployeedetails=async(req,res)=>{
    try {
        let alldetails=await employee.find({});
        if(!alldetails){
            return res.status(200).json({
                success:true,
                message:"list is empty",
            })
        }
        res.status(200).json({
            success:true,
            data:alldetails,
        })
    } catch (error) {
        return res.json({
            success:false,
            message:"error in createemployee controller",
            data:error.message
        })
    }
}
// --------------------------------delete employee -------------------------------
const deleteemployee=async(req,res)=>{
    let {id}=req.body;
    let user=await employee.findById(id);
    if(!user){
        res.status(300).json({
            success:false,
            message:"user detils not found",
        })
    }
    // delter the user 
    let userdetails=await employee.findByIdAndDelete(id);
    res.status(200).json({
        success:true,
        message:"User deleted",
        data:userdetails,
    })
}
// -----------------------------update -------------------------
const updateemployee=async(req,res)=>{
    try {
        // fetch data form body 
        let {name,email,mobileno,gender,designation,course,id}=req.body;
        let {image}=req.files;
        // check if the deatils are filles or not 
        if(!name||!email||!mobileno||!gender||!designation||!course){
            return res.status(400).json({
                success:false,
                message:"fill all the details",
            })
        }
        if(!image){
            return res.status(400).json({
                success:false,
                message:"upload a image ",
            })
        }
        console.log("in update empoloyee controlelr");

        // upload image to cloudinary 
        let uploadedimage;
        try {
           uploadedimage= await imageuploader(image,"dealsdry");
        } catch (error) {
            res.status(200).json({
                message:"format not supported",
                success:false
            })
        }
        // // check for email validaity
        // if(!validator.isEmail(email)){
        //     return res.status(400).json({
        //         success:false,
        //         message:"Please enter a valid email address",
        //     })
        // }
        // console.log("validator k niceh");
        // check if the email is already present or not 
        // let curremail=await employee.find({email});
        // console.log(curremail);

        // if(!curremail){
        //    return  res.status(401).json({
        //         success:false,
        //         message:"this email id alredy exist in the db ",
        //     })
        // }
        let updateddetails=await employee.findByIdAndUpdate(id,{
            name,email,mobileno,gender,designation,course,image:uploadedimage.secure_url
        },{
            new:true
        }
        )
        
        res.status(200).json({
            success:true,
            message:"Update Successful",
            data:updateddetails
        })
        
    } catch (error) {
        console.log(error);
         return res.status(200).json({
            success:false,
            message:"err in update employee controlelr",
            data:error.message
         })
    }
}

module.exports={createemployee,getallemployeedetails,deleteemployee,updateemployee};
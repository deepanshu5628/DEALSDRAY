const {createemployee, getallemployeedetails,deleteemployee,updateemployee} =require("../Controllers/Employee");
const {islogedin}=require("../middlware/auth");
const express=require("express");
const router=express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });


router.post("/createemployee",islogedin,createemployee);
router.get("/getalldetails",getallemployeedetails);
router.post("/delete",deleteemployee);
router.put("/update",islogedin,updateemployee)



module.exports=router;
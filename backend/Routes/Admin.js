const express=require("express");
const router=express.Router();
const admin=require("../models/Admin");
const{login, admincreate}=require('../Controllers/Admin');



router.post("/login",login);
router.post("/createadmin",admincreate);

module.exports=router;
const express=require("express");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User=require("../models/User");

const router=express.Router();

router.post("/register",async(req,res)=>{
 const hash=await bcrypt.hash(req.body.password,10);
 const user=new User({email:req.body.email,password:hash});
 await user.save();
 res.send("User Registered Successfully");
});

router.post("/login",async(req,res)=>{
 const user=await User.findOne({email:req.body.email});
 if(!user)return res.send("User not found");
 const match=await bcrypt.compare(req.body.password,user.password);
 if(!match)return res.send("Wrong password");
 const token=jwt.sign({id:user._id},"secretkey");
 res.json({token,userId:user._id});
});

module.exports=router;

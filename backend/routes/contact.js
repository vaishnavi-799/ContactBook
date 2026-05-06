const express=require("express");
const Contact=require("../models/Contact");

const router=express.Router();

router.post("/",async(req,res)=>{
 const contact=new Contact(req.body);
 await contact.save();
 res.send(contact);
});

router.get("/:userId",async(req,res)=>{
 const data=await Contact.find({userId:req.params.userId});
 res.send(data);
});

router.delete("/:id",async(req,res)=>{
 await Contact.findByIdAndDelete(req.params.id);
 res.send("Deleted");
});

router.get("/search/:userId/:key",async(req,res)=>{
 const data=await Contact.find({
  userId:req.params.userId,
  name:{$regex:req.params.key,$options:"i"}
 });
 res.send(data);
});

module.exports=router;

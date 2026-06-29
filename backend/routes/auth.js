const express=require("express");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const User=require("../models/User");

const router=express.Router();


router.post("/register", async (req, res) => {

    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
        return res.send("Email already exists");
    }

    const hash = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        email: req.body.email,
        password: hash
    });

    await user.save();

    res.send("User Registered Successfully");
});

router.post("/login", async (req, res) => {

    console.log(req.body);

    const user = await User.findOne({ email: req.body.email });

    console.log(user);

    if (!user) return res.send("User not found");

    const match = await bcrypt.compare(req.body.password, user.password);

    console.log("Match:", match);

    if (!match) return res.send("Wrong password");

    res.json({ token: jwt.sign({ id: user._id }, "secretkey"), userId: user._id });
});

module.exports=router;

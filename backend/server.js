const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);

// 👇 Add this here
app.get("/", (req, res) => {
    res.send("ContactBook API is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
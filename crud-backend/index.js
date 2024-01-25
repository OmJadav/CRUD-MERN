const dotenv = require("dotenv")
dotenv.config()
const process = require("process")
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const url = process.env.MONGO_URL
let port = process.env.PORT;

//schema
const employee = require("./models/empSchema")
const user = require("./models/userSchema")
//routes
const router = require("./routes/allroutes")

let cors = require("cors")
app.use(cors());
app.use(express.json())
app.use(router);


app.listen(port, (req, res) => {
    console.log(`Server is Running On port ${port}...🔥`);
})


mongoose.connect(url).then(() => {
    console.log("MongoDB connection Successfully..💹")
}).catch((error) => {
    console.log("MongoDB connection Failed..❌", error)
})











const express = require("express")
const router = express.Router();
const employee = require("../models/empSchema")
const user = require("../models/userSchema")


router.post("/addemp", async (req, res) => {
    console.log(req.body);
    const { name, email, phone, role, salary, doj, address } = req.body

    try {
        const already = await employee.findOne({ phone: phone });
        if (already) {
            res.status(400).json("This Employee already in Database!!!")
        } else {
            const addemp = new employee({ name, email, phone, role, salary, doj, address });
            await addemp.save();
            res.status(201).json("New Employee Added Successfully!")
        }

    } catch (error) {
        res.status(400).json("Adding employee error...", error)
    }
})

router.get("/allemp", async (req, res) => {
    try {
        const getemp = await employee.find({})
        // res.status(201).json(getemp)
        res.send(getemp)
    } catch (error) {
        res.status(400).json("Getting All employee error....", error)
    }

})

router.post("/signup", async (req, res) => {
    console.log(req.body);

    const { name, email, password } = req.body

    try {
        const already = await user.findOne({ email: email });
        if (already) {
            res.status(400).json("User Already exists")
        } else {
            const newuser = new user({ name, email, password });
            await newuser.save()
        }
    } catch (error) {
        res.status(400).json("Signup Error...", error)
    }
})


router.get("/view/:empid", async (req, res) => {
    const { empid } = req.params;
    console.log(empid);
    try {
        const response = await employee.findOne({ _id: empid })
        res.send(response);
    } catch (error) {
        res.status(400).json("View By id Error...", error)
    }
})

router.post("/edit/:empid", async (req, res) => {
    const { empid } = req.params;
    const { name, email, phone, role, salary, doj, address } = req.body;
    const updateDetails = { name, email, phone, role, salary, doj, address }
    console.log(empid);
    try {
        const response = await employee.updateOne({ _id: empid }, updateDetails);
        // res.send(response);
        res.status(201).json("Employee Updated Successfully!")

    } catch (error) {
        res.status(400).json("Edit By id Error...", error)
    }
})

router.post("/login", async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    try {
        const userfound = await user.findOne({ email: email, password: password })
        if (userfound) {
            const temp = { name: userfound.name, email: userfound.email, isAdmin: userfound.isAdmin, _id: userfound._id, }
            res.status(201, temp).json("User Logged in")
        } else {
            res.status(400).json("User Not Exists")
        }


    } catch (error) {
        res.status(400).json("Login Error...", error)
    }

})


module.exports = router;
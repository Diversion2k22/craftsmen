const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        console.log(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });
        if (!user) {
            res.status(401).json("Wrong Username!!!");
        }

        const hashedPswd = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);

        const pwd = hashedPswd.toString(CryptoJS.enc.Utf8);
        if (pwd !== req.body.password) {
            res.status(402).json("Wrong Password!!!");
        }

        const accessToken = jwt.sign(
            {
                id: user._id,
                is: user.isAdmin,
            },
            process.env.JWT_SEC, 
            {
                expiresIn: "3d"
            }
        );

        const {
            password,
            ...others
        } = user._doc;

        res.status(200).json({...others, accessToken});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
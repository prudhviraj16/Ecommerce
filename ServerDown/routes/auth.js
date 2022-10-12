const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


router.post("/register",async(req,res)=>{
    console.log(req.body)
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : await bcrypt.hash(req.body.password, 13)
    })

    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }
    catch(err){
         res.status(500).json(err)
    }
})


router.post("/login",async(req,res)=>{

    try{
        const user = await User.findOne({email : req.body.email})
        if(user){
            const isMatch = await bcrypt.compare(req.body.password, user.password)
            
            const {password,...others} = user._doc
            if(isMatch){
                const accessToken = jwt.sign({
                    id : user._id,
                    isAdmin : user.isAdmin
                },"mysecretKey",{expiresIn : "3d"})

                
                res.status(200).json({...others,accessToken})
            }
            else{
                res.status(400).json("Check the credential once again")
            }
        }else{
            res.status(400).json("User not found")
        }
    }
    catch(err){
        res.status(400).json(err)
    }
})

module.exports = router
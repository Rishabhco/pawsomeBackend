const User = require('../models/userModels.js')

const home=(req,res)=>{
    console.log("Hello this is backend server of Pawsome for haker Senpai");
    res.status(200).send("Hello this is backend server of Pawsome for hacker Senpai");
}

const createUser=async(req,res)=>{
    const user=new User(req.body)
    try{
        const token=await user.generateAuthToken()
        await user.save()
        res.status(201).send("User has been created !!!")
     }catch(error){
        res.status(400).send(error)
    }
}

const login =async(req,res)=>{
    try{
        const user=await User.findByCredentials(req.body.username,req.body.password)
        const token=await user.generateAuthToken()
        res.status(200).send({user,token})
    }catch(error){
        res.status(400).send(error)
    }    
}

const readUser=async(req,res)=>{
    try{
        res.status(200).json({
            status: true,
            message: "Here is your profile",
            errors: [],
            data: req.user,
          });
    }catch(error){
        res.status(400).json({
            status: false,
            message: "Unable to fetch your profile",
            errors: error,
            data: {},
          });
    }
}

const logout =async(req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((token)=>{
            return token.token !==req.token
        })
        await req.user.save()
        res.send("You have been successfully logged out !!!")
     }catch(error){
        res.status(500).send("Error Occured !!! The error is :",error)
     }
}

module.exports={
    login,logout,home,createUser,readUser
}
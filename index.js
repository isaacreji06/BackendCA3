const express=require("express")
const app=express()
const jwt=require("jsonwebtoken")
const userArray=[{
    username:"Admin",
    password:"password123"
}]
require("dotenv").config()
app.use(express.json())
app.post("/login",(req,res)=>{
    try{
        const{username,password}=req.body;
        // console.log(username)
        // console.log(password)
        const findUser=userArray.find(user=>user.username==username)
        if (!findUser){
            return res.status(404).json({message:"User not found"})
        }
        if (findUser.password!==password){
            return res.status(409).json({message:"incorrect password"})
        }
        const token=jwt.sign({username},process.env.jwtSecret,{expiresIn:"10m"})
        res.status(200).json({message:"user logged in successfully",token})
    }
    catch(er){
        return res.status(500).json({message:"internal server error",error:er.message})
    }
})

app.get("/dashboard",(req,res)=>{
    try{
        const token=req.header("Authorization")
        // console.log(token)
        if(!token){
            return res.status(401).json({message:"unauthorized"})
        }
        return res.status(200).json({message:"Welcome to your dashboard"})
    }
    catch(er){
        return res.status(500).json({message:"internal server error",error:er.message})
    }
    // const jwtToken=token.split(" ")[1]
    // const verifiedToken=jwt.verify(jwtToken,process.env.jwtSecret)
})

app.listen(8000,()=>{
    console.log("the app is listening at the port 8000")
})
import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from ""
const app=express();
const SECRET="sometext";
app.listen(8080,()=>{
    console.log("server started");
})

const users=[
    {
    name:"jhon",
    email:"jhon@email.com",
    password:"1234",
    roel:"admin"
    },
    {
    name:"cathy",
    email:"cathy@email.com",
    password:"1234",
    roel:"admin"
}
];
app.use(express.json());

const authenticate=(req,res,next)=>{
    try{
        let token=req.headers.authorization;
        token=token.split(" ")[1];
        const user=jwt.verify(token,SECRET)
        req.role=user.role
        next();
    } catch (err){
        return res.json({message: "Access Denied"})
    }
};

const authorize=(role)=>{
    return (req,res,next)=>{
        if(req.role===role){
            next();
        }
        else{
            return res.json({message: "Unauthorized Access"});
        }
    };
};

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    const found=users.find(
        (user)=>user.email===email && user.password===password
    );
    if(found){
        const token=jwt.sign(found,SECRET,{expiresIn: "1h"});
        res.status(200).json({user: found,token});
    }
    else{
        res.send(400).json({message:"Access Denied"});
    }
})
app.get("/user",authenticate,authorize("admin"),(req,res)=>{
    res.json(users);
})
app.post("/register",(req,res)={
    // const {name,email,password,role}=req.body;
    // const hashedpwd
})
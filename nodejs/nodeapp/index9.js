import express from "express";
import jwt from "jsonwebtoken";
const app=express();
const SECRET="sometext";
app.listen(8080,()=>{
    console.log("server started");
})

const user=[
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
app.post("/login",(req,res)=>{
    const {email,password}=req.body();
    const found=user.find(
        (user)=>user.email===email && user.password===password
    );
    if(found){
        const token=jwt.sign(user,SECRET);
        res.status(200).json({user: found,token});
    }
    else{
        res.send(400).json({message:"Access Denied"});
    }
})
import express from "express";

const Router=express.Router();

Router.get("/show",(req,res)=>{
    res.send("show users");
});
Router.post("/register",(req,res)=>{
    res.send("register user");
});
Router.post("/login",(req,res)=>{
    res.send("login user");
});

export default Router;
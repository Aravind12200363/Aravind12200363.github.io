import express from "express";

const Router=express.Router();

Router.get("/show",(req,res)=>{
    res.send("Show products");
});
Router.delete("/:id",(req,res)=>{
    res.send("delete product no: "+req.params.id);
});

export default Router;
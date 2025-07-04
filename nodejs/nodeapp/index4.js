import express from "express"
const app=express();
app.listen(8080,()=>{
    console.log("server started");
});

const logger=(req,res,next)=>{
    req.msg="Hello";
    next();
}

// app.use(logger);

// app.get("/",(req,res)=>{
//     res.send(req.msg+" "+"World");
// });

const auth=(req,res,next)=>{
    const name=req.params.name;
    if(name=="Aravind"){
        req.msg="Hello";
        next();
    }
    else{
        res.send("Access Denied");
    }
};

app.get("/:name",auth,(req,res)=>{
    res.send(req.msg+" "+req.params.name);
})


app.get("/products",logger,(req,res)=>{
    res.send(req.msg+" "+"Product");
})
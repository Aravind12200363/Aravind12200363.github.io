import express from "express";
const app=express();
app.listen(8080,()=>{
    console.log("server is running on port 8080");
});

app.use(express.json());
// let products=[];
// app.post("/",(req,res)=>{
//     const { id, name,price}=req.body;
//     const obj={
//         id,
//         name,
//         price
//     };
//     products.push(obj);
//     res.json({message: "Products created"});
// });


// app.get("/",(req,res)=>{
//     res.json(products);
// });

// app.delete("/:id",(req,res)=>{
//     const id=req.params.id;
//     products=products.filter((products)=>products.id!==id);
//     res.json("Product Deleted");
// })

let users=[];
// const auth=(req,res,next)=>{
//     if(req.headers.authorization===""){
//         res.json({message: ""})
//     }
// }
app.post("/register",(req,res)=>{
    users.push(req.body);
        res.json({message: "User created"});
});

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    const found=users.find((user)=>user.email=== email && user.password===password);
    if(found){
        res.json({message: "Welcome "+found.name});
        
    }
    else{
        res.json({message: "Acess Denied"});
    }
});

app.get("/",(req,res)=>
{
    res.json(users);
});



import express from "express"
const app=express();
app.listen(8080,()=>{
    console.log("server is running on port 8080");
});
// app.get("/",(req,res)=>{
//     res.send("welcome to home page  ");
// });
// app.get("/user",(req,res)=>{
//     res.send("Hello User");
// });
// app.get("/ab*cd",(req,res)=>{
//     res.send("Hello world");
// });
const products=[
        {id:1,name:"Product 1",price:45},
        {id:2,name:"Product 2",price:55},
        {id:3,name:"Product 3",price:65}
    ];

app.get("/products",(req,res)=>{
    res.json(products);
});
app.get("/products/:id",(req,res)=>{
    const pid=req.params.id;
    res.json(pid);
})
// app.get("/students/:name",(req,res)=>{
//     res.send(req.params.name);
// });
// app.get("/students/:name/age/:age",(req,res)=>{
//     res.send(req.params.name+" "+req.params.age);
// });

// app.get("/",(req,res)=>{
//     res.send(req.header.authorization);
// });

// app.get("/",(req,res)=>{
//     res.send(req.query.name+" "+req.query.age);
// })
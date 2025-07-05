
import express from "express"
const app = express();
const port=process.argv[2] || 8080;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
// const stName1=process.argv[2] || "jhon"
// const stName2=process.argv[3] || "jhon"
// console.log(`Hello ${stName1} and ${stName2}`);

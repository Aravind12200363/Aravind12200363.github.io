//promises
// function f1(){
//     return new Promise((resolve,reject)=>{
//         resolve(5);
//         reject("Something went wrong");
//     });
// }
// function f2(x){
// console.log(x+2);
// }
// f1()
// .then((n)=>f2(n))
// .catch((err)=>console.log(err))


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=> res.json())
//     .then((data)=>{
//      data.map(value=>{
//         console.log(value.name," ",value.email)
//      })
//     })
//     .catch((err)=>console.log(err))

const fetchData = async()=>{
    const res= await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await res.json();
    data.map(value=>{
        console.log(value.name," ",value.email)
    })


}
try{
fetchData();
}
catch(err){
    console.log(err)
}
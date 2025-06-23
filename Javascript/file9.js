const score=[2,1,7,5,3];
// score.forEach((value)=>{
//     console.log(value);
// });
// // console.log(a);
// score=score.map((value)=>{
//     return value>2;
// });
// console.log(score);

// const newscore=score.find((value)=>{
//     return value>2;
// });
// console.log(newscore);


// const newscore=score.filter((value)=>{
//     return value>2;
// });
// console.log(newscore);


// const newscore=score.reduce((sum,value)=>{
//     return sum+value;
// },0);
// console.log(newscore);

const newscore=score.filter((value)=>value==2);
console.log(newscore);



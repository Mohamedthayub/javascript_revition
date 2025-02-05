// const p  =new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("this is resolved");
//     },3000)
// })

// function getData(){
//     console.log("thayub");
//     p.then((res)=>{
//         console.log(res);
//     })
// }
// getData();

// first thayub prints then the promise prints this is without async function deos
// const p2 = new Promise((resolve,reject) =>{
//     setTimeout(() =>{
//         resolve("this is await method");
//     },3000);
// })
// async function getdata(){
//     const res = await p2;
//     console.log("this is thayub");
//     console.log(res);
 
// }
// getdata();

// const pro = new Promise((resolve,reject)=>{{
//     setTimeout(() => {
//         resolve("Promise Resolved Value");
//     },3000)
// }})
// function getData(){
//     pro.then((res)=>{
//         console.log(res);
//     })
//     console.log("Namasthe javascript");
// }
// getData(); //  here first the namasthe javascript will print then the promise will print.
/* if i include async and await with that promise the print 
statement will execute after promise this the diffrence between async and await keyword does

*/
const pro2 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        resolve("this is second promise");
    },3000);
})
async function getData2(){
    let result =  await pro2;
    console.log(result);
    console.log("Namaste Javascript 2");

    
}
getData2();


// function getData(dataId, getNextData){
//     setTimeout (() => {
//         console.log("data",dataId);
//         if(getNextData()){
//             getNextData();
//         }
//     },2000);
// }
// getData(1,()=>{
//     console.log("getting data 2")
//     getData(2,()=>{
//         console.log("getting data  3");
//         getData(3,()=>{
//             console.log("getting data 4");
//             getData(4,()=>{   
//                 console.log("gettting data 5");
//                 getData(5,()=>{

//                 })

//             })
//         })
//     })
// })
// //  This is callback hell  

// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         reject("this promise is done");
//     })
    
// }
// let result = getPromise();
// result.then( ()=>{
//     console.log("promise done");
// })
// .catch((error)=> {
//     console.log("there is a error");
// })


function asynfunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("some detal");
            resolve("success");

        },4000);
    })

}
console.log("fetching data");
let res = asynfunc();
res.then((res)=>{
    console.log(res);
})
res.catch((error)=>{
    console.log("there is some to fethcing data from the server",error);
})
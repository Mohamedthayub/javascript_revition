// const pr = new Promise((resolve,reject) => {
//     resolve("this promise resolved inside function");
// });

// async function getData(){
//     const val = await pr;
//     console.log(val);
// }
// getData();

const pr = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("the promise resolved");
    },3000);
})

// async  function  getData(){
//     console.log("this is something");
//     const val = await pr;
//     console.log(val);
   
// }
// getData();
pr.then(res => {
    console.log(res);
    console.log("this is heading");
    
})
.catch(err => {
    console.log(err);
})
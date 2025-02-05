const prom1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve("promise 1 success");
    },2000);

})
const prom2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise 2 success");
    },1000);
})

const prom3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise 3 success");
    },3000);
})
Promise.all([prom1,prom2,prom3])
  .then((message) => {
    console.log("All promise resolved");
    message.forEach((message,index)=>{
        console.log(`Promise ${index + 1} : ${message}`)
    })
  })
.catch((error) => {
    console.log(error);
})

/*
In this exercise, we will use Promise.all to run multiple promises in parallel. This method is useful when you need to wait for several asynchronous operations to complete before proceeding.
*/
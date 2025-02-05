const firstPromise = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("first promise resolved")
    },1000);
})
const secondPromise = firstPromise.then((res) => {
    console.log(res);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("second promise resolved");
        },1000);
    })
})
secondPromise.then((res) => {
    console.log(res);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("third promise is resolved");
        },1000);
    })
})
.then((result2)=>{
    console.log(result2);
})
.catch((err) => {
    console.log(err);
})
/*
In this exercise, we will chain multiple promises together. Chaining promises allows you to execute a sequence of asynchronous operations in a specific order, where each operation depends on the result of the previous one.
*/
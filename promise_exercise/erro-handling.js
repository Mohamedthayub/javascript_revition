const promise = new Promise((resolve,reject)=> {
    setTimeout(() => {
        reject("this promise has been rejected")
    },3000);
})

promise.then((message) => {
    console.log(message);
})
.catch((err) => {
    console.log(err);
})

promise.then((message2) => {
    console.log(message2);
})
.catch((err) => {
    console.log(err);
})
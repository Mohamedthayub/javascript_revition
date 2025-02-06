const prom1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise 1 success");
    },3000);
})

const prom2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise 2 success");
    },2000);
})

const prom3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("promise 3 success");
    },1000);
})

Promise.any([prom1,prom2,prom3])
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
})

/*
In this exercise, we will implement Promise.any to get the first fulfilled promise. This method is useful when you want the result of the first successfully resolved promise, regardless of any other rejections.
*/
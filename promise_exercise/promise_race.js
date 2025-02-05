const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p1 Success");
    },2000);  
})
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p2 Success");
    },1000);  
})
const promise3 = new Promise((resolve,reject) => {
    setTimeout( () => {
        resolve("p3 Success");
    },500);
})
Promise.race([promise1,promise2,promise3])
.then((result) => {
    console.log(result)
    .catch((error) => {
        console.log(error)
    })
})


/*
In this exercise, we will use Promise.race to return the first resolved promise. This method is useful when you are interested in the result of the fastest promise, regardless of the other promises' states.
*/
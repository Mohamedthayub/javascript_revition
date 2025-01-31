const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("p1 failed");
    },3000)
})
const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("p2 failed");
    },2000)
})


const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("p3 failed");
    },1000)
})

Promise.race([p1,p2,p3]).then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
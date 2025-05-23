const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p1 success");
    },3000)
})
const p2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("p2 Success");
    },2000)
})


const p3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("P3 Success")
    },1000)
})

Promise.race([p1,p2,p3]).then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
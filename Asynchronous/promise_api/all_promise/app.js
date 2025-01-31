const p1 = new Promise((resolve,reject) => {
    setTimeout( () => {
       resolve("p1 Success");
    },3000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p2 Success");
    },2000)
})
const p3 = new Promise((resolve,reject) => {
    setTimeout( () => {
        resolve("p3 Success")
    },1000)
})
Promise.all([p1,p2,p3]).then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})
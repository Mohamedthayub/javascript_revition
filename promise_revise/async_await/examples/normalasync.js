const pr = new Promise((resolve,reject) => {
    resolve("this is resolved");
})

pr.then(res => console.log(res));
const pr = new Promise((resolve,reject) => {
    resolve("the promise resolved ");

})

async function getData(){
    pr.then((res) => {
        console.log(res);
    })
}

getData();

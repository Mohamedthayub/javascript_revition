const pr = new Promise((resolve,reject) => {
    resolve("this promise resolved inside function");
});

async function getData(){
    const val = await pr;
    console.log(val);
}
getData();
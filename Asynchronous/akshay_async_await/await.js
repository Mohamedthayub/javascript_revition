const p  = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("this is resolve");
    },2000)
})
async function getData () {
    const val = await p;
    console.log(val);
}
getData();

// await is a keyword that can be used only inside the async function 

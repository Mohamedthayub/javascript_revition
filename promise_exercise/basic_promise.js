/*
In this exercise, we will create a simple promise that resolves after 2 seconds. This example will help you understand the basic structure and usage of promises in JavaScript.
*/
const prom = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("this is resolved");
    },2000);
})
async function getData(){
   try{
    const data = await prom;
    console.log(data);
   }
   catch(err){
    console.log(err);
   }
}
getData();


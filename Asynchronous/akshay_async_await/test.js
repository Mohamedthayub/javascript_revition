// const p = new Promise((resolve,reject)=> {
//    setTimeout(() => {
//     resolve("this is resolved by thayub")
//    },3000)
// })
// function getData(){
//     p.then((res) =>console.log(res));
// }
// getData();
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
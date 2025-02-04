// async function getData (){
//     return "Asalamu alaikum Thayub";
// }
// const data = getData();
// data.then((res) => console.log(res))
// .catch((error) => {
//     console.log(error);
// })

const pro = new Promise((resolve,reject) => {
    resolve("this is a promise");
})
async function getData(){
    return pro;
}
const data = getData()
.then((res) => {
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
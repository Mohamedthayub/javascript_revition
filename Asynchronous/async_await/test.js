// function result(num,num2){
//     setTimeout(()=>{
//         console.log(num + num2);
//     },3000);
// }
// function givevalue(num,num2,result){
//     result(num,num2);
// }
// givevalue(12,8,result);



function createOrder(){
    const pr = new Promise(function(resolve,reject){
        if(!validateOrder()){
            setTimeout(() => {
                reject("there is a error");
            },3000)
        }
        else{
            setTimeout(() => {
                resolve("your order has been done");
            },3000)
        }
    })
    return pr;
}
function validateOrder(){
    return true;
}

async function result(){
    var result = await createOrder();
    console.log(result);
    console.log("The async await function works well .. ");
}
result();
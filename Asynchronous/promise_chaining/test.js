const cart = ["pant","Tshirt","Shoes"];

createOrder(cart)
.then(function (orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err){
    console.log(err.message);
});

function createOrder(){
    const pr = new Promise(function (resolve,reject){
        if(!validateOrder()){
            const err = new Error("there is a error in creating cart");
            reject(err);
        }
        const orderId = 124;
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },4000);
        }
    })
    return pr;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    });
}
function  validateOrder(){
    return true;
}
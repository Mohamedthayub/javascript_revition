const cart = ["sheos","pants","kurta"];

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
   return ProceedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err){
    console.log(err.message);
});
function createOrder(){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart){
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderId = 12345;
        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            },5000);
        }
    })
    return pr;

}
function validateCart(){
    return false;
}
function ProceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment succesfull");
    })
}
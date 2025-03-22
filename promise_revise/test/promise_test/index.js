const cart = ["pant","trouser","shirt"];

const promise = createOrder(cart)

promise.then(orderId => {
    // console.log(orderId)
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(paymentinfo){
    console.log(paymentinfo);
})
.catch(err => {
    console.log(err.message);
})
function createOrder(cart){
    const pr = new Promise(function(resolve,reject) {
        if(!validateCart()){
            const err =  new Error("the Cart is not valid");
            reject(err);
        }

        const orderId = 12345;
        setTimeout(() => {
            if(orderId){
                resolve(orderId);
            }
        },5000);

    })
    return pr;
}
function  validateCart(cart){
    return true;
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        // resolve("Payment is Successful");
        resolve("Payment is  Successful");
    })
}
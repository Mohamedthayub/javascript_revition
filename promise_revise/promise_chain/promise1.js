const cart = ["pant","shirt","vesti"];
createOrder(cart)
 .then(function(orderId){
    console.log(orderId);
    return orderId;
 })
 .catch(err => {
    console.log(err.message)
}) 
 .then(function(orderId){
    return proceedToPayment(orderId);
 })
 .then(function(paymentinfo){
    console.log(paymentinfo);
 })
 .then(function(){
    console.log("No matter i will run ");
 })

.catch(err => {
    console.log(err.message);
})
// this is how we should gracefully handle the promise error ;


function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart()){
            const err = new Error("the Cart is not valid");
            reject(err);
        }
        const orderId = 12345;
        if(orderId){
            setTimeout(() =>{
                resolve(orderId);
            },5000);
        }
    })
    return pr;

}
function validateCart(cart){
    return false;
}
function  proceedToPayment(orderId){
    return new Promise((resolve,reject) => {
        resolve("Payment Successful");
    })
}
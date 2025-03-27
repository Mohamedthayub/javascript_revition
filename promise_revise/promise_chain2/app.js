// const cart = ["shoes","pants","kurta"];
const cart = [];
const promise = createOrder(cart);
// console.log(promise);
promise.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(payementinfo){
    console.log(payementinfo);
})
.catch(function(err){
    console.log(err.message);
})
function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("the cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            },3000);
        }
       
    })
    return pr;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment successful");
    })
}
function validateCart(cart){
    return cart.length > 0;
}

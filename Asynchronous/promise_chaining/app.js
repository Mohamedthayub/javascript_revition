// const cart = ["sheos","pants","kurta"];
// const promise = createOrder();
// promise.then(function (orderId){
//     console.log(orderId);
// })
// function createOrder(){
//     const pr = new Promise(function(resolve,reject){
//         if(!validateCart){
//             const err = new Error("cart is not valid");
//             reject(err);
//         }
//         const orderId = 12345;
//         if(orderId){
//             setTimeout(function (){
//                 resolve(orderId);
//             },5000);
//         }
//     })
//     return pr;

// }
// function validateCart(){
//     return false;
// }

createOrder()
.then(function (orderId){
    console.log("your order id is ",orderId);
    return orderId;
})
.then(function (orderId){
    return proceedTopayment(orderId);
})
.then(function (paymentInfo){
    console.log(paymentInfo);
})
.catch(function (err){
    console.log(err.message);
})
.then(function(){
    console.log("No matter what happens");
})

function createOrder(){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart()){
            const err = new Error("the car is not valid");
            reject(err);
            return;
        };
        const orderId = 12345;
        if(orderId){
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
        
    })
    return pr;
    
}

function validateCart(){
    return true;
}
function proceedTopayment(orderId){
    return new Promise(function(resolve,reject){
        resolve("Payment Successful",orderId);
    })
}
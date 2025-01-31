//  createOrder , ProceedToPayment,showorderSummery, updateWallet


createOrder()
.then(function(orderId){
    console.log("successfully your order has been created");
    return orderId;
})
.then(function(amount){
    console.log("payment successful");
    return proceedTopayment(amount);
})
.then(function(amount){
    console.log("you has been created successfully");
    return showorderSummery(amount)
})
.catch(function(err){
    console.log(err.message);
})

function  createOrder(){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart()){
            const err = new Error("the cart is not valid");
            reject(err);
        }
        else{
            const orderId = 1234;
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    })
    return pr;
}
function validateCart(cart = true){
    return cart;
}
function proceedTopayment(orderId){
    const payment = new Promise(function(resolve,reject){
        if(!orderId){
            const err = new Error("payment failed");
            reject(err);
        }
        else{
            setTimeout(function(){
                resolve(orderId);
            },5000);
        }
    })
    return payment
}
function showorderSummery(amount){
    const summary = new Promise(function(resolve,reject){
        if(!amount){
            const err = new Error("payment is not valid");
            reject(err);
        }
        else{
            const sum = `you purchase clothes succesfully ${amount}`;
            setTimeout(function(){
                resolve(sum);
            },5000);
        }
    })
    return summary;
}
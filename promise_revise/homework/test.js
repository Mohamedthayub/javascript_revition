// const orderId = 353434;

// if(orderId !== null && orderId !== undefined){
//     console.log("the orderid is valid");
// }
// else{
//     console.log("the orderid not valid");
// }

// let cart = [];
// if(cart.length > 0){
//     console.log("the cart is valid");
// }
// else{
//     console.log("the cart is not valid")
// }

// const promise = new Promise(function(resolve,reject){
//     let amount = 100;
//     let amount2  = 200;
//     if(amount && amount2){
//        resolve([amount,amount2])
//     }
//     else{
//        reject("this is not valid");
//     }
// })
// promise.then(function([res1,res2]){
//     console.log(res1,res2);
// })
// .catch(function(err){
//     console.log(err);
// })
let cart = ["pant","kurta","tshirt"];


const promise = createOrder(cart);

promise.then(function(orderId){
    return orderId;
})
.then(function(amount){
    return proceedToPayment(amount);
})
.then(function(amount){
    return orderSummary(amount);
})
.then(function({money,summary}){
    return updateWallet(money,summary);
})
.then(function(wallet){
    console.log(wallet);
})
.catch(function(err){
    console.log(err.message);
})

function createOrder(cart){
    return new Promise((resolve,reject) => {
        if(!validateCart(cart)){
            const err = new Error("the cart is not valid");
            reject(err);
        }
        const orderId = 12345;
        setTimeout(() => {
            resolve(orderId)
        },3000);
    })
}
function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){
        if(!validateOrderId(orderId)){
            const err = new Error("the orderId is not valid");
            reject(err);
        }
        const amount = 1000;
        setTimeout(() => {
            resolve(amount)
        },3000);
    })
}
function orderSummary(amount){
    return new Promise(function(resolve,reject){
        if(!validateAmount(amount)){
            const err = new Error("the amount is not valid");
            reject(err);
        }
        const money = amount;
        const summary = "successfully purchased the order";
        setTimeout(() => {
            resolve({money,summary});
        },3000);
    })
}

function updateWallet(money,summary){
    return new Promise(function(resolve,reject){
        if(!validateSummary(summary)){
            const err = new Error("the summary is not valid");
            reject(err);
        }
        setTimeout(() => {
            let purchaseAmount = money; 
            resolve(purchaseAmount);
        },2000);
    })
}
function validateAmount(amount){
    if(amount < 0 || amount  == undefined || amount == null){
        return false;
    }
    else{
        return true;
    }
}
function validateCart(cart){
    if(cart.length > 0){
        return true;
    }
    else{
        return false;
    }
}
function validateOrderId(orderId){
    if(orderId !== null && orderId  !== undefined){
        return true;
    }
    else{
        return false;
    }
}
function validateSummary(summary){
    if(summary == undefined || summary == null){
        return false;
    }
    else{
        return true;
    }
}
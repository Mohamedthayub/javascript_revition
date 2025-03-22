let cart = ["pant", "kurta", "tshirt"];

const promise = createOrder(cart);

promise
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (amount) {
    return orderSummary(amount);
  })
  .then(function ({ money, summary }) { 
    return updateWallet(money, summary);
  })
  .then(function (wallet) {
    console.log(wallet);
  })
  .catch(function (err) {
    console.log(err.message);
  });

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("The cart is not valid");
      reject(err);
    }
    const orderId = 12345;
    setTimeout(() => {
      resolve(orderId);
    }, 3000);
  });
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    if (!validateOrderId(orderId)) {
      const err = new Error("The orderId is not valid");
      reject(err);
    }
    const amount = 1000;
    setTimeout(() => {
      resolve(amount);
    }, 3000);
  });
}

function orderSummary(amount) {
  return new Promise(function (resolve, reject) {
    if (!validateAmount(amount)) {
      const err = new Error("The amount is not valid");
      reject(err);
    }
    const money = amount;
    const summary = "Successfully purchased the order";
    setTimeout(() => {
      resolve({ money, summary }); 
    }, 3000);
  });
}

function updateWallet(money, summary) {
  return new Promise(function (resolve, reject) {
    if (!validateSummary(summary)) {
      const err = new Error("The summary is not valid");
      reject(err);
    }
    setTimeout(() => {
      let purchaseAmount = money;
      resolve(purchaseAmount);
    }, 2000);
  });
}

// Validation functions
function validateAmount(amount) {
  return amount > 0;
}

function validateCart(cart) {
  return cart.length > 0;
}

function validateOrderId(orderId) {
  return orderId !== null && orderId !== undefined;
}

function validateSummary(summary) {
  return summary !== null && summary !== undefined;
}

createOrder(cart)
  .then( orderId => proceedToPayment(orderId))
  .then(paymentInfo => showOrderSummary(paymentInfo))
  .then(paymentInfo => updateWalletBalance(paymentInfo));


//this is how we should chain the function  and this is more readable also 

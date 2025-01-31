setTimeout(function(){
    console.log("this is settimeout")
},3000);
function x (y){
    console.log("this is x");
    y();;
}
x(function y(){
    console.log("this is y");
})
showProductSum(show,[1,2,3,4,5]);
function showProductSum(fun,arr){
    var temp = 1;
    var productSum = 0;
    for(let i = 0; i<arr.length; i++){
        temp = temp * arr[i];
        productSum += temp;
    }
    fun(productSum);
}
function show(num){
    console.log(num)
}


setTimeout(() => {

    console.log("this is settime out function ")
},2000)

var ages = [10,20,30,40];
ages.forEach(final => console.log(final / 2));

/*
any function that is passed as an argument to another function 
that it can be executed in that order function is called as a callback 
function .
*/
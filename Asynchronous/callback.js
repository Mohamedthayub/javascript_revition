function  sumOfvalue(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
}
function calculate(arr,fun){
    fun(arr);
}
calculate([1,2,3,4,5],sumOfvalue);
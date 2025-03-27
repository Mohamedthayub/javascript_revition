function createRandomNum(){
    return Math.floor(Math.random() * 10);
}
console.log(createRandomNum());
console.log(createRandomNum());
console.log(createRandomNum());
console.log(createRandomNum());
console.log(createRandomNum());


function showNum(num){
    console.log(num);
}
function checkEvenOdd(num){
    let result  = (num % 2 == 0) ? "Even Number" : "Odd Number";
    showNum(result);
}
checkEvenOdd(11,showNum);
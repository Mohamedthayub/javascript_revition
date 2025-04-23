// function createRandomNum(){
//     return Math.floor(Math.random() * 10);
// }
// console.log(createRandomNum());
// console.log(createRandomNum());
// console.log(createRandomNum());
// console.log(createRandomNum());
// console.log(createRandomNum());

function showNum(num){
    console.log(num);
}
function oddEven(num,show){
    let result = null;
    if(num % 2 == 0){
        result = "Even number";
    }
    else{
        result = "Odd number";
    }
    show(result);
}
for(let i = 1; i<=100; i++){
    oddEven(i,showNum);
}

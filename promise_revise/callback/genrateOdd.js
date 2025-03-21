function oddNum(show,limit){
    for(let i = 1; i<=limit; i++){
        show(i);
    }
}
function showNum(num){
    console.log(num);
}
oddNum(showNum, 5);


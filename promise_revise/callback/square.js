function change(num,callback){
    let result = [] ;
    for(let i = 1; i<=num; i++){
        result.push(square(i));
    }
    console.log(result);
}
function square(num){
    return num * 2 ;
}

change(5,square);

function  showSum(sum){
    console.log(sum);
}
function doSum (num, showSum){
    let sum = 0; 
    for(let i = 0 ;i <=num; i++){
        sum = sum + i;
    }
    showSum(sum);
}


doSum(4,showSum);


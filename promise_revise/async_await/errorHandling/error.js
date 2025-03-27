try{
    let num  = 12;
    if(num % 2 == 0){
       const err =  new Error("the number is divide by 2")
       console.log(err);
    }
}
catch(err){
    console.log(err);
}
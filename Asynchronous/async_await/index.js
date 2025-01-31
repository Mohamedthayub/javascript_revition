let reachA = new Promise((resolve,reject)=> {
    const reached = false;
    if(reached){
        setTimeout(resolve,3000,"vidya reached");
    }
    else{
        reject("vidya not reached");
    }
})
async function asyncstatus (){
    try{
        console.log("hi");
        let result = await reachA;
        console.log(result);
        console.log("bye");

    }
    catch(err){
        console.log(err);
    }
 
}
asyncstatus();
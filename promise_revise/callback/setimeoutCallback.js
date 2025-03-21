function delayMessage(message,delay,callback){
    setTimeout(() =>{
        console.log(message);
        callback();
    },delay);
}
function show(){
    console.log("time Up thayub");
}

delayMessage("hi thayub this is callback function",5000,show)
const pr = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("this is promise 1");
    },5000);
})

const pr2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("this is promise 2");
    },10000)
})

async function getData(){
    console.log("Hello  World");
    const val = await pr;
    console.log(val);

    const val2 = await  pr2;
    console.log(val2);

}
getData();

/*

when the javascript function  runs the 14 line 
it prints the hello world function  then the js engine suspand the function  afterthat it goes to where it left the execution 
it will wait the first promise to resolve after that the promise get resolve then prints again call stack come to where the code left the
execution it will wait the second promise to resolve then it prints in the console 

this is how javascript function works  behind the scene  


*/
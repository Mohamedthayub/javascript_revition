// const pro1 = new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         resolve("this is resolved");
//     },5000);
// })
// const pro2 = new Promise((resolve,reject) => {
//     setTimeout(() =>{
//         resolve("this is resolved 2 ");
//     },10000);
// })
// async function getPromise(){
//     const promise1 = await pro1;
//     console.log("Namasthe javascript");
//     console.log(promise1);
//     const promise2 = await pro2;
//     console.log("Namasthe javascript 2");
//     console.log(promise2);
// }
// getPromise();


// the result will be both promise be resolved.

let fetchData = new Promise((resolve, reject) => {
    reject('Error fetching data');
  });
  
  fetchData
    .then(data => {
      return processData(data);
    })
    .catch(error => {
      console.log(error);
    })
    .then(results => {
      console.log('Process complete:', results);
    });

    // https://api.github.com/users/
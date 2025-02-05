// const promise = new Promise((resolve,reject)=> {
//     setTimeout(() => {
//         reject("this promise has been rejected")
//     },3000);
// })

// promise.then((message) => {
//     console.log(message);
// })
// .catch((err) => {
//     console.log(err);
// })

// promise.then((message2) => {
//     console.log(message2);
// })
// .catch((err) => {
//     console.log(err);
// })
// Create a promise that simulates an error
const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('An error occurred');
    }, 1000);
});

// Handle the error using .catch() method
errorPromise
    .then((message) => {
        console.log(message); // This won't be executed
    })
    .catch((error) => {
        console.error('Error caught:', error); // Log the error message
    });
    
// Another way to handle errors using .then() second parameter
errorPromise
    .then((message) => {
        console.log(message); // This won't be executed
    }, (error) => {
        console.error('Error caught using then second parameter:', error); // Log the error message
    });
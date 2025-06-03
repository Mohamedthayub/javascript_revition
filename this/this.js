"use strict";

function x(){
    console.log(this);
}
window.x(); 

// this keyword depends on how you call the function 
// if you call the function in strict mode the value would be undefined 

// otherwise if you call the function in non strict the value would be window 

// and if you call the function in strict mode with  window.x() the value would be window
 
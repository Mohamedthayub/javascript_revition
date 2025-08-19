"use strict"
function call(){
    console.log(this);
}
call(); // if you call this function  using strict mode the output will be undefined
window.call();  // if you call the function using window object the output will be window object

const  student = {
    name : "Mohamed",
    printName:function() {
        console.log(this); // the value of this keyword would be object

    }
}

const student2 = {
    name : "Thayub"
} 

student.printName.call(student2);


// this inside nested arrow function  

const number = {
    a : 20, 
    x : function(){
        // enclosing  lexical context 
        const y = () => {
            console.log(this)
        }
        y();
    }
    
}
number.x();

// this inside arrow function  
const obj = {
    age : 19,
    fun : () => {
        console.log(this);
    }
}
obj.fun();

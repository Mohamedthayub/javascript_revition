


createUser()
  .then(function(name){
    return userAge(name);
  })
  .then(function(age){
    return age;
  })
  .then(function(userAge){
    console.log(userAge);
  })
  .catch(function(err){
    console.log(err.message);
  })
  

function createUser(){
    return new Promise(function(resolve,reject){
        let name = "thayub";
        if(!validateName(name)){
            setTimeout( () =>{
                const err = new Error("the Name is not valid");
                reject(err);
            },3000);
        
        }
        setTimeout(() => {
            resolve(name);
        },3000)
    })
}
function  userAge(){
    return new Promise(function(resolve,reject){
        let age = 19;
        if(!validateAge(age)){
            const err = new Error("Age is not vallid");
            reject(err);
        }

        setTimeout(() => {
            resolve(age);
        },3000);
    })
}
function validateAge(age){
    return age > 18;
}

function validateName(name){
    return name.length > 0;
}
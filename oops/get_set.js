class Temprature{
    constructor(temp){
        this._temp = temp;
    } 
    get temp(){ // get is a function to access properies of the object
        return this._temp;
    }
    set temp(temp){
        this._temp = temp;
    }
}

const temp1  = new Temprature(25);

temp1._temp = 120;  //  i can also modify value like this 
console.log(temp1.get)
console.log(temp1.temp);
// const obj = {
//     firstName : "Mohamed",
//     lastname : "Thayub",

//     get fullname() {
//         return   this.firstName + " " + this.lastname;
//     }
// }
// console.log(obj.fullname);
class Parents{
    constructor(name,age){
        this.name  = name;
        this.age = age;
    }
    showName(){
        console.log("My name is ",this.name);
    }
    showAge(){
        console.log("My age is ",this.age);
    }
}

class Children extends Parents{ // this is we extend class from parent and this is inheritance  
    constructor(name,age,hobby){
        super(name,age); // the super says to  parent class to store name and age 
        this.hobby = hobby;
    }
    showName(){
        console.log(this.name +" " + "is my name"); // this is how we overide methods . it called method overriding in oops
        return this;
    }
    showHobbie(){
        console.log("my hobbiee is something..",this.hobby);
    }

}


const children = new Children("thayub",12,"coding");
const children2  = new Children("mohamed",20,"football");

children.showName().showHobbie();// this is method chaining . if we  have to acheive this we should return the this keyword in method

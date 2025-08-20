class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showname(){
        console.log("My name is ",this.name);
    }
    showAge(){
        console.log("My age is ",this.age);
    }
}
const person1 = new Person("thayub",20);
const person2 = new Person("mohamed",10);
person1.showname();
person1.showAge();

person2.showname();
person2.showAge();

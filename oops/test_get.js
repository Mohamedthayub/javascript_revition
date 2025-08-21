class Person{
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    get name() {
        console.log(this.name);
    }
    set name(newName){
        if(newName.length < 3){
            console.log("the name is too short");
        }
        else{
            this._name = newName;
        }

    }
    get age(){
        console.log(this._age);
    }

    set age(newAge){
        if(newAge < 5){
            console.log("The age is too short");
        }
        else{
            this._age = newAge;
        }
    }
}

const p1 = new Person("thayub",12);
const p2 = new Person("mohamed",18);
p1.age = 30;
p1.name = "mohideen";
console.log(p1._name,p1._age);
p2.age = 23
p2.name = "umar";
console.log(p2._name,p2._age);
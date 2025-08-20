class Vehicle{
    static start_count = 0; // this is how we create static variable in inside class. we can only access this with class name 
    constructor(name,year){
        this.name = name;
        this.year = year;
        Vehicle.start_count++; 
    }
    showName(){
        console.log("The vehicle Name is",this.name);
    }
    static showStarts(){
        console.log("check starts",Vehicle.start_check); // this is how we create static methods . we can access only class name
    }
}
const vehicle1 = new Vehicle("audi",2005);
const vehicle2 = new Vehicle("bmw",2003);
const vehicle3 = new Vehicle("benz",2000);
vehicle1.showName();
vehicle2.showName();
vehicle3.showName();
Vehicle.showStarts();


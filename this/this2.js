
let student  = {
    name : "Thayub",
    printName : function() {
        console.log(this.name);
    }
}
let student2 = {
    name : "karthick",
    printName : function (){
        console.log(this.name);
    }    
}

student.printName.call(student2); 






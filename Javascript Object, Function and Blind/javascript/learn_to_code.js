
//var students = [];
//
//function Student(first, last, age) {
//    this.firstName = first;
//    this.lastName = last;
//    this.age = age;
//    this.greeting = function() {
//        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
//    };
//}
//
//students.push(new Student("Jenny","Laga",5));
//students.push(new Student("Timmy","Turner",8));
//students.push(new Student("Carl","Jr",4));
//
////for (var index = 0; index < students.length; index++) {
////   var student = students[index];
////   console.log(student.greeting());
////}
//
//var student = students[0];
//
////for in loop
//for (var key in student) {
//    console.log(student[key])
//}

this.car = "Honda Civic";

var Garage = {
    car: "aston",
    getCar: function() {
        return this.car;
    }
}

console.log(Garage.getCar());

var store = Garage.getCar;
console.log(store());

var therel = Garage.getCar.bind(Garage);
console.log(therel());
// This function uses a ternary operator with input from the browser
function ageFunction() {
    var age = document.getElementById("age").value;
    var canVote = (age >= 18) ? "You are old enough to vote." : "You are not old enough to vote.";
    document.getElementById("vote").innerHTML = canVote;
}

// Constructor function using "this"
function Car(make, model, year) {
    this.Car_Make = make;
    this.Car_Model = model;
    this.Car_Year = year;
}

// Using "new" to create objects
var myCar = new Car("Toyota", "Corolla", 2020);
var sisterCar = new Car("Honda", "Civic", 2022);

// This function displays constructor results in an HTML element
function myFunction() {
    document.getElementById("car_info").innerHTML =
        "My car is a " + myCar.Car_Year + " " + myCar.Car_Make + " " + myCar.Car_Model + ".";
}

// Nested function
function countFunction() {
    document.getElementById("nested_result").innerHTML = count();

    function count() {
        var startingPoint = 5;
        function plusOne() {
            startingPoint += 1;
        }
        plusOne();
        return startingPoint;
    }
}
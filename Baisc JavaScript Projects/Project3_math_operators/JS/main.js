// ADDITION FUNCTION
function addition() {
    var x = 5 + 3;
    document.getElementById("Math").innerHTML = "5 + 3 = " + x;
}

// SUBTRACTION FUNCTION
function subtraction() {
    var x = 10 - 4;
    document.getElementById("Math").innerHTML = "10 - 4 = " + x;
}

// MULTIPLICATION FUNCTION
function multiplication() {
    var x = 6 * 2;
    document.getElementById("Math").innerHTML = "6 × 2 = " + x;
}

// DIVISION FUNCTION
function division() {
    var x = 12 / 3;
    document.getElementById("Math").innerHTML = "12 ÷ 3 = " + x;
}

// MODULUS FUNCTION (% gives remainder)
function modulus() {
    var x = 10 % 3;
    document.getElementById("Math").innerHTML = "10 % 3 = " + x;
}

// INCREMENT FUNCTION (++ adds 1)
function increment() {
    var x = 5;
    x++;
    document.getElementById("Math").innerHTML = "5 incremented = " + x;
}

// DECREMENT FUNCTION (-- subtracts 1)
function decrement() {
    var x = 5;
    x--;
    document.getElementById("Math").innerHTML = "5 decremented = " + x;
}

// RANDOM NUMBER FUNCTION
function randomNumber() {
    var x = Math.random(); // gives number between 0 and 1
    document.getElementById("Math").innerHTML = "Random number: " + x;
}
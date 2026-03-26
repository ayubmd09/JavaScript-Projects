// GLOBAL VARIABLE
var globalNumber = 10;

// FUNCTION WITH LOCAL VARIABLE + IF STATEMENT
function checkNumber() {
    // LOCAL VARIABLE
    var localNumber = 5;

    // IF STATEMENT using both variables
    if (localNumber < globalNumber) {
        document.getElementById("if_result").innerHTML = "Local number is smaller than global number.";
    } else {
        document.getElementById("if_result").innerHTML = "Local number is greater or equal.";
    }
}

// FUNCTION WITH INTENTIONAL ERROR + DEBUGGING
function errorFunction() {
    var x = 5;

    console.log("Value of x is:", x);

    // INTENTIONAL ERROR (y is not defined)
    console.log("Value of y is:", y);

    // This line will not run because of error above
    document.getElementById("error_result").innerHTML = "Check console for error.";
}

// TIME FUNCTION (based on typical class slides)
function Time_function() {
    var time = new Date().getHours();
    var reply;

    if (time < 12) {
        reply = "It is morning.";
    } else if (time < 18) {
        reply = "It is afternoon.";
    } else {
        reply = "It is evening.";
    }

    document.getElementById("time_result").innerHTML = reply;
}
// 1. FUNCTION USING A WHILE LOOP
function runWhileLoop() {
    let i = 1;
    let result = "";

    // Loop from 1 to 5
    while (i <= 5) {
        result += "While Loop Count: " + i + "<br>";
        i++;
    }

    document.getElementById("output").innerHTML = result;
}


// 2. FUNCTION USING A FOR LOOP
function runForLoop() {
    let result = "";

    // Loop from 1 to 5
    for (let i = 1; i <= 5; i++) {
        result += "For Loop Count: " + i + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}


// 3. FUNCTION USING AN ARRAY
function showArray() {
    // Creating an array
    let fruits = ["Apple", "Banana", "Mango", "Orange"];

    let result = "Fruits List:<br>";

    // Loop through array
    for (let i = 0; i < fruits.length; i++) {
        result += fruits[i] + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}


// 4. OBJECT USING LET KEYWORD
function showObject() {
    // Creating an object
    let student = {
        name: "Ayub",
        course: "Software Web Developer",
        college: "AOL"
    };

    let result = "Student Info:<br>";
    result += "Name: " + student.name + "<br>";
    result += "Course: " + student.course + "<br>";
    result += "College: " + student.college;

    document.getElementById("output").innerHTML = result;
}


// 5. COMMENTS INCLUDED THROUGHOUT
// (Already added above each section explaining code)
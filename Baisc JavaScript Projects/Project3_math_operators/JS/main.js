function addNumbers() {
    var x = 10;
    var y = 2;

    var multiply = x * y;
    var divide = x / y;

    document.getElementById("Math").innerHTML =
        x + " × " + y + " = " + multiply + "<br>" +
        x + " ÷ " + y + " = " + divide;
}
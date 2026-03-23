// MAIN FUNCTION TO RUN EVERYTHING
function runAll() {

    // 1. TYPEOF + document.write()
    var x = "Hello";
    document.write("Data type of x: " + typeof x + "<br>");

    // 2. STRING + NUMBER (TYPE COERCION)
    var result = "10" + 5; // string + number = string
    document.write("String + Number: " + result + "<br>");

    // 3. COMPARISON OPERATORS

    // == (loose equality)
    document.write("5 == '5': " + (5 == "5") + "<br>");

    // === (strict equality)
    document.write("5 === '5': " + (5 === "5") + "<br>");

    // > (greater than)
    document.write("10 > 5: " + (10 > 5) + "<br>");

    // < (less than)
    document.write("5 < 10: " + (5 < 10) + "<br>");

    // && (AND)
    document.write("(5 > 2 && 10 > 5): " + (5 > 2 && 10 > 5) + "<br>");

    // || (OR)
    document.write("(5 > 10 || 10 > 5): " + (5 > 10 || 10 > 5) + "<br>");

    // ! (NOT)
    document.write("!(5 > 10): " + !(5 > 10) + "<br>");
}
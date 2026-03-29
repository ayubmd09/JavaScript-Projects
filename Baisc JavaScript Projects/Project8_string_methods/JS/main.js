// This function uses concat() to join two strings together
function fullSentence() {
    var part1 = "I am learning ";
    var part2 = "JavaScript string methods.";
    var wholeSentence = part1.concat(part2);
    document.getElementById("concat").innerHTML = wholeSentence;
}

// This function uses slice() to cut part of a string
function sliceMethod() {
    var sentence = "JavaScript is fun to learn.";
    var section = sentence.slice(0, 10);
    document.getElementById("slice").innerHTML = section;
}

// This function uses toString() to change a number to a string
function stringMethod() {
    var x = 123;
    document.getElementById("numbers").innerHTML = x.toString();
}

// This function uses toPrecision() to format a number
function precisionMethod() {
    var y = 12938.3012987376112;
    document.getElementById("precision").innerHTML = y.toPrecision(10);
}
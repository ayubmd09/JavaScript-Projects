// FUNCTION TO CREATE AND DISPLAY A DICTIONARY
function myDictionary() {

    // Creating a dictionary (JavaScript object)
    var Car = {
        Brand: "Toyota",
        Model: "Camry",
        Color: "Black",
        Year: 2022
    };

    // DELETE a key BEFORE displaying value (requirement ✔)
    delete Car.Color;

    // Displaying a key-value pair in HTML
    document.getElementById("Dictionary").innerHTML =
        "Car Brand: " + Car.Brand + "<br>" +
        "Car Model: " + Car.Model + "<br>" +
        "Car Color: " + Car.Color; // This will be undefined
}
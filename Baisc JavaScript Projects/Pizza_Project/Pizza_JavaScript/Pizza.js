// Function to start building the receipt
function getReceipt() {

    // This will store the order text shown to user
    var text1 = "<h3>You Ordered:</h3>";

    // Total price variable
    var runningTotal = 0;

    // Price for pizza size
    var sizeTotal = 0;

    // Get all size radio buttons
    var sizeArray = document.getElementsByClassName("size");

    // Loop through sizes to find selected one
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {

            // Store selected size
            var selectedSize = sizeArray[i].value;

            // Add selected size to receipt text
            text1 = text1 + selectedSize + "<br>";
        }
    }

    // Set price based on selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    // Add size price to total
    runningTotal = sizeTotal;

    // Call next function for toppings
    getTopping(runningTotal, text1);
}


// Function to handle meat toppings
function getTopping(runningTotal, text1) {

    // Total cost for toppings
    var toppingTotal = 0;

    // Array to store selected toppings
    var selectedTopping = [];

    // Get all topping checkboxes
    var toppingArray = document.getElementsByClassName("toppings");

    // Loop through toppings
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {

            // Add topping to array
            selectedTopping.push(toppingArray[j].value);

            // Add topping to receipt text
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }

    // Count how many toppings selected
    var toppingCount = selectedTopping.length;

    // First topping is free, extra cost applies after that
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    // Add topping cost to total
    runningTotal = runningTotal + toppingTotal;

    // Call next function for vegetables
    getVeggie(runningTotal, text1);
}


// Function to handle vegetable toppings
function getVeggie(runningTotal, text1) {

    // Total cost for vegetables
    var veggieTotal = 0;

    // Array to store selected veggies
    var selectedVeggie = [];

    // Get all veggie checkboxes
    var veggieArray = document.getElementsByClassName("veggies");

    // Loop through veggies
    for (var j = 0; j < veggieArray.length; j++) {
        if (veggieArray[j].checked) {

            // Add veggie to array
            selectedVeggie.push(veggieArray[j].value);

            // Add veggie to receipt text
            text1 = text1 + veggieArray[j].value + "<br>";
        }
    }

    // Count selected veggies
    var veggieCount = selectedVeggie.length;

    // First veggie is free, extra cost applies after that
    if (veggieCount > 1) {
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }

    // Add veggie cost to total
    runningTotal = runningTotal + veggieTotal;

    // Display order details on screen
    document.getElementById("showText").innerHTML = text1;

    // Display total price
    document.getElementById("totalPrice").innerHTML =
        "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
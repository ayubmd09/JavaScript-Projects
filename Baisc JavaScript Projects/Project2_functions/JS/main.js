function showMessage() {
    var text = "Hello.";
    text += " This is my first";          // using += to concatenate
    text += " operator assignment";

    document.getElementById("output").innerHTML = text;
}
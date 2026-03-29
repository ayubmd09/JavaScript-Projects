// This function starts the countdown timer
function countdown() {
    var seconds = document.getElementById("seconds").value;
    var timer = document.getElementById("timer");

    // This function decreases the number every second
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;

        // This repeats the function every 1000 milliseconds
        var time = setTimeout(tick, 1000);

        // This stops the countdown when the number reaches -1
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }

    // This starts the countdown
    tick();
}

// This variable keeps track of the current slide
var slideIndex = 1;
showSlides(slideIndex);

// This function moves to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function shows the selected slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// This function displays the correct slide
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    // If slide number is more than total slides, go back to first slide
    if (n > slides.length) {
        slideIndex = 1;
    }

    // If slide number is less than 1, go to last slide
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";

    // Highlight the current dot
    dots[slideIndex - 1].className += " active";
}
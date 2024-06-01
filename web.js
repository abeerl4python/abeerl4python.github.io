
var slideIndex = 0;
        showSlides();

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("header");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 7000); // Changes image every 7 seconds
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

function scrollToTop() { // scroll to top function
    window.scrollTo({
        top:0,
        behaviour: 'smooth'
    });
}

// for changing the back-grond color of the nav bar when scrolled
document.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// animation of header text
window.addEventListener('load', function() {
    // Get all elements with class 'text'
    var textElements = document.querySelectorAll('.main-heading, .sub-heading, .main-heading1, .main-heading2, .sub-heading1, .sub-heading2, .endure2, .endure1, .endure, .headoverbutton, .headoverbutton1, .headoverbutton2');
    
    // Add the animation class to each element
    textElements.forEach(function(element) {
        element.classList.add('slide-down');
    });
});

 // Function to check if an element is in viewport
 function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  // Function to check if an element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom > 0
    );
}

// Function to add the show class to elements in viewport
function showElementsInViewport() {
    const cards = document.querySelectorAll('.card, .overviewbutton, .universe, .overview h2, .Reviewbar h1, .Reviewbar h2, .signup h2');
    cards.forEach(card => {
        if (isInViewport(card)) {
            card.classList.add('show');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', showElementsInViewport);
// Trigger the function once to show elements already in viewport on load
window.addEventListener('load', showElementsInViewport);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

      

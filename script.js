// Smooth Scrolling for internal navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation for the Contact Us form
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (!name.value || !email.value || !message.value) {
            event.preventDefault();
            alert('Please fill out all fields!');
        }
    });
}

// Registration form validation (check if payment option is selected)
const registrationForm = document.querySelector('#registerForm');
if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
        const paymentMethod = document.querySelector('input[name="payment"]:checked');
        
        if (!paymentMethod) {
            event.preventDefault();
            alert('Please select a payment method');
        }
    });
}

// Google Maps Initialization for Contact Us page
function initMap() {
    var location = { lat: -34.397, lng: 150.644 }; // Coordinates for the map location
    var map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Event listener for window load to initialize the map
if (window.google && window.google.maps) {
    window.onload = initMap;
}

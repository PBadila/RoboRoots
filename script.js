document.getElementById("roboRootsInterest").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get form data
    var formData = new FormData(this);
    
    // Send form data to email using EmailJS
    emailjs.sendForm('service_bchp1a9', 'template_cszopp1', this)
        .then(function(response) {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Error sending email: ' + error);
        });
});

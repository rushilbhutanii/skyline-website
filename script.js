document.addEventListener('DOMContentLoaded', function() {
    // Basic form validation for the contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const phoneInput = document.getElementById('phone');
            const phonePattern = /^[0-9]{10}$/; // 10-digit number

            if (!phonePattern.test(phoneInput.value)) {
                alert('Please enter a valid 10-digit phone number.');
                event.preventDefault(); // Prevent form submission
                phoneInput.focus();
            }
            // You can add more complex validation here if needed
        });
    }

    // You can add other simple JavaScript functionalities here,
    // like a simple image carousel for products (if you decide to implement one),
    // or a "back to top" button, etc.
});
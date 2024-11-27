// Function to handle "Buy Now" button click
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        alert('Thank you for your purchase! We will process your order soon.');
    });
});

// Optionally, you can add a simple form validation for the contact form
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !message) {
        event.preventDefault(); // Prevent form submission if any field is empty
        alert('Please fill out all fields before submitting!');
    } else {
        alert('Thank you for reaching out! We will get back to you soon.');
    }
});

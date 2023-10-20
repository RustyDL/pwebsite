document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        let valid = true;

        if (nameInput.value.trim() === "") {
            alert("Name is required.");
            valid = false;
        }

        if (emailInput.value.trim() === "" || !validateEmail(emailInput.value)) {
            alert("Please enter a valid email address.");
            valid = false;
        }

        if (messageInput.value.trim() === "") {
            alert("Message is required.");
            valid = false;
        }

        if (valid) {
            alert("Form submitted successfully!");
            form.reset(); // Clear the form
        }
    });

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }
});

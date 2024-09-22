document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Basic form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("form-response").innerText = "Thanks for reaching out! I'll get back to you soon.";
    } else {
        document.getElementById("form-response").innerText = "Please fill out all fields.";
    }

    // Clear form
    document.getElementById("contact-form").reset();
});

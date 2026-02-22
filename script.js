const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value;

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        event.preventDefault();
        return;
    }

    if (isNaN(phone)) {
        alert("Phone number must contain only numbers.");
        event.preventDefault();
        return;
    }

    alert("Registration Successful!");
});
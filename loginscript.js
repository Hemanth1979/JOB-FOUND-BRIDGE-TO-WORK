// ===============================
// Job Found - Login Form Validation
// ===============================

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    // Create small elements for error messages
    const userError = document.createElement("small");
    const passError = document.createElement("small");

    userError.style.color = "red";
    passError.style.color = "red";
    userError.style.display = "none";
    passError.style.display = "none";

    usernameInput.insertAdjacentElement("afterend", userError);
    passwordInput.insertAdjacentElement("afterend", passError);

    // Helper function: validate email or phone
    function isValidEmailOrPhone(value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic email
        const phonePattern = /^[6-9]\d{9}$/; // Indian 10-digit mobile
        return emailPattern.test(value) || phonePattern.test(value);
    }

    // Helper function: password strength
    function isStrongPassword(password) {
        // Min 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char
        const strongPass =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return strongPass.test(password);
    }

    // Validate on typing
    usernameInput.addEventListener("input", () => {
        const value = usernameInput.value.trim();
        if (value === "") {
            userError.textContent = "Username is required!";
            userError.style.display = "block";
        } else if (!isValidEmailOrPhone(value)) {
            userError.textContent = "Enter a valid email or 10-digit phone number.";
            userError.style.display = "block";
        } else {
            userError.style.display = "none";
        }
    });

    passwordInput.addEventListener("input", () => {
        const password = passwordInput.value.trim();
        if (password === "") {
            passError.textContent = "Password is required!";
            passError.style.display = "block";
        } else if (password.length < 8) {
            passError.textContent = "Password must be at least 8 characters long.";
            passError.style.display = "block";
        } else if (!isStrongPassword(password)) {
            passError.textContent =
                "Password must include uppercase, lowercase, number, and symbol.";
            passError.style.display = "block";
        } else {
            passError.style.display = "none";
        }
    });

    // On form submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;

        // Username validation
        if (username === "") {
            userError.textContent = "Username is required!";
            userError.style.display = "block";
            isValid = false;
        } else if (!isValidEmailOrPhone(username)) {
            userError.textContent = "Enter a valid email or 10-digit phone number.";
            userError.style.display = "block";
            isValid = false;
        } else {
            userError.style.display = "none";
        }

        // Password validation
        if (password === "") {
            passError.textContent = "Password is required!";
            passError.style.display = "block";
            isValid = false;
        } else if (!isStrongPassword(password)) {
            passError.textContent =
                "Password must have uppercase, lowercase, digit, and special symbol.";
            passError.style.display = "block";
            isValid = false;
        } else {
            passError.style.display = "none";
        }

        // If valid → simulate login success
        if (isValid) {
            alert(`✅ Login successful! Welcome, ${username}.`);
            form.reset();
        }
    });
});

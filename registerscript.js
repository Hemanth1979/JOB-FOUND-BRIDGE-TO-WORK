document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("first_name").value.trim();
  const lastName = document.getElementById("last_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const pincode = document.getElementById("pincode").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
  const pinRegex = /^[0-9]{6}$/;

  if (!firstName || !lastName || !email || !contact || !password || !confirmPassword) {
    Swal.fire("⚠️ Missing Fields", "Please fill all required fields.", "warning");
    return;
  }

  if (!emailRegex.test(email)) {
    Swal.fire("Invalid Email", "Please enter a valid email address.", "error");
    return;
  }

  if (!phoneRegex.test(contact)) {
    Swal.fire("Invalid Contact", "Phone number must be 10 digits.", "error");
    return;
  }

  if (!pinRegex.test(pincode)) {
    Swal.fire("Invalid Pincode", "Please enter a valid 6-digit pincode.", "error");
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire("Password Mismatch", "Passwords do not match.", "error");
    return;
  }

  Swal.fire("✅ Registration Successful!", "Welcome to Job Found!", "success");
  e.target.reset();
});


// 🌍 Get Current Location and Auto-Fill Address
document.getElementById("getLocationBtn").addEventListener("click", () => {
  const locationDisplay = document.getElementById("locationDisplay");
  const mapFrame = document.getElementById("mapFrame");

  if (!navigator.geolocation) {
    locationDisplay.textContent = "❌ Geolocation not supported by your browser.";
    return;
  }

  locationDisplay.textContent = "📍 Getting your location...";

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      locationDisplay.textContent = `✅ Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`;
      mapFrame.src = `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
      mapFrame.style.display = "block";

      // 🌐 Reverse Geocoding with OpenStreetMap Nominatim API
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
        );
        const data = await response.json();
        const address = data.address;

        document.getElementById("country").value = address.country || "";
        document.getElementById("state").value = address.state || "";
        document.getElementById("district").value = address.county || address.city || "";
        document.getElementById("village").value = address.village || address.town || address.suburb || "";
        document.getElementById("pincode").value = address.postcode || "";

      } catch (error) {
        locationDisplay.textContent += " ⚠️ Unable to fetch detailed address.";
      }
    },
    (err) => {
      locationDisplay.textContent = "❌ Unable to fetch location.";
    }
  );
});

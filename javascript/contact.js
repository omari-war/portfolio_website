function submitEmail(e) {
    e.preventDefault(); // prevent default form submission

    // Get form elements using getElementById (assuming unique IDs)
    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    // Create FormData object for easier data handling
    const formData = new FormData();
    formData.append("fname", fnameInput.value);
    formData.append("lname", lnameInput.value);
    formData.append("email", emailInput.value);
    formData.append("phone", phoneInput.value);
    formData.append("subject", subjectInput.value);
    formData.append("message", messageInput.value);

    // Send AJAX request with FormData
    fetch("/php/contact_sub.php", {
        method: "POST",
        body: formData
    })
        .then(response => response.text()) // Parse response as text
        .then(data => {
            alert(data); // Display success message using alert
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later."); // Generic error message
        });
}


document.querySelector("form").addEventListener("submit", submitEmail);  
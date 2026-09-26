 let contactForm = document.getElementById("contactForm");
 contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
 
    let name = document.getElementById("Name").value();
    let email = document.getElementById("Email").value();
    let message = document.getElementById("Message").value();
 
    let errorMessage = document.getElementById("errorMessage");
    let confirmation = document.getElementById("confirmation");
 
    if (name === "" || email === "" || message === "") {
        errorMessage.innerHTML = "Please fill all fields.";
        confirmation.style.display = "none";
    } else if (!email.includes("@")) {
        errorMessage.innerHTML = "Please enter a valid email.";
        confirmation.style.display = "none";
    } else {
        errorMessage.innerHTML = "";
confirmation.innerHTML =
            "<h3>Message Sent Successfully!</h3>" +
            "<p>Thank you, " + name + ". We will get back to you soon.</p>";
        confirmation.style.display = "block";
        contactForm.reset();
    }
});

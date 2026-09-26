 let ContactForm = document.getElementById("ContactForm");

ContactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let Name = document.getElementById("Name").value.trim();
    let Email = document.getElementById("Email").value.trim();
    let Message = document.getElementById("Message").value.trim();

    let errorMessage = document.getElementById("errorMessage");
    let confirmation = document.getElementById("confirmation");

    if (Name === "" || Email === "" || Message === "") {
        errorMessage.innerHTML = "Please fill all fields.";
        confirmation.style.display = "none";
    } else if (!Email.includes("@")) {
        errorMessage.innerHTML = "Please enter a valid email.";
        confirmation.style.display = "none";
    } else {
        errorMessage.innerHTML = "";
        confirmation.innerHTML =
            "<h3>Message Sent Successfully!</h3>" +
            "<p>Thank you, " + Name + ". We will get back to you soon.</p>";
        confirmation.style.display = "block";
        ContactForm.reset();
    }
});
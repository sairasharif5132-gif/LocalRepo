let adoptionForm=document.getElementById("adoptionForm");
adoptionForm .addEventListener("submit", function(event) {
   event.preventDefault();
    let name =document.getElementById("name");
    let email =document.getElementById("email");
    let phone =document.getElementById("phone");
    let address =document.getElementById("address");
    let pet =document.getElementById("pet");
    let reason =document.getElementById("reason");

    let errorMessage =document.getElementById("errorMessage");
    let confirmation =document.getElementById("confirmation");

     if (
        name === "" || 
        email === "" ||
        phone === "" ||
        address === "" ||
        pet === "" ||
        reason === ""
    ) {
        errorMessage.innerHTML = "Please fill all fields.";
        confirmation.innerHTML = "";
    }else if (!email.includes("@")) {
        errorMessage.innerHTML = "Please enter a valid email.";
        confirmation.innerHTML = "";
    }else if (phone.length < 11) {
      errorMessage.innerHTML = "Please enter a valid phone number.";
      confirmation.innerHTML = "";
    }else {
      errorMessage.innerHTML = "";
      confirmation.innerHTML = "";
            "<h2>Adoption Application Submitted Successfully! 🐾</h2>" +
            "<p>Thank you, " + name + ".</p>" +
            "<p>You have applied to adopt <b>" + pet + "</b>.</p>" +
            "<p>We will contact you soon.</p>";
         adoptionForm.reset();
    }
});



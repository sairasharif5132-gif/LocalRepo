let urlParams = new URLSearchParams(window.location.search);
let selectedPet = urlParams.get("pet");
   if (selectedPet) {
   document.getElementById("Pet").value = selectedPet; 
}
let adoptionForm=document.getElementById("adoptionForm");
adoptionForm .addEventListener("submit", function(event) {
   event.preventDefault();
    let name =document.getElementById("Name").value;
    let email =document.getElementById("Email").value;
    let phone =document.getElementById("Phone").value;
    let address =document.getElementById("Address").value;
    let pet =document.getElementById("Pet").value;
    let reason =document.getElementById("Reason").value;

    let errorMessage = document.getElementById("errorMessage");   
    let confirmation = document.getElementById("confirmation");   

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
    }else if (phone.length !== 11 ) {
      errorMessage.innerHTML = "Please enter a valid phone number.";
      confirmation.innerHTML = "";
    }else {
      errorMessage.innerHTML = "";
      confirmation.innerHTML =
            "<h2>Adoption Application Submitted Successfully! 🐾</h2>" +
            "<p>Thank you, " + name + ".</p>" +
            "<p>You have applied to adopt <b>" + pet + "</b>.</p>" +
            "<p>We will contact you soon.</p>";
         adoptionForm.reset();
    }
});



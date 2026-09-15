let loginForm=document.getElementById("LoginForm");
loginForm.addEventListener("submit", function(event) {

   event.preventDefault();

    let email =document.getElementById("email");
    let password =document.getElementById("password");
    let errorMessage =document.getElementById("errorMessage");

if(email===""|| password===""){
    errorMessage.innerHTML="Please enter email and password";
}
else if(!email.value.includes("@")){
     errorMessage.innerHTML="Please enter a valid email";
}
else if (password.value.length < 6) {
     errorMessage.innerHTML="Password must be at least 6 characters";
} 
else {
     errorMessage.innerHTML="Login Successful!";
}
});
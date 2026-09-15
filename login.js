let loginFrom=document.getElementById("LoginFrom");
loginForm.addEventListener("submit", function(event) {
   event.preventDefault();
    let email =document.getElementById("email");
    let password =document.getElementById("password");
    let errorMessage =document.getElementById("errorMessage");
if(email===""|| password===""){
    erroemessage.innerhtml="Please enter email and password";
}else if(!email.includes("@")){
     erroemessage.innerhtml="Please enter a valid email";
}else if (password.length < 6) {
     errorMessage.innerhtml="Password must be at least 6 characters";
} 
else {
     errorMessage.innerhtml="Login Successful!";
}
});
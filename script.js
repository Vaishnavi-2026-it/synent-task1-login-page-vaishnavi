function togglePassword() {
    let password = document.getElementById("password");

    if(password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
}
function showLogin() {
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}

function showSignup() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
}

document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(email === "admin@student.com" && password === "admin123"){
        message.style.color = "green";
        message.innerHTML = "Login Successful!";
    } else {
        message.style.color = "red";
        message.innerHTML = "Invalid Email or Password!";
    }
});
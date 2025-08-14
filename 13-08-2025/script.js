function handleEmailBlur() {
    let emailValue = document.getElementById("email").value.trim();
    let spEmail = document.getElementById("emailError");

    if (emailValue === "") {
        emailError.innerText = "Email is required";
        emailError.style.visibility = "visible";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
       emailError.innerText = "Invalid email format";
        emailError.style.visibility = "visible";
    } else {
        emailError.style.visibility = "hidden";
    }
}

function handlePasswordBlur() {
    let passwordValue = document.getElementById("password").value.trim();
    let passwordError = document.getElementById("passwordError");

    if (passwordValue === "") {
        passwordError.innerText = "Password is required";
        passwordError.style.visibility = "visible";
    } 
    else if(passwordValue.length < 6) {
        passwordError.innerText = "Password must be at least 6 characters";
       passwordError.style.visibility = "visible";
    } 
    
        else {
        passwordError.style.visibility = "hidden";
    }
}

function handleLoginClick() {
    handleEmailBlur();
    handlePasswordBlur();

    let emailErrorVisible = document.getElementById("emailError").style.visibility === "visible";
    let passwordErroVisible = document.getElementById("passwordError").style.visibility === "visible";

    if (!emailErrorVisible && !passwordErroVisible) {
        alert("Login successful!");
    }
}

function login() {
    let userId = document.getElementById("userId").value;
    let password = document.getElementById("password").value;

    if (userId.trim() === "" || password.trim() === "") {
        document.getElementById("status").innerText = "Please enter both fields!";
        return;
    }

    // Store userId in localStorage
    localStorage.setItem("userId", userId);
    document.getElementById("status").innerText = `Logged in as ${userId}`;
}

function logout() {
    // Remove userId from localStorage
    localStorage.removeItem("userId");
    document.getElementById("status").innerText = "Logged out!";
}

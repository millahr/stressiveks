// Funktio ohjaa sivulle password.html
function goToChangePassword() {
    window.location.href = "Password.html";
}

// Funktio ohjaa sivulle modify.html
function goToModifyInfo() {
    window.location.href = "Modify.html";
}

// Lisää tapahtumankäsittelijät painikkeille
document.getElementById("change_password").addEventListener("click", goToChangePassword);
document.getElementById("modify").addEventListener("click", goToModifyInfo);
// Funktio ohjaa sivulle modify.html
function goToModifyInfo() {
    window.location.href = "Modify.html";
}

// Lisää tapahtumankäsittelijät painikkeille
document.getElementById("modify").addEventListener("click", goToModifyInfo);
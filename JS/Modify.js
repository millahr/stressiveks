function redirectToNewFile() {
    // Perform any necessary form validation here
    alert("Tiedot päivitetty.");
    // Redirect to a new file
    window.location.href = "Info.html";
    
    // Prevent the form from submitting normally
    return false;
}
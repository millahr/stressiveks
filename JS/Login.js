function redirectToNewFile() {
    // Perform any necessary form validation here
    alert("Kirjautuminen onnnistui.");
    // Redirect to a new file
    window.location.href = "Home.html";
    
    // Prevent the form from submitting normally
    return false;
}
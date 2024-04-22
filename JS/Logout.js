function redirectToNewFile() {
    // Perform any necessary form validation here
    alert("Kirjauduit ulos onnistuneesti.");
    // Redirect to a new file
    window.location.href = "Login.html";
    
    // Prevent the form from submitting normally
    return false;
}
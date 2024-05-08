function redirectToNewFile() {
    // Perform any necessary form validation here
    alert("Kirjauduit ulos onnistuneesti.");
    // Redirect to a new file
    window.location.href = "index.html";
    
    // Prevent the form from submitting normally
    return false;
}
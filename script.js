
// Function to handle the submission of the form
function submit() {
    // Get the values from the input fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Display the values only when the submit button is clicked
    document.getElementById("output").innerHTML = 
        `Name: ${name}<br> Email: ${email} <br> Message: ${message}`;
}

// Wait for the DOM to be ready before attaching the event listener
document.addEventListener("DOMContentLoaded", function() {
    // Attach the submit function to the submit button
    document.getElementById("submitBtn").addEventListener("click", submit);
});


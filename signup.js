document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let emails = ["shubham1@gmail.com", "ratnesh2@gmail.com", "vinay8@gmail.com"];
confirmPasswords = ["shubham@1", "ratnesh@2", "vinay8@"]
    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (username && email && password) {
        // Here you can submit the form to a server or handle further actions
        alert('Sign up successful!');
    } else {
        alert('Please fill in all fields.');
    }
});

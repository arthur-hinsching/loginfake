document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const userid = document.getElementById('userid').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && userid && email && password) {
        document.getElementById('message').textContent = 'All fields are filled. Thank you!';
    } else {
        document.getElementById('message').textContent = 'Please fill out all fields.';
    }
});
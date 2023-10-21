document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulate a server-side validation using Axios
    axios.post('/api/login', {
      username: username,
      password: password
    })
    .then(function(response) {
      // Successful login, perform necessary actions (e.g., redirect to dashboard)
      window.location.href = '/dashboard.html';
    })
    .catch(function(error) {
      // Failed login, display an error message to the user
      document.getElementById('error-message').style.display = 'block';
      console.error('Login failed:', error);
    });
  });
  

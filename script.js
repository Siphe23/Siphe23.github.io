

  // Text content stored in JavaScript variables
var weAreText = "We're";
var comingSoonText = "coming soon";
var helloText = "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.";
var errorMsgText = "Please provide a valid email";

// Update text content
document.getElementById('weAre').innerText = weAreText;
document.getElementById('comingSoon').innerText = comingSoonText;
document.getElementById('helloText').innerText = helloText;
document.getElementById('errorMsg').innerText = errorMsgText;

// JavaScript for form validation
document.getElementById('emailForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Get input value
  var emailInput = document.getElementById('email');
  var email = emailInput.value;

  // Check if email is valid
  if (!isValidEmail(email)) {
    // Show error message
    document.getElementById('errorMsg').style.display = 'block';
  } else {
    // Hide error message and submit form
    document.getElementById('errorMsg').style.display = 'none';
    this.submit();
  }
});

// Function to validate email
function isValidEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

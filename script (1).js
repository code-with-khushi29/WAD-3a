document.getElementById('regForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Optional: You could even clear the form if needed
    // document.getElementById('regForm').reset();
  
    document.getElementById('msg').textContent = "Form submitted successfully!";
  });
  
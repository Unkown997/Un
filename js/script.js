document.addEventListener("DOMContentLoaded", () => {
  const alertBox = document.getElementById("alert");
  const closeAlertBtn = document.getElementById("closeAlertBtn");
  const closeAlertBtnn =document.getElementById("closeAlertBtnn")
  // Automatically show the alert after the page loads
  setTimeout(() => {
    alertBox.classList.remove("hidden");
    setTimeout(() => alertBox.classList.add("visible"), 200);
  //   alertBox.classList.add("visible");
  }, 500); // Delay in milliseconds, adjust as needed

  // Close the alert when the close button is clicked
  closeAlertBtn.addEventListener("click", () => {
    alertBox.classList.remove("visible");
    setTimeout(() => alertBox.classList.add("hidden"), 500); // Matches the CSS transition duration
  });
  closeAlertBtnn.addEventListener("click", () => {
    alertBox.classList.remove("visible");
    setTimeout(() => alertBox.classList.add("hidden"), 500); // Matches the CSS transition duration
  });
});






document.addEventListener("DOMContentLoaded",doii)
  function doii() {
  // Check if we are on the contact page
  if (window.location.hash === '#contact-page') {
      // const navbar = document.querySelector('.navbar-bottom');
      const navbar =document.getElementById("navbar-bottom") 
      if (navbar) {
       navbar.style.display = 'none'; // Hide the navbar
      }
  }
};




function sendMail(){
  let parms = {
      name : document.getElementById("name").value ,
      email : document.getElementById("email").value ,
      message : document.getElementById("message").value ,
      number : document.getElementById("number").value ,
      subject :document.getElementById("subject").value
  }
   emailjs.send("service_rl6gal5","template_4aka1kb",parms).then(alert("email sent"))
   document.getElementById('contactForm').reset();
}

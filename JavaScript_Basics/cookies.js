 // Redirect to landing page if 'form_submitted' cookie does not exist

 if (get_cookie('secondvisit') === null) {
    window.location.href = "landing.html";
  }

  //Here setTimeout() is a built-in JavaScript function which can be used to execute another function after a given time interval.

  function Redirect() {
    window.location = "https://www.tutorialspoint.com";
  }            

  document.write("You will be redirected to main page in 10 sec.");
  setTimeout('Redirect()', 10000);

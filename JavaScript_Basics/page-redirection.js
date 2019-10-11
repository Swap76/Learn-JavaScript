//A redirect is when a web page is visited at a certain URL, it changes to a different URL.
//This can be done for many reasons like moving your domain to a new one or You have built-up various pages based on browser versions or their names or may be based on different countries.
//Most popular way to redirect to another webpage using JavaScript is location.href and location.replace

function Redirect() {
    window.location = "https://www.google.com";
 }

 //For an auto refresh you would use the following script

 function AutoRefresh( t ) {
    setTimeout("location.reload(true);", t);
 }

 //Please look at the page-redirect.md file to see where you would include these scripts
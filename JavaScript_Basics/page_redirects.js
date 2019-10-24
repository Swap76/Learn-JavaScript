/**
 *
 * JAVASCRIPT PAGE REDIRECTS
 * The file shows various usages of JS methods to facilitate the Page Redirects
 * There are two techniques that are listed here.
 *  i) General JS Page redirects
 *  ii) Auto-refresh of the HTML Pages
 *
 */

// Using the window.location assigned with a DOMString (URL)
window.location = "https://www.example.com";

// Using the href property of the Location object
window.location.href = "https://www.example.com";

// Using the window.location.assign() method
window.location.assign("https://www.example.com");

// Using the window.location.replace() method
window.location.replace("https://www.example.com");

/// ////////////////////////////////////////////////////////////////
/// / Auto-Refresh                                               ///
/// ////////////////////////////////////////////////////////////////

// Using the window.location.reload(forcedReload) method
// The optional parameter forcedReload accepts a boolean value
// If it is set to true, the page is downloaded from the server
// If the value is false, the page is reloaded from cache

// The following code demonstrates the auto-refresh
function autoRefresh (intervalInMilliSeconds) {
  // Using setTimeout()
  setTimeout(window.location.reload(), intervalInMilliSeconds);

  /** ***** OR *******/

  // Using setInterval()
  setInterval(window.location.reload(), intervalInMilliSeconds);
}
// Run the function onload of the page
autoRefresh();

/** ***** OR *******/

// A redirect is when a web page is visited at a certain URL, it changes to a different URL.
// This can be done for many reasons like moving your domain to a new one or You have built-up various pages based on browser versions or their names or may be based on different countries.
// Most popular way to redirect to another webpage using JavaScript is location.href and location.replace

function Redirect () {
  window.location = "https://www.google.com";
}

// For an auto refresh you would use the following script

function AutoRefresh (t) {
  setTimeout("location.reload(true);", t);
}

// Please look at the page-redirect.md file to see where you would include these scripts
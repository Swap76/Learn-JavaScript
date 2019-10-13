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
window.location = 'https://www.example.com';

// Using the href property of the Location object
window.location.href = 'https://www.example.com';

// Using the window.location.assign() method
window.location.assign('https://www.example.com');

// Using the window.location.replace() method
window.location.replace('https://www.example.com');

///////////////////////////////////////////////////////////////////
//// Auto-Refresh                                               ///
///////////////////////////////////////////////////////////////////

// Using the window.location.reload(forcedReload) method
// The optional parameter forcedReload accepts a boolean value
// If it is set to true, the page is downloaded from the server
// If the value is false, the page is reloaded from cache

// The following code demonstrates the auto-refresh
function autoRefresh(intervalInMilliSeconds) {
    // Using setTimeout()
    setTimeout(window.location.reload(), intervalInMilliSeconds);
    
    /******* OR *******/
    
    // Using setInterval()
    setInterval(window.location.reload(), intervalInMilliSeconds);
}
// Run the function onload of the page
autoRefresh();



# JavaScript Page Redirects


### 1. Where are the page redirects used?
JavaScript page redirects are an essential part of any web application and are there on every part of the applications. A few of the many are listed below:
- when an user fills in credentials and clicks the 'Login' button, the user should be `redirected` to the application's login page.
- When an user completes booking the tickets for the movie, on completing the payment the user has to be `redirected` to the confirmation page.
- Onclick of the results of a Google search would take the user to the respective website.
- The list goes on like that.

### 2. How are the `Page Redirects` used?
The Web Api provides us with an interface called `window` that provides us with a lot of functions, variables, constructors that could be used for this purpose. A variable named `window` is exposed to the JavaScript code running in the browser window where the DOM Document is loaded.

`window.location` is a readonly property that returns a `Location` object. The Location object contains properties and methods that are useful for the navigation and page redirects in the webpage. Here are a few ways in which we could use the Location object to perform redirects.

i. Location object DOM String assignment
- Set the location object with a DOMString
    ```
    window.location = 'https://www.example.com';
    ```
ii. Location href property
- Set the `href` property to the URL needed
    ```
    window.location.href = 'https://www.example.com';
    ```
iii. Location.assign( url ) method
- Loads the document at the URL provided to the method
- The previous document would be registered in the `Session History` so that the user could click on the back button of the browser to view the previous page.
- Set the URL in the assign method
    ```
    window.location.assign('https://www.example.com');
    ```
iv. Location.replace( url ) method
- Loads the document at the URL provided to the method
- This method replaces the current document with the document at the URL passed to the replace method of the location object. So the current document would not be stored in the `Session History` and the user cannot use the back button of the browser to view the previous document.
- Set the URL in the replace method
    ```
    window.location.replace('https://www.example.com');
    ```

### 3. Auto-Refresh
This is a special scenario which could be accomplished with a proper usage of a mix of location object and the `setInterval` method of the Window interface. Here is an implementation of it.

- Using setInterval function and window.location.reload()
```
var intervalID;

function reload(forcedReload) {
    // Refresh the Page
    window.location.reload(forcedReload);
}

function scheduleAutoRefresh(intervalInMS) {
    intervalID = setInterval(reload(false), intervalInMS);
}

function stopAutoRefresh() {
    clearInterval(intervalID);
}

// AutoRefresh the page
scheduleAutoRefresh(1000);
```
The `setTimeout` method could be used as well. It runs the function after the set timeout is done.

```
function autoRefresh(timeoutInMilliSeconds) {
    setTimeout(window.location.reload(), timeoutInMilliSeconds);
}
// Onload of the page call the function
autoRefresh();
```
- Using the `meta` element in HTML/XHTML

To acheive the refresh without using JavaScript, the `meta` tag could be used in the `<head>` element of the HTML Page. To achieve the refresh at a certain time interval, set the `http-equiv` attribute to 'refresh' and the `content` attribute is set to a number greater than 0 which is in seconds to achieve a reload of the page. The implementation is as shown below.

```
<html>
    <head>
        <title>The Example Page</title>
        <meta http-equiv="refresh" content="5" />
    </head>
    <body>
        <p>This page would reload at a 5 second interval.</p>
    </body>
</html>
```



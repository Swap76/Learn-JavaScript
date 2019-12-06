# AJAX

AJAX stands for **A**synchronous **J**avaScript **A**nd **X**ML. In a nutshell, it is the use of the XMLHttpRequest object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its "asynchronous" nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.

The two major features of AJAX allow you to do the following:

- Make requests to the server without reloading the page
- Receive and work with data from the server

In a traditional web application, HTTP requests, that are initiated by the user's interaction with the web interface, are made to a web server. The web server processes the request and returns an HTML page to the client. During HTTP transport, the user is unable to interact with the web application.
![alt text](https://www.ibm.com/support/knowledgecenter/SS8PJ7_9.6.1/com.ibm.etools.webtoolscore.doc/images/traditionalWebAppModel.gif "Traditional web application")

In an Ajax web application, the user is not interrupted in interactions with the web application. The Ajax engine or JavaScript interpreter enables the user to interact with the web application independent of HTTP transport to and from the server by rendering the interface and handling communications with the server on the user's behalf.
![alt text](https://www.ibm.com/support/knowledgecenter/SS8PJ7_9.6.1/com.ibm.etools.webtoolscore.doc/images/ajaxWebAppModel.gif "Ajax web application")

Example:
```html
<button id="ajaxButton" type="button">Make a request</button>

<script>
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'test.html');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
</script>
```
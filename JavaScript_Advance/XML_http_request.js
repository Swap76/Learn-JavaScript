/***
 * XMLHttpRequest
 * can be used to retrieve a server side data without having full page refresh
 */

const createXhr = () => {
  return new XMLHttpRequest();
};

// Request
const request = isAbort => {
  const xhr = createXhr();

  // when xhr.send is triggered this function gonna trigger until
  // ready state is equal 4 and status code is equal 200
  // to log all response header
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // all headers
      console.log("all header ==>", this.getAllResponseHeaders());
      // display specific content type
      console.log("specific ==>", this.getResponseHeader("content-type"));
    }
  };

  // parameter open(method, url, async)
  // this function gonna request for server side data
  xhr.open("GET", "https://reqres.in/api/users/2", true);
  xhr.send();

  if (isAbort) {
    xhr.abort();
    console.log("request has been abort");
  }
};

// in this case response header should have display
request();
// in this case response header should havn't display but will display "request has been abort"
request(abort);

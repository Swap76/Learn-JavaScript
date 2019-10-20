# History / Navigator

## History API [MDN](https://developer.mozilla.org/ru/docs/Web/API/History)

Interface manipulates browser history in the session borders

Fields

-   {length} integer amount of elements in session history
-   {state} field stories state existed page

Methods

-   {go} method loads a page from the session history with integer args
-   {back} method goes to the previous page in session history the same as history.go(-1)
-   {forfard} method goes to the next page in session history the same as history.go(1)
-   {pushState} method pushes the given data onto the session history stack with the specified title and, if provided, URL
-   {replaceState} updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL

## Navigator API [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

provides the user-agent information

-   {userAgent} user agent string for the current browser
-   {language} language of the browser UI
-   {languages} list of languages known to the user

Also contains a lot of user-agent information related to:

-   media devices
-   bluetooth
-   usb
-   geo location
    -- etc.

##### {serviceWorker} provides access to registration, removal, upgrade, and communication with service worker

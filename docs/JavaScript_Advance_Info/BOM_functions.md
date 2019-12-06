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

## Screen [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Screen)

```javascript
// Screen data sample:
console.log(screen);
/**
 * {
 *   availHeight: 949,
 *   availLeft: 0,
 *   availTop: 23,
 *   availWidth: 1680,
 *   colorDepth: 24,
 *   height: 1050,
 *   orientation: {angle: 0, type: "landscape-primary", onchange: null}
 *   pixelDepth: 24,
 *   width: 1680,
 * }
 */
```

## Location [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location)

```javascript
// Location data sample
// -> https://developer.mozilla.org/en-US/docs/Web/API/Location?replace=true
console.log(location);
/**
 * {
 *   ancestorOrigins: DOMStringList {length: 0},
 *   assign: ƒ assign(),
 *   hash: "",
 *   host: "developer.mozilla.org",
 *   hostname: "developer.mozilla.org",
 *   href: "https://developer.mozilla.org/en-US/docs/Web/API/Location?replace=true",
 *   origin: "https://developer.mozilla.org",
 *   pathname: "/en-US/docs/Web/API/Location",
 *   port: "",
 *   protocol: "https:",
 *   reload: ƒ reload(),
 *   replace: ƒ (),
 *   search: "?replace=true"
 * }
 */
```

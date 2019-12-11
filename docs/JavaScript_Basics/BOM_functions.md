```js
/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */

// window is the global variable for Browser environment
// to achive it user just need to type window

/**
 * sceen object contains main information about user device screen
 * in modern world sites mostly relate to adaptive layout and rarery use such client information
 * @return {availHeight} height of the screen in pixels without displayed user features (taskbar, etc.)
 * @return {availWidth}  amount of horizontal space in pixels available to the window
 * @return {colorDepth}  color depth of the screen.
 * @return {height}      height of the screen in pixels
 * @return {width}       width of the screen
 * @return {orientation} ScreenOrientation instance with this screen
 * @return {pixelDepth}  bit depth of the screen
 * Not standardized API
 * @return {availLeft}   the first available pixel available from the left side of the screen
 * @return {availTop}    the first available pixel available from the top side of the screen
 */
const {
  availHeight,
  availWidth,
  colorDepth,
  height,
  width,
  pixelDepth,
  orientation,
  availLeft,
  availTop
} = window.screen;

/**
 * window location is object provides interface and API to handle client url
 * @return {assign}   method to manual switch to another url location.assign(path_to_page)
 * @return {reload}   method to manual reload page(forse reload)
 * @return {replace}  method similar to assign
 * @return {hash}     field represent data in URL after #(hash) symbol
 * @return {host}     host value
 * @return {hostname} host-name value
 * @return {href}     path to existed page
 * @return {pathname} string from domen name to the existed page
 * @return {port}     port where page is places
 * @return {protocol} network protocol http/s/2
 * @return {search}   get params of the page
 */
const {
  assign,
  reload,
  replace,
  hash,
  host,
  hostname,
  href,
  pathname,
  port,
  protocol,
  search
} = window.location;

/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-trailing-spaces */

/**
 * History API
 * Interface manipulates browser history in the session borders
 * 
 * Fields
 * @return {length}  integer amount of elements in session history
 * @return {state}   field stories state existed page
 * 
 * Methods
 * @return {go}      method loads a page from the session history with integer args
 * @return {back}    method goes to the previous page in session history the same as history.go(-1)
 * @return {forfard} method goes to the next page in session history the same as history.go(1)
 * 
 * @return {pushState}    method pushes the given data onto the session history stack with the specified title and, if provided, URL
 * @return {replaceState} updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL
 */

window.history.back(); // goes to the previous page or do nothing if the existed page is first
window.history.go(-1); // the same as above

window.history.forward(); // goes to the next page or do nothing if the existed page is last
window.history.go(1);     // the same as above

console.log(window.history.state); // null if not specified for existed page

const stateData = "stateData";
const title = "title"; // ignored FireFox
const url = window.location.href; // url which can be used manually later if needs
window.history.pushState(stateData, title, url);

console.log(window.history.state === stateData); // true

window.history.replaceState(stateData, title, url); // to update existed state


/**
 * Navigator API
 * provides the user-agent information
 * @return {userAgent}  user agent string for the current browser
 * @return {language}   language of the browser UI
 * @return {languages}  list of languages known to the user
 * 
 * Also contains a lot of user-agent information related to:
 *  - media devices
 *  - bluetooth
 *  - usb
 *  - geo location
 *  - etc.
 * 
 * the full list of data is https://developer.mozilla.org/en-US/docs/Web/API/Navigator
 * 
 * @return {serviceWorker} provides access to registration, removal, upgrade, and communication with service worker
 */

// usually is used custom function to define client browser type to specify which features can be used
// mostly for IE
const isIE = () => {
  const isIE11 = navigator.userAgent.indexOf(".NET CLR") > -1;      
  const isIE11orLess = isIE11 || navigator.appVersion.indexOf("MSIE") !== -1;
  return isIE11orLess;
};```
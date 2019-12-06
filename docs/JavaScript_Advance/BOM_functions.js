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
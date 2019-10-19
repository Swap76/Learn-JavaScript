/* eslint-disable no-multi-spaces */
/* eslint-disable no-unused-vars */

// window is the global variable for Browser environment
// to achive it user just need to type window

// sceen object contains main information about user device screen
// in modern world sites mostly relate to adaptive layout and rarery use such client information
const {
  availHeight,
  availLeft,
  availTop,
  availWidth,
  colorDepth,
  height,
  orientation,
  pixelDepth,
  width
} = window.screen;

// window location is object provides interface and API to handle client url
const {
  assign,    /** method to manual switch to another url location.assign(path_to_page) */
  reload,    /** method to manual reload page(forse reload) */
  replace,   /** method similar to assign */
  hash,      /** field represent data in URL after #(hash) symbol */
  host,      /** host value */
  hostname,  /** host-name value */
  href,      /** path to existed page */
  pathname,  /** string from domen name to the existed page */
  port,      /** port where page is places */
  protocol,  /** network protocol http/s/2 */
  search     /** get params of the page */
} = window.location;
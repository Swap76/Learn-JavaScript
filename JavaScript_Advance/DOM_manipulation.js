// DOM manipulation methods for web developers

/**
 * In many cases you may want to manipulate HTML elements on the screen
 * in order to add extra functionalities to a site.
 * 
 * 
 * Here is a few JavaScripts Method that aid DOM manipulation.
 */


 // Query selector
 
 /**
  * Syntax: 
  * 
  */
var elementName = document.querySelector(selectorType);

 /**
  * Query selector gets the first element that matches one or more CSS selectors.
  * If no match is found, it returns null.
  */

/**
 * Example:
 * <div>div one</div>
 * <div>div two</div>
 * <div>div three</div>
 * <p>paragraph one</p>
 * <div>div four</div>
 * <p>paragraph three</p>
 */

var firstDiv = document.querySelector('div');
firstDiv.style.color = 'red';

var firstP = document.querySelector('p');
firstDiv.style.color = 'blue';


 // Query Selector All
 
 /**
  * Syntax: 
  * 
  */
 var elements = document.querySelectorAll(selectorType);

 /**
  * It returns all elements that match the specified CSS selector
  */

/**
 * Example:
 * <div>div one</div>
 * <div>div two</div>
 * <div>div three</div>
 * <p>paragraph one</p>
 * <div>div four</div>
 * <p>paragraph three</p>
 */

var divs = document.querySelectorAll('div');
for(var singleDiv of divs)
singleDiv.style.color = 'blue';

 // Query selectorAll
 
 /**
  * Syntax: 
  * 
  */

 var pElement = document.createElement('p')

 /**
  * It creates a new HTML element using the name of the HTML tag to be created.
  */


// See more at https://www.hongkiat.com/blog/dom-manipulation-javascript-methods/
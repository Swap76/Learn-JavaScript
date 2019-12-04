# DOM Manipulation

## Why is it useful? 
 
 The HTML files that your browser displays is represented by document object model (DOM). This is a "tree structure" representation that enables different programming languages to easily access and modify the HTML document. For example, Javascript developers can access different elements on the page, and modify it depending on user interaction.

Based on the position in the DOM tree, and relative to eachother, nodes can be:

 - **Node:** Any tag in the HTML document is represented as a node in the DOM.
 - **Root node:** This is the top node in the tree, usually the `HTML` node.
 - **Parent node:** A node, that has another node inside it. The `HTML` element is the parent of the `BODY`. 
 - **Child node:** A node directly inside another node. The `BODY` is the child of `HTML`.
 - **Sibling node:** A node that has the same parent node. For example, `BODY` and `HEAD` are sibling, because both are children of `HTML`.

Example scenarios, that can be solved using DOM manipulation:

 - Update the text content of a `<span>` element
 - Create a new list item when the user clicks on a button
 - Remove a row from a table, when the user clicks on a button.

## Finding elements in the DOM

The first step of manipulation a node that is in the DOM, is to find it. For example, to find the first hyperlink (`<a>`) in the document, you can:

```javascript
const element = document.querySelector('a');
```

If you want to find more nodes, for example all the divs (`<div>`) in your document:

```javascript
const allDivs= document.querySelector('div');
```

You can use more advanced selectors as well, please visit the MDN Selectors page to learn more: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

## Creating new nodes

You can create new elements with `document.createElement`:

```javascript
const node = document.createElement('p');
node.textContent = 'Hello World,';
```

Once you have your new element you can attach it to the DOM, by calling its parent elemnt's `appendChild` method:

```javascript
const node = document.createElement('h1');
node.textContent = 'Hello World,';
const body = document.querySelector('body');
body.appendChild(node);
```

## Removing nodes from the DOM

Removing a node is pretty simple, just find the node, and cal; `remove()`:

```javascript
const element = document.querySelector('a');
element.remove();
```
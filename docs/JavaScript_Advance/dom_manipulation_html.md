## Top most tree nodes

All operations on the DOM start with the **document** object. That's the main 'entry point' to DOM. From this tree we can access any node. The topmost tree nodes are available directly as document properties:
- **html**
- **body**
- **head**

## DOM navigation

### Children
- Children are nested exactly in the given one parent. For instance, `<head>` and `<body>` are children of `<html>` element. 
- DOM properties to access nodes are firstChild and lastChild.
- There’s also a special function `hasChildNodes()` to check whether there are any child nodes.
- To access only elements i.e excluding comments and text nodes, one should use **firstElementChild** and **lastElementChild** properties. 

### Siblings
- _Siblings_ are nodes that are children of the same parent and resides adjacent to each other.
- For instance, here `<head>` and `<body>` are siblings.
- Element only navigation can be achieved by **previousElementSibling** and **nextElementSibling**.

### Parent
- Top most node of a tree section is known as Parent. For instance html is parent of head and body. 
- The parent is available as **parentNode**. 
- Element counterpart of parent is **parentElement**. But do we really need parentNode then? Answer is yes. For Example taking parent of html

    console.log(document.documentElement.parentNode) //document
    console.log(document.documentElement.parentElement) //null
- The reason is that the root node `document.documentElement` (`<html>`) has `document` as its parent. But `document`is not an element node, so `parentNode` returns it and `parentElement` does not.


## DOM collections
- **ChildNodes** returns iterable array-like object.
- We can use for...of loop to iterate over it. Though array methods are not applicable. However `Array.from()` can be used to convert it to a real array.
- These collections are live and read-only. That means they reflect current state of the DOM and can not be altered or reassigned again.
- Properties  `firstChild`  and  `lastChild` are shorthand for childNodes[0] and childNodes[element.childNodes.length - 1] but they give fast access to the first and last children.
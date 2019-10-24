// find first a element
const element = document.querySelector("a");
// find all DIVs, return it in a NodeList
const allDivs = document.querySelector("div");
// get the elements parent
const parent = element.parentNode;
// get the children of an element in a live HTMLCollection
const children = parent.children;
// notice that element should be amongs its parents choldren

// creating a new <p>Hello World</p>
const node = document.createElement("p");
node.textContent = "Hello World,";
// attaching it to the parent
parent.appendChild(node);
// and then removing it
parent.removeChild(node);
// or slef removing element
element.remove();

// manipulating style
node.style.color = "white";
node.style.backgroundColor = "black";
node.style.padding = "10px";
node.style.width = "250px";
node.style.textAlign = "center";
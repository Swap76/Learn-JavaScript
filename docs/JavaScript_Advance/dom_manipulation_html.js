// Top most tree nodes
const html = document.documentElement; // The topmost document node.
const body = document.body; // To access body of the page. It can be null. That means it doen't exist.
const head = document.head; // To access head tag of the page.

// DOM navigation
const parentNode = document.parentNode;
const firstChild = document.firstChild;
const lastChild = document.lastChild;
const nextSibling = document.nextSibling;
const previousSibling = document.previousSibling;

// Element-only navigation
const parentElement = document.parentElement;
const firstElementChild = document.firstElementChild;
const lastElementChild = document.lastElementChild;
const nextElementSibling = document.nextElementSibling;
const previousElementSibling = document.previousElementSibling;

// DOM collections
const childNode = document.body.childNodes;
const tableBodies = table.tBodies;
const tableRows = table.rows;
const trCollection = tbody.rows;
const trCells = tr.cells;

/*
Example html template
<html>
    <head>...</head>
    <body>
        <table id="table">
        <tr>
            <td>one</td>
            <td>two</td>
        </tr>
        <tr>
            <td>three</td>
            <td>four</td>
        </tr>
        </table>
    </body>
    <script>
        // Extract "two"
        let tableRows = table.rows;
        let trCells = tableRows[0].cells[1];
    </script>
</html>
*/
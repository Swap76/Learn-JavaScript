/*
The try...catch statement marks a block of statements to try, and specifies one or more
responses should an exception be thrown. If an exception is thrown, the try...catch statement catches it.
It's a safe way to code and handle potential exceptions in your code execution flow.
It reports or error to the user if any occurs.
*/

function createHtml () {
  var content = `
        <p> Enter a number between 10 and 20: </p>
        <input type="text" id="num">
        <button> Checks </button>
        <p id="msg"></p>
    `;
  document.body.innerHTML = content;

  document.querySelector("button").addEventListener("click", checks);
}
// call the function that creates the html
createHtml();

function checks () {
  // get the value entered within the identification number
  var x = document.getElementById("num").value;

  try {
    // if nothing is typed the following message appears
    if (x === "") throw new Error("Enter a value");

    // if not a number entered in the field
    if (isNaN(x)) throw new Error("You need to enter a number:");

    // variable X has to be a number
    x = Number(x);

    // if value is less than 10 or greater than 20 shows message
    if (x < 10 || x > 20) throw new Error("Enter a number between 10 and 20:");

    document.getElementById("msg").innerHTML =
      "Perfect! You entered the number:" + x;
  } catch (erro) {
    document.getElementById("msg").innerHTML = erro;

    // finally: it's for when you need to do something
  } finally {
    document.getElementById("num").value = "";
  }
}
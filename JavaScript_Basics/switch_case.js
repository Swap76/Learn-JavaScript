/**
 * 1. Where we use the Switch
 * 2. More info about Switch
 */

// 1. Where we use the Switch

// The switch statement is used to perform different actions based on different conditions.

// The JavaScript Switch Statement
// Use the switch statement to select one of many code blocks to be executed.

Syntax;
switch (expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
  // code block
}

// This is how it works:

// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// Example
// The getDay() method returns the weekday as a number between 0 and 6.

// (Sunday=0, Monday=1, Tuesday=2 ..)

// This example uses the weekday number to calculate the weekday name:

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}

/**
 * The result of day will be:Thursday
 */

// 2. More info about Switch

// The break Keyword
// When JavaScript reaches a break keyword, it breaks out of the switch block.

// This will stop the execution of inside the block.

// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

// Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

// The default Keyword
// The default keyword specifies the code to run if there is no case match:

// Example
// The getDay() method returns the weekday as a number between 0 and 6.

// If today is neither Saturday (6) nor Sunday (0), write a default message:

switch (new Date().getDay()) {
  case 6:
    text = 'Today is Saturday';
    break;
  case 0:
    text = 'Today is Sunday';
    break;
  default:
    text = 'Looking forward to the Weekend';
}

// The result of text will be:

// Looking forward to the Weekend
// The default case does not have to be the last case in a switch block:

// Example

switch (new Date().getDay()) {
  default:
    text = 'Looking forward to the Weekend';
    break;
  case 6:
    text = 'Today is Saturday';
    break;
  case 0:
    text = 'Today is Sunday';
}

// If default is not the last case in the switch block, remember to end the default case with a break.

// Common Code Blocks
// Sometimes you will want different switch cases to use the same code.

// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

// Example

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = 'Soon it is Weekend';
    break;
  case 0:
  case 6:
    text = 'It is Weekend';
    break;
  default:
    text = 'Looking forward to the Weekend';
}

// Switching Details
// If multiple cases matches a case value, the first case is selected.

// If no matching cases are found, the program continues to the default label.

// If no default label is found, the program continues to the statement(s) after the switch.

// Strict Comparison
// Switch cases use strict comparison (===).

// The values must be of the same type to match.

// A strict comparison can only be true if the operands are of the same type.

// In this example there will be no match for x:

Example: var x = '0';
switch (x) {
  case 0:
    text = 'Off';
    break;
  case 1:
    text = 'On';
    break;
  default:
    text = 'No value found';
}

/** Exercise for You Complete it */

// Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".

switch (fruits) {
  case 'Banana':
    alert('Hello');
    break;

  case 'Apple':
    alert('Welcome');
    break;
}

// Create a switch statement that will tell you what to wear based on the temperature outside. For temps below 50 degrees Fahrenheit, alert "Wear a coat." For temps between 51 and 70 degrees, alert "Bring a sweater." For temps above 70, alert "It should be warm."

var temp = 49;

switch (true) {
  case temp <= 50:
    'Wear a coat.';
    break;
  case temp > 50 && temp <= 70:
    'Bring a sweater.';
    break;
  case temp > 70:
    'It should be warm.';
}

// Create a switch statement to determine who wins in a game of rocks, paper, scissors.

var player1 = 'scissors';
var player2 = 'paper';

switch (true) {
  case player1 === 'paper' && player2 === 'rock':
  case player1 === 'scissors' && player2 === 'paper':
  case player1 === 'rock' && player2 === 'scissors':
    'Player 1 wins';
    break;
  case player1 === 'rock' && player2 === 'paper':
  case player1 === 'paper' && player2 === 'scissors':
  case player1 === 'scissors' && player2 === 'rock':
    'Player 2 wins';
    break;
  default:
    'Tie. Go again.';
}


/* Exercice for you to try to build the switch compeltely*/

// Create a switch statement to convert abriged bytes values (Kb,Mb,Gb,Tb ) to their complete values in bytes, example : 1K = 1 * 1024, 1M = 1 * 1024 * 1024, 1G = 1 * 1024 * 1024 * 1024 , etc...
// how to convert bytes : 1Kb = 1024 b, 1Mb = 1024 Kb, 1Gb = 1024 Mb, 1 Tb = 1024 Gb.
// Hint: the switch will test the value of 'unit', and will have to multiply the var "quantity" by the right number before putting it in the var "result". don't forget to add a default response!

  var quantity = 2;
  var unit = "Kb";
  var result;
  
  //put your Switch here
  
  
# Variables

## Datatypes
One of the most fundamental characteristics of a programming language is the set of data types it
supports. These are the type of values that can be represented and manipulated in a
programming language.

JavaScript allows you to work with three primitive data types −
Numbers, eg. 123, 120.50 etc.

Strings of text e.g. "This text string" etc.
Boolean e.g. true or false.

JavaScript also defines two trivial data types, null and undefined, each of which defines only a
single value. In addition to these primitive data types, JavaScript supports a composite data type
known as object. We will cover objects in detail in a separate chapter.

Note − Java does not make a distinction between integer values and floating-point values. All
numbers in JavaScript are represented as floating-point values. 

Like many other programming languages, JavaScript has variables. Variables can be thought of as
named containers. You can place data into these containers and then refer to the data simply by
naming the container.

Before you use a variable in a JavaScript program, you must declare it. Variables are declared with
the var keyword as follows.
```js
<script type="text/javascript">
  var money;
  var name;
</script>
```
You can also declare multiple variables with the same var keyword as follows −
```js
<script type="text/javascript">
<!--
  var money, name;
//-->
</script>
```
Storing a value in a variable is called variable initialization. You can do variable initialization at
the time of variable creation or at a later point in time when you need that variable.
For instance, you might create a variable named money and assign the value 2000.50 to it later.
For another variable, you can assign a value at the time of initialization as follows.
```js
<script type="text/javascript">
<!--
  var name = "Ali";
  var money;
  money = 2000.50;
//-->
</script>
```
Note − Use the var keyword only for declaration or initialization, once for the life of any variable
name in a document. You should not re-declare same variable twice.

JavaScript is untyped language. This means that a JavaScript variable can hold a value of any
data type. Unlike many other languages, you don't have to tell JavaScript during variable
declaration what type of value the variable will hold. The value type of a variable can change
during the execution of a program and JavaScript takes care of it automatically.

JavaScript Variable Scope
The scope of a variable is the region of your program in which it is defined. JavaScript variables
have only two scopes.

Global Variables − A global variable has global scope which means it can be defined
anywhere in your JavaScript code.

Local Variables − A local variable will be visible only within a function where it is defined.
Function parameters are always local to that function.

Within the body of a function, a local variable takes precedence over a global variable with the
same name. If you declare a local variable or function parameter with the same name as a global
variable, you effectively hide the global variable. Take a look into the following example.
```js
<script type="text/javascript">
<!--
  var myVar = "global"; // Declare a global variable
  function checkscope( ) {
  var myVar = "local"; // Declare a local variable
  document.write(myVar);
}
//-->
</script>
```
This produces the following result −
local
JavaScript Variable Names
While naming your variables in JavaScript, keep the following rules in mind.

You should not use any of the JavaScript reserved keywords as a variable name. These
keywords are mentioned in the next section. For example, break or boolean variable names
are not valid.

JavaScript variable names should not start with a numeral 0 − 9. They must begin with a letter
or an underscore character. For example, 123test is an invalid variable name but _123test
is a valid one.

JavaScript variable names are case-sensitive. For example, Name and name are two
different variables.

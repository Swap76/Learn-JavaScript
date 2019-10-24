const comparisonOperators = () => {
  console.log(1 != 2); //inequality operator
  console.log(1 != "1"); //inequality operator
  console.log(1 != true); //inequality operator
  console.log(0 != false); //inequality operator
  console.log(1 !== 5); // strict typecheck inequality operator
  console.log(5 !== "5"); // strict typecheck inequality operator
  console.log(1 == 8); // equality operator
  console.log(5 == "5"); // equality operator
  console.log(5 === 5); // strict typecheck equality operator
  console.log(5 === "5"); // strict typecheck equality operator
  console.log(5 > 2); // greater than operator
  console.log(5 < 3); // less than operator
  console.log(2 >= 2); // greater than or equal to
  console.log(3 <= 1); // less than or equal to
};

comparisonOperators();

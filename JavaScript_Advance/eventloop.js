setTimeout(() => {
  console.log("Hey im setTimeout");
}, 3000); // Here program goes into waiting state till timer becomes zero

console.log("Last statment"); // This statment gets printed first

// This enables the non blocking using event based managment 
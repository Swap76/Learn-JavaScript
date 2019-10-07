// setTimeout setInterval in both functions the time is specified in millisecond

// setTimeout This runs a code after given time starting form calling this method in program.

setTimeout( () => {
  console.log("SetTimeout is Called")
}, 5000); // This will print SetTimeout is Called after 5sec after calling it

// For stopping this we can use ClearTimeout

// setInterval This runs a code after specific interval of time till we stop the timer.

starting = setInterval( () => {
  console.log("SetInterval is Called")
}, 3000); // This will print setInterval is Called after every 3sec 

// We can stop the interval and timeout using clearTimeout and clearInterval
setTimeout(()=>{
  clearInterval(starting);
}, 7000);

// Output of this whole program is 
/*
SetInterval is Called
SetTimeout is Called
SetInterval is Called
*/
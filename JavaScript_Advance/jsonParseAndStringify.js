// We use the cors-anywhere domain to circumvent CORS errors for demo purposes
// You can read more about it here: https://github.com/Rob--W/cors-anywhere/
// This allows you to just copy the code here and paste it in a JavaScript console in your browser.
const cors_api_url = "https://cors-anywhere.herokuapp.com/";
let baseEndpoint = cors_api_url + "cat-fact.herokuapp.com";
let factsEndpoint = `${baseEndpoint}/facts`;

// Make the request with fetch
let catFacts = await fetch(factsEndpoint);

// Parse the catFacts to a JavaScript object
// This works just like JSON.Parse, but is built into `fetch`
// We use `await` because `.json()` is asynchronous
let parsedCatFacts = await catFacts.json();

// You can now use the parsed information like a normal JavaScript object!
// If you go to https://cat-fact.herokuapp.com/facts you can see what the objects look like. A browser extension like JSONView for Chrome is recommended.
const onlyText = parsedCatFacts.all.map(catFact => catFact.text);

// You can use JSON.Stringify to print a prettier object in the console!
// The first argument is the value you want to output
// The second argument is a transformer function in case you want to transform your data
// The last argument is the amount of indentation you want.
console.log(JSON.stringify(onlyText, null, 2));

// If you want to send JSON back to a server, you can do so with JSON.stringify as well.
// JSON.stringify turns your object into valid JSON.
const sendInterestingFactsToBackEnd = json => {
  console.log("Sending data to server...");
  console.log(json);
};

sendInterestingFactsToBackEnd(JSON.stringify(onlyText));

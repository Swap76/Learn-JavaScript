// 1. join() method
const sayings = ["India" ,"is" ,"my" ,"country"];
sayings.join(" - ");
//Output : India-is-my-country

// 2. concat() method
var flowers = ["Rose", "Lotus"];
var leaf = ["green", "lightgreen", "Darkgreen"];
var garden = flowers.concat(leaf); 
//Output : Rose ,Lotus,green,lightgreen Darkgreen


// 3. copyWithin() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
Country.copyWithin(2,0);  // Output : India , Us , India , Us

// 4.fill() method 
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
Country.fill("Canada"); // Output : Canada, Canada , Canada, Canada

// 5. find() method
var years = [2000, 2001, 2002, 2003];
console.log(years);  // Output : 2000,2001,2002,2003
function checkYear(year) {
    return year >= 2002;
  }
years.find(checkYear); // Output: 2002

// 6. findIndex()method
var years = [2000, 2001, 2002, 2003];
console.log(years);  // Output : 2000,2001,2002,2003
function checkYear(year) {
    return year >= 2002;
  }
years.findIndex(checkYear); // Output: 2

// 7.forEach() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
Country.forEach(countryFunction);
function countryFunction(item) {
    console.log(item) // Output: India , Us , German , Australia
}

// 8.  isArray() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
Array.isArray(Country); //Output: true

// 9.includes() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
var avail = Country.includes("Australia"); 
console.log(avail); // Output : true

// 10. IndexOf() method
var Country = ["India", "US", "German", "Australia"];
console.log(Country); // Output : India , Us , German , Australia 
var iof = Country.indexOf("Australia");
console.log(iof); // Output : 3


// 11 map() method
var numbers = [1,2,3,4,5];
console.log(numbers); //[1,2,3,4,5]
function double(num){
  return num * 2;
}
numbers = numbers.map(double);
console.log(numbers); //[2,4,6,8,10]

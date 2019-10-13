const into = "My collge is SIESGST. Our seniors and aluminies are best in Mumbai";

const fullName = "My name is Swapnil Satish Shinde";

const branch = "I belong to Computer Science branch";

const oldBio = into + " " + fullName + " " + branch;

const bio = `${into} ${fullName} ${branch}`; // New way of concatenation

console.log(oldBio); // My collge is SIESGST. Our seniors and aluminies are best in Mumbai My name is Swapnil Satish Shinde I belong to Computer Science branch

console.log(bio); // My collge is SIESGST. Our seniors and aluminies are best in Mumbai My name is Swapnil Satish Shinde I belong to Computer Science branch

// Output by both the methods is same but string interpolation is more beautifull as we only have to right 1 line for all we want
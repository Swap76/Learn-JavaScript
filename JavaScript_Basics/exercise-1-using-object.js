const student = {
  firstName: "Swapnil",
  lastName: "Shinde",
  age: 19,
  college: "SIES",
  bio: "Web developer"
};

getFullName = () => {
  return `${student.firstName} ${student.lastName}`;
};

getBio = () => {
  return student.bio;
};

getAllDetails = () => {
  return `My name is ${student.firstName} ${student.lastName} \nMy age is ${student.age} \nMy college is ${student.college}, I am ${student.bio}.`;
};

console.log(getFullName()); // Output Swapnil Shinde

console.log(getBio()); // Output Web developer

console.log(getAllDetails()); // Output My name is Swapnil Shinde. My age is 19. My college is SIES, I am Web developer.
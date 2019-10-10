//Let's create a student object which contains their Roll. No and their names. 
let studentObject = {
    101 : "Hitesh",
    102 : "Harry",
    103 : "James",
    104 : "Kevin",
    105 : "Paul"
}

//Now we will loop this object using for loop.
for(let key in studentObject)
{
    if(key === 105)
    {
        console.log("The Student's name is ", studentObject[key]);
    }
}


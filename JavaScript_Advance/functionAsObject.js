function returnName(name){
    return name;
}

returnName.hiddenObj = {
    name: 'i am a javascript object'
}

console.log(returnName('hello')); // hello
console.log(returnName.hiddenObj); // { name : 'i am a javascript object' }
function returnName(name){
    return name;
}

returnName.hiddenObj = {
    name: 'i am a javascript object'
}

console.log(returnName('hello'));
console.log(returnName.hiddenObj);
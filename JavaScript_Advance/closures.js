function modifyString(sampleString){
    sampleString = sampleString + ' is modified';
    return function(){
        return sampleString;
    }
}

const modifier = modifyString('sample string');

console.log(modifier());
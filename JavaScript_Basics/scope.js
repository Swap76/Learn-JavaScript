//JavaScript Scope

//Global scope
var a = 1;

function accessingGlobalVariable() {
    console.log(a); // return 1
}
//End global scope

//Local scope
var a = 1;
function accessingGlobalVariable2() {
    console.log(a); // return 1
}

function accessingLocalVariable() {
    var a = 3;
    console.log(a); // return 3
}
//End local scope

//Automatic global variable
function declaringAutomaticGlobalVariable() {
    b = 'Hello';
}

declaringAutomaticGlobalVariable();
console.log(b); // return 'Hello'
//End automatic global variable

//Block scoping
//var
var a = 1;
function accessingVariable() {
    if (true) {
        var a = 4;
    }
    console.log(a);
}
accessingVariable(); // return 4
//end var

//let
var a = 1;
function accessingVariable() {
    if (true) {
        let a = 4;
    }
    console.log(a);
}
accessingVariable(); // return 1
//end let

//const
var a = 1;
function accessingVariable() {
    if (true) {
        const a = 4;
    }
    console.log(a);
}
accessingVariable(); // return 1
//end const
//End Block scoping
const animals = ["cats", "dogs", "bunnies", "birds"];

const start_with_b = animals.filter(name => name.indexOf("b") === 0);

console.log(start_with_b); // ['bunnies', 'birds']

//function of filter (basic callback for filter)
const arr = [1, 3, 42, 2, 4, 5];
function filter(array, callback) {
    let callback_list = [];
    for (let i of array) {
        callback_list.push(callback(i));
    }
    return callback_list;
}
//modifyable callback function 
function callback(num) {
    return Math.pow(num, 2);
}
console.log(filter(arr, callback));

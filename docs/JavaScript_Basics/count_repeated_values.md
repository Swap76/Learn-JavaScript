```js
// You have array of repeated elements and you want to count repeated values

// lets take hashtags for example
const allHashTags = ["#ht1", "#ht2", "#ht3", "#ht1", "#ht2", "#ht1", "#ht1"];
console.log(allHashTags); // ['#ht1', '#ht2', '#ht3', '#ht1', '#ht2', '#ht1', '#ht1'];

// We will do that in oneliner with help of reduce
const hashtags = allHashTags.reduce((acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }), {});

// at the end you got object with unique hashtags with ther repeat values
console.log(hashtags); // { '#ht1': 4, '#ht2': 2, '#ht3': 1 }```
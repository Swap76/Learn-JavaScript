# Continue & Break

## Where to use them

[`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) and [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) are two javascript [keywords](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords) that are used in loops (`while` and `for`). `break` can also be used in the [`switch`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) statement. Both can be used with [labels](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label).

## How to use them

### Break

Break is used to terminate the current loop, switch or label statement and go to the next statement following the terminated one.

```js
const helloWorld = 'Hello, world!'.split('');
while (helloWorld.length > 0) {
	if (helloWorld[0] == ',')
		break;
	console.log(helloWorld.shift());
}
```

Will output: *'Hello'* with a carriage return between each letters.

```js
const color = 'red';
switch (color) {
	case 'red':
	case 'yellow':
	case 'blue':
		console.log(color + ' is a primary color');
		break;
	case 'green':
	case 'purple':
	case 'orange':
		console.log(color + ' is a secondary color');
		break;
	default:
		console.log("Sorry, I don't know this color...");
		break;
}
```

Will output: *'red is a primary color'*.

In a switch statement, a case statement allow to filter the input variable, and execute the code that is right after it. The break statement is used here to signal the end of the case, or group of cases.

```js
const array = [1, 2, 3, 4, 5];
const array2 = [];
firstFor: for (let i = 0; i < array.length; i++) {
	for (let j = 0; j < array.length; j++) {
		if (array[i] * array[j] > 5)
			break firstFor;
		array2.push(array[i] * array[j]);
	}
}
console.log(array2);
```

Will output: *'[1, 2, 3, 4, 2, 4]'* with 'break firstFor;' and *'[1, 2, 3, 4, 2, 4, 3, 4]'* with a simple break statement.

Indeed in th first case, when `array[i] * array[j] > 5`, the code execution continue right at the last line with the `console.log` call, in the second case it will continue after the second loop, so inside of the first one.

### Continue

Continue is used to terminate the current iteration in a loop, labeled loop, and continues execution of the loop with the next iteration.

```js
let result = '';
for (let i = 0; i < 5; i++) {
	if (i === 3)
		continue;
	result = result + i;
}
console.log(result);
```

Will output: *0124*, the digit `3` is ommited because of the continue statement.

```js
let result = [];
firstFor: for (let i = 0; i < 5; i++) {
	let numbers = '';
	for (let j = 0; j < 2; j++) {
		if (i === 3)
			continue firstFor;
		numbers = numbers + ' ' + (i + j);
	}
	result.push(numbers.trim());
}
console.log(result);
```

Will output: *'["0 1", "1 2", "2 3", "4 5"]'* with 'continue firstFor' and *'["0 1", "1 2", "2 3", "", "4 5"]'* with a simple continue statement.

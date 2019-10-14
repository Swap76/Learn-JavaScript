
**Map.forEach method in JavaScript**

The forEach() method executes a provided function once per each

key/value pair in the Map object, in insertion order.

    function  logMapElements(value, key, map) {
    
    console.log(`map.get('${key}') = ${value}`);
    
    }
    
    new  Map([['foo', 3], ['bar', {}], ['baz', undefined]]).forEach(logMapElements);

> logs:
> 
>  "map.get('foo') = 3"
> 
> "map.get('bar') = [object Object]"
> 
> "map.get('baz') = undefined"

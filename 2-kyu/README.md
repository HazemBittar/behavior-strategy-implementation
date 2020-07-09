# 2 kyu
# [Persistent Bugger.](https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/solutions/javascript)

In this kata, Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

## Syntax

> persistence = num =>

### Parameters

**Number**: `num`

- The function accepts an integer number.

### Return Value: `number`

 
## Examples

```js
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                      // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
```

```js
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * b)) 
    : 0;
}
}
```

### Strategy

the method returns a new array by doing a certain operation on each element in the original array (calling a method together)..
### Implementation

reduce() The method applies a function to each value of the accumulator and array (from left to right) to reduce it to a single value. The internal implementation should be a traversal element, which can theoretically be implemented by the forEach method.
Accumulate/compand multiply with reduce()
var arr=[1,2,3];
var product = function add(x,y){return x+y;}
arr.reduce(product)

```js
function persistence(num) {
  var arr = num.toString().split('');
  var count = 0;
  var product;
  
  while (arr.length > 1) {
    product = arr.reduce(function(a, b) {
      return a * b;
    });
    count++;
    arr = product.toString().split("");
  }
  return count;
}
```


## Notes

* I notes filter creates a new array by removing elements that don't belong. reduce , on the other hand, takes all of the elements in an array, and reduces them into a single value. 
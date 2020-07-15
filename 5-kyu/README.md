# 5 kyu

# [Find The Parity Outlier](https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript)

In this kata, You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
## Syntax

> findOutlier(integers)
### Parameters

**number**: `num`

- The function accepts an integer number.

### Return Value: `Number`

 and returns an integer
## Examples

```js
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
```

### Strategy

This solution is checking three index First. Because, We don’t have to check every Index of Array. 
Just We check even or odd. So, If Length of The Filter Array is more than Two, Every Number will be even except one odd. As a Result, We find One Odd Number. 

```js
function findOutlier(integers){
  return integers.slice(0,3).filter(even).length >= 2 ?
         integers.find(odd) : integers.find(even);
}
function even(num){
  return (num % 2 === 0);
}
function odd(num){
  return !even(num)
}
```

### Implementation

 he made two empty Array. If he used Filter Method, I didn’t have to make an empty array.
Also he didn’t have to Loop Method :-(

```js
function findOutlier(integers){
  const oddArray = [];
  const evenArray = [];
  for (let integer of integers) {
    if (integer % 2 === 0) {
      evenArray.push(integer);
    } else {
      oddArray.push(integer);
    }
  }
  return oddArray.length === 1 ? oddArray[0] : eventArray[0];
}
```





# 7 kyu
# [Count the number of Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript)

In this kata, Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.


## Syntax

> duplicateCount(text)

### Parameters

**string**: `text`

- The function accepts an string.

### Return Value: `num`

 and returns an Number
## Examples

```js
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
```

### Strategy

Think that how to make new Object put string. 
First, Change the parameters text to lowercase using toLowerCase Method.
Second, Make Array from Parameters text 
And Then, If sorting Object variable is not key, result variable add one.

```js
function duplicateCount(text){
  let result = 0,
      soltingObject = {};
  text.toLowerCase().split('').map(str => {
      if (!soltingObject.hasOwnProperty(str)) {
        soltingObject[str] = 0;
      } else {
        if (soltingObject[str] === 0) {
          result += 1;
        }
        soltingObject[str] = soltingObject[str] + 1;
      }
  });
  return result;
};
```

____

## Second solution:
#### Strategy

This Solution use filter Method. 
Filter Method make new array that we want to sort something. 
Think about Array. Array has each other index. 
So, If Array has same string, we just can get index that first same string index
Therefore, If The Index of Array is not correct Index using indexOf Method, This mean is The Array has same string. 
lastIndexOf also is same. But This Function can’t count same string number.

```js
function duplicationCount(text){
  return text.toLowerCase().split('').filter((val, i, arr) => {
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
```
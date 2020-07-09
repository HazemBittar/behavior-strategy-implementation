# 1 kyu
# [Square Every Digit](https://www.codewars.com/kata/546e2562b03326a88e000020/solutions/javascript)

In this kata, you are asked to square every digit of a number.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.


## Syntax

> squareDigits(num)

### Parameters

**Number**: `num`

- The function accepts an integer number.

### Return Value: `number`

 and returns an integer
## Examples
For this problem, we're given an integer (no decimals). We need to return a new number, where every digit is squared. 
For example, if we're given the number 9119, we would return 811181, since the 9^2 = 81, and 1^2 = 1. We need to make sure that we return an integer afterwards. You'll see why down below.

```js
const squareDigits = num => {
    // Get an array of digits
    const digits = num.toString().split('')

    // Square each digit. Because JavaScript has 
    // automatic type coercion, it will quietly convert each string
    // into a number to perform multiplication
    const squaredDigits = digits.map(n => n * n)

    // Join each digit together, then use the + operator 
    // to convert the string into a number
    const squaredNumber = squaredDigits.join('')

    return +squaredNumber
}
```

### Strategy

This is a good problem to apply JavaScript's string methods to split the digits and save them into an array. Since there aren't built in methods that can do this, we have to convert the number into a string. Then, we can use array iteration methods to square each digit before we return the new number.
### Implementation

We use toString() to create a string representation of the number. If we pass our function 9119, this will create a string representation of this which would be '9119'.

Following our toString() method, we split the string using .split(''). This means that we're breaking up the number into individual digits, and then saving them to an array.


```js
const squareDigits = num => {
    return +Array.from(num.toString(), n => n * n).join('')
}
```

### Strategy

Solution 2's a neat one liner one! This was a fun way of applying Array.from:
### Implementation

Array.from() creates a new shallow-copied Array from our input.
Inside this method, we convert our number into a String--an iterable object in JS. This allows Array.from() to create an array of string digits.
Then, we use the optional mapping argument where we'll square our digits,
After, we'll join each digit and convert the String result into a Number using the + operator.

---

## Notes

* I notes JavaScript automatic type coercion!" This just means that we're using operations with certain types, in first solution case JavaScript will secretly convert the digits into numeric values always!
* use .join('') to join each digit together. This will give us the string representation of our new number:
```js
const squaredNumber = squaredDigits.join('') 
```
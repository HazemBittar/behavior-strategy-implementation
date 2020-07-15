# 1 kyu
# [Convert string to camel case](https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript)

In this kata, Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

## Syntax

> toCamelCase(str)

### Parameters

**string**: `str`

- The function accepts an string.

### Return Value: `string`

 and returns an string
## Examples

```js
toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
```

### Strategy

Convert the input to string type
Split the string into words. The splitting is not only based on space. We use regex to parse a string which will remove all special characters and split a string into two parts if a string has two capital letters and split the number part separate.
Convert the first string to lowercase and capitalize the other string. Then join the strings.

```js
function convertToString(input) {
  
      if(input) {

           if(typeof input === "string") {

                return input;
            }

           return String(input);
      }
      return '';
}

// convert string to words
function toWords(input) {
  
   input = convertToString(input);

   var regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

   return input.match(regex);
  
}

```

### Implementation

Let’s create a function that accepts an array of strings. For the string at index 0, convert all the characters of the string to lowercase. For all other strings in the array, convert only the first character of the string to uppercase and convert all other characters as lowercase.
Here we converted every element to lowercase on each iteration of the loop. If the index is not 0 then convert the first character as uppercase.


```js
function toCamelCase(inputArray) {

    let result = "";

    for(let i = 0 , len = inputArray.length; i < len; i++) {

      let currentStr = inputArray[i];
	
      let tempStr = currentStr.toLowerCase();

      if(i != 0) {
	
        // convert first letter to upper case (the word is in lowercase) 
          tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1);

       }
      
       result +=tempStr;
      
    }
  
    return result;
}
```


---

## Notes

* By practice this kata helped my to know about RegEx to convert string to camel case.

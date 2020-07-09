# [Format a string of names.](https://www.codewars.com/kata/53368a47e38700bd8300030d/solutions/javascript)

In this kata, Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

## Syntax

> function list(names)
### Parameters

**string**: `names`

- The function accepts an string value.

### Return Value: `string`

 
## Examples

```js
 list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
```

```js
function list(names){
        if (names.length > 0) {
          const namesList = names.map(({ name }) => name);
          const finalName = namesList.pop();
          return namesList.length ? 
            namesList.join(', ') + ` & ${finalName}` :
          finalName;
        } else {
          return "";
        }
      };
```

### Strategy

Format a string of names like 'Bart, Lisa & Maggie' Solution
When we start out we're given something like this:

```js
      [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]
      
    ```  
So really all we need to do is map over the list, destructure the person object to pull out the name value, and push that into an array.

That looks like this:

 ```js 

   const namesList = names.map(({ name }) => name);
      
```

### Implementation

namesList looks like ['Bart', 'Lisa', 'Maggie', 'Homer', 'Marge']. Joining the array with a .join(', ') gets us almost there, but now we're stuck with nothing but commas -- we really need to replace that last comma with an ampersand. Like with almost all of these Codewars Kata, I'm sure there's a fancy bit of RegEx that could do the heavy lifting for us on this, but I sure suck at RegEx. Instead I'm going to take the long route.
Step one: remove the last item of the array and store it in its own variable.

Step two: if there's any length to the namesList array now that its last item is gone, go ahead and join them into a string like mentioned above. Then we can concatenate the ampersand and the finalName variable using a template literal and return that entire string. If there's no length after popping the last name from the list, just return the finalName variable.

Lastly, we need to account for being passed an empty array. Simply wrap the whole bit of code in an if/else that will return an emptry string if we're given an empty array.

Here's what the whole solution looks like:

```js
function list(names){
        if (names.length > 0) {
          const namesList = names.map(({ name }) => name);
          const finalName = namesList.pop();
          return namesList.length ? 
            namesList.join(', ') + ` & ${finalName}` :
          finalName;
        } else {
          return "";
        }
      };
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
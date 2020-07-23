# 2 kyu
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


   >  [{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]
      
      

So really all we need to do is map over the list, destructure the person object to pull out the name value, and push that into an array.

That looks like this:

 

 > const namesList = names.map(({ name }) => name);



### Implementation

namesList looks like ['Bart', 'Lisa', 'Maggie', 'Homer', 'Marge']. Joining the array with a .join(', ') gets us almost there, but now we're stuck with nothing but commas -- we really need to replace that last comma with an ampersand.  
Step one: remove the last item of the array and store it in its own variable.

Step two: if there's any length to the namesList array now that its last item is gone, go ahead and join them into a string like mentioned above. Then we can concatenate the ampersand and the finalName variable using a template literal and return that entire string. If there's no length after popping the last name from the list, just return the finalName variable.

Lastly, we need to account for being passed an empty array. Simply wrap the whole bit of code in an if/else that will return an empty string if we're given an empty array.



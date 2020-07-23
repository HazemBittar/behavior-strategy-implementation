# 6 kyu
# [Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript)

In this kata, Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.


## Syntax

> high(x)

### Parameters

**string**: `str`

- The function accepts an string.

### Return Value: `string`

 and returns an string
## Examples

```js
high('man i need a taxi up to ubud') // 'taxi'
high('what time are we climbing up the volcano') // 'volcano'
high('take me to semynak') // 'semynak'
```

### Strategy

* split x by ' ' to an array.
* calculate each word score to another array.
* get the highest score and index.
* return the string of the highest score index of wordList

```js
function high(x){
const wordList = x.split(' ');
  const getScore = (word) => {
    return word.split('').reduce((prevScore, currWord) => prevScore + currWord.charCodeAt(0) - 96, 0)
  }
let highestIndex = 0;
  let highestScore = 0;
  scoreList.forEach((score, i) => {
    if (score > highestScore) {
      highestIndex = i;
      highestScore = score;
    }
  });
return wordList[highestIndex];
};


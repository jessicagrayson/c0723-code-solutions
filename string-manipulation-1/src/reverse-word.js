/* exported reverseWord */

const hershey = 'adorable';

function reverseWord(word) {
  let emptyString = '';
  const updatedIndex = word.length - 1;

  for (let i = updatedIndex; i >= 0; i--) {
    const updatedWord = word[i];
    emptyString += updatedWord;
  }
  return emptyString;
}

console.log(reverseWord(hershey));

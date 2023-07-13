/* exported getLastCharacter */

const myString = 'He who must not be named';

function getLastCharacter(string) {
  const index = string.length - 1;
  return string[index];
}

console.log(getLastCharacter(myString));

/* exported getSecondCharacter */

const voldemortString = 'He who shall not be named';

function getSecondCharacter(string) {
  const secondChar = string['1'];
  return secondChar;
}

console.log(
  'Value of getSecondCharacter:',
  getSecondCharacter(voldemortString)
);

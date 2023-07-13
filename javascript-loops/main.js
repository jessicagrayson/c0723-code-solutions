/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// getNumbersToTen

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber < 11) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('Value of getNumbersToTen:', getNumbersToTen());

// getEvenNumbersToTwenty

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber < 21) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('Value of getEvenNumbersToTwenty:', getEvenNumbersToTwenty());

// repeatWord

function repeatWord(word, times) {
  let count = 1;
  let repeated = ' ';
  while (count < times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('repeatWord:', repeatWord('hershey', 66));

// logEachCharacter
// Come back to this later, confirm why the function appears to work in the console but also states that the string is undefined

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}
console.log('logEachCharacter:', logEachCharacter('hershey'));
console.log('logEachCharacter:', logEachCharacter(' '));

// doubleAll

const hershey = [1, 5, 99, 10];
const blueberry = [29, 30, 31, 32];

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    const current = numbers[i] * 2;
    doubled.push(current);
  }
  return doubled;
}

console.log(doubleAll(hershey));
console.log(doubleAll(blueberry));

// getKeys

const beatle = {
  name: 'Ringo',
  occupation: 'Drummer',
  birthPlace: 'Liverpool',
  spouse: 'Barbara',
};

const guitar = {
  brand: 'Fender',
  model: 'Telecaster',
  color: 'Black',
  year: '1972',
};

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

console.log('getKeys:', getKeys(beatle));
console.log('getKeys:', getKeys(guitar));

// getValues

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(beatle[key]);
  }
  return values;
}

console.log('getValues:', getValues(beatle));

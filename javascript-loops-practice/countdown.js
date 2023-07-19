/* exported countdown */

function countdown(number) {
  const array = [];
  for (let currentNumber = number; currentNumber >= 0; currentNumber--) {
    array.push(currentNumber);
  }
  return array;
}

console.log('Countdown:', countdown(5));

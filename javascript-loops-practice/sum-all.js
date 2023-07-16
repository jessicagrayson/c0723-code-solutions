/* exported sumAll */

const array = [17, 92, 106];
function sumAll(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log('sumAll:', sumAll(array));

/* exported getLengthOfArray */

const myArray = ['foo', 'bar', 'baz'];
const myArray2 = [9, 10, 19, 20];
const myArray3 = ['false', 'true'];

function getLengthOfArray(array) {
  const length = array.length;
  return length;
}

console.log(getLengthOfArray(myArray));
console.log(getLengthOfArray(myArray2));
console.log(getLengthOfArray(myArray3));

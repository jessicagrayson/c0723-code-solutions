/* exported getSecondElement */

const testArray = [4, 3, 2, 1];
const testArray2 = ['foo', 'bar', 'baz'];
const testArray3 = [false, true];

function getSecondElement(array) {
  return array[1];
}

console.log(getSecondElement(testArray));
console.log(getSecondElement(testArray2));
console.log(getSecondElement(testArray3));

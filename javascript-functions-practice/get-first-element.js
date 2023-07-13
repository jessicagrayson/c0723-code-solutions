/* exported getFirstElement */

const exampleArray = ['foo', 'bar', 'baz'];
const exampleArray2 = [9, 10, 19, 20];
const exampleArray3 = [false, true];

function getFirstElement(array) {
  return array[0];
}
console.log(getFirstElement(exampleArray));
console.log(getFirstElement(exampleArray2));
console.log(getFirstElement(exampleArray3));

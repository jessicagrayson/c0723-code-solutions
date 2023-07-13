/* exported getElementAtIndex */

const sampleArray = ['foo', 'bar', 'baz'];
const sampleArray2 = [9, 10, 19, 20];
const sampleArray3 = ['false', 'true'];

function getElementAtIndex(array, index) {
  return array[index];
}

console.log(getElementAtIndex(sampleArray, 1));
console.log(getElementAtIndex(sampleArray2, 2));
console.log(getElementAtIndex(sampleArray3, 0));

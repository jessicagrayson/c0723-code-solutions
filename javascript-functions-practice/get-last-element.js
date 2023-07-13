/* exported getLastElement */

const firstArray = ['foo', 'bar', 'baz'];
const firstArray2 = [9, 10, 19, 20];
const firstArray3 = ['false', 'true'];

function getLastElement(array) {
  const lastElement = array.length - 1;
  return array[lastElement];
}

console.log(getLastElement(firstArray));
console.log(getLastElement(firstArray2));
console.log(getLastElement(firstArray3));

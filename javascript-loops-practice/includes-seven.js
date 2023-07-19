/* exported includesSeven */

const testArray = [1, 2, 3, 66, 7, 8, 9, 716];

function includesSeven(array) {
  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (currentValue === 7) {
      return true;
    }
  }
  return false;
}
console.log(includesSeven(testArray));

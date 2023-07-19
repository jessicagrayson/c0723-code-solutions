/* exported findIndex */

const newArray = [1, 5, 3];

function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    const index = array[i];
    if (index === value) {
      return i;
    }
  }
  return -1;
}

console.log(findIndex(newArray, 3));

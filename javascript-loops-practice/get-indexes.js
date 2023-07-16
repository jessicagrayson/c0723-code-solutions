/* exported getIndexes */

const animals = ['rat', 'dog', 'octopus', 'human'];
function getIndexes(array) {
  const hershey = [];
  for (let i = 0; i < array.length; i++) {
    // const index = array[i];
    hershey.push(i);
  }
  return hershey;
}

console.log('getIndexes:', getIndexes(animals));

// const test = [1, 2, 3, 4, 5];
// console.log(test[0]);

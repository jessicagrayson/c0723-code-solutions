/* exported filterOutStrings */

const mixedValues = [1, 'notebook', 2, 'shoes', 6, 'pasta', 'barnacles', 9];

// function filterOutStrings(values) {
//   const newArray = [];
//   for (let i = 0; i < values.length; i++) {
//     const test = values[i];
//     if (typeof test === 'string') {
//       console.log('kick rocks');
//     } else {
//       newArray.push(test);
//     }
//   }
//   return newArray;
// }

// console.log(filterOutStrings(mixedValues));

function filterOutStrings(values) {
  const newArray = [];
  for (let i = 0; i < values.length; i++) {
    const test = values[i];
    if (typeof test !== 'string') {
      newArray.push(test);
    }
  }
  return newArray;
}

console.log(filterOutStrings(mixedValues));

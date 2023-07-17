/* exported compact */

const years = [2020, 2021, 2023, null, 1992, -1992];

function compact(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const test = array[i];
    if (test) {
      result.push(test);
    }
  }
  return result;
}

console.log(compact(years));

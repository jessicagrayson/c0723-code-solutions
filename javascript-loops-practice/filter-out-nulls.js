/* exported filterOutNulls */

const bats = [1, 2, 3, null];
function filterOutNulls(values) {
  const empty = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      empty.push(values[i]);
    }
  }
  return empty;
}

console.log(filterOutNulls(bats));

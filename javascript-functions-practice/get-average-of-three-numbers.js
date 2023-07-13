/* exported getAverageOfThreeNumbers */

function getAverageOfThreeNumbers(x, y, z) {
  const sum = x + y + z;
  const average = sum / 3;
  return average;
}

console.log(getAverageOfThreeNumbers(2, 4, 6));
console.log(getAverageOfThreeNumbers(97, 85, 94));
console.log(getAverageOfThreeNumbers(10, 9, 9));

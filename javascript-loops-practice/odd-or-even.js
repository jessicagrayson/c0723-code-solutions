/* exported oddOrEven */

const hershey = [1, 2, 3, 4, 5];

function oddOrEven(numbers) {
  const emptyArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      emptyArray.push('even');
    } else {
      emptyArray.push('odd');
    }
  }
  return emptyArray;
}

console.log(oddOrEven(hershey));

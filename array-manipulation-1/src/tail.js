/* exported tail */

function tail(array) {
  const emptyArray = [];

  for (let i = 1; i < array.length; i++) {
    const currentElement = array[i];
    emptyArray.push(currentElement);
  }
  return emptyArray;
}

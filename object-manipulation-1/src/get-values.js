/* exported getValues */

function getValues(object) {
  const emptyArray = [];

  for (const key in object) {
    emptyArray.push(object[key]);
  }
  return emptyArray;
}

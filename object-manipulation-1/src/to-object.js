/* exported toObject */

const lake = ['color', 'blue'];

function toObject(keyValuePair) {
  const emptyObject = {};

  emptyObject[keyValuePair[0]] = keyValuePair[1];
  return emptyObject;
}

console.log('test:', toObject(lake));

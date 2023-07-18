/* exported getKeys */

function getKeys(object) {
  const keyRing = [];

  for (const key in object) {
    keyRing.push(key);
  }

  return keyRing;
}

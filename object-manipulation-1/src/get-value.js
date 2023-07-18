/* exported getValue */

const me = {
  firstName: 'Jessica',
  lastName: 'Grayson',
};

console.log(me.firstName);

function getValue(object, key) {
  // for (const key in object) {
  // }
  return object[key];
}

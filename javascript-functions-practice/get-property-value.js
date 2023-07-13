/* exported getPropertyValue */

const ada = {
  name: 'Ada Lovelace',
  occupation: 'countess',
  birthPlace: 'London, England',
};

function getPropertyValue(object, key) {
  return object[key];
}

console.log(getPropertyValue(ada, 'name'));

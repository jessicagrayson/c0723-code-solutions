/* exported setValue */

const doggo = {
  name: 'Hershey',
  species: 'Dog',
  occupation: 'Best Boi',
};

function setValue(object, key, value) {
  object[key] = value;
}

console.log('setValue:', setValue(doggo, 'color', 'Brown'));
console.log(doggo);

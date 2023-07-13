/* exported getDescriptionOfPerson */

const guy = {
  name: 'George',
  occupation: 'Guitarist',
  birthPlace: 'Liverpool, UK',
};

function getDescriptionOfPerson(person) {
  const description =
    person.name +
    ' is a ' +
    person.occupation +
    ' from ' +
    person.birthPlace +
    '.';
  return description;
}

console.log('Value of getDescriptionOfPerson:', getDescriptionOfPerson(guy));

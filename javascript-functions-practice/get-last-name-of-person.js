/* exported getLastNameOfPerson */

const person = {
  firstName: 'John',
  lastName: 'Lennon',
};

function getLastNameOfPerson(person) {
  const lastName = person.lastName;
  return lastName;
}

console.log('Value of getLastNameofPerson:', getLastNameOfPerson(person));

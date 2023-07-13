/* exported getInitialsOfPerson */

const person2 = {
  firstName: 'Ada',
  lastName: 'Lovelace',
};

function getInitialsOfPerson(person) {
  const initials = person.firstName['0'] + person.lastName['0'];
  return initials;
}

console.log('Value of getInitialsOfPerson:', getInitialsOfPerson(person2));

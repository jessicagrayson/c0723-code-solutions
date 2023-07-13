/* exported getFirstInitialOfPerson */

const person1 = {
  firstName: 'Ada',
  lastName: 'Lovelace',
};

function getFirstInitialOfPerson(person) {
  const firstInitial = person.firstName['0'];
  return firstInitial;
}

console.log('Value of getFirstInitial:', getFirstInitialOfPerson(person1));

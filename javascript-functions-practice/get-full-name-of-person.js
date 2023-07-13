/* exported getFullNameOfPerson */

const beatle = {
  firstName: 'John',
  lastName: 'Lennon',
};

function getFullNameOfPerson(beatle) {
  const fullName = beatle.firstName + ' ' + beatle.lastName;
  return fullName;
}

console.log('Value of getFullNameOfPerson:', getFullNameOfPerson(beatle));

// Student object

const student = {
  firstName: 'Jessica',
  lastName: 'Grayson',
  age: 31,
};
console.log('Value of student:', student);

const fullName = student.firstName + ' ' + student.lastName;
console.log('Full name:', fullName);

student.livesInIrvine = true;

student.previousOccupation = 'Private investigator';

console.log('Value of livesInIrvine:', student.livesInIrvine);

console.log('Previous occupation:', student.previousOccupation);

// Vehicle object

const vehicle = {
  make: 'Tesla',
  model: 'Model 3',
  year: '2018',
};

vehicle['color'] = 'black';

vehicle['isConvertible'] = false;

console.log('Value of vehicle[color]:', vehicle['color']);

console.log('Value of vehicle[isConvertible]:', vehicle['isConvertible']);

console.log('Value of vehicle:', vehicle);

// Pet object

const pet = {
  name: 'Hershey',
  type: 'Dog',
};

delete pet.name;
delete pet.type;

console.log('Value of pet', pet);

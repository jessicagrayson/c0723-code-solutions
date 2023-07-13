// Math object

const age = 31;
const pets = 3;
const zip = 92604;

const biggest = Math.max(age, pets, zip);
console.log('Value of biggest:', biggest);

const array = ['Spiderman', 'Superman', 'Wonderwoman', 'Batman'];
const heroes = array;

let randomNumber = Math.random();
console.log('Value of randomNumber:', randomNumber);
randomNumber = randomNumber * heroes.length;
console.log('Updated value of randomNumber:', randomNumber);

const randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:', randomIndex);

const randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

// Array methods

const favoriteBook = {
  title: 'East of Eden',
  author: 'John Steinbeck',
};

const childBook = {
  title: 'Harry Potter and the Chamber of Secrets',
  author: 'JK Rowling',
};

const roadTripBook = {
  title: 'Finding Me',
  author: 'Viola Davis',
};

const library = [favoriteBook, childBook, roadTripBook];
console.log(library);

const lastBook = library.pop();
console.log('Value of lastBook:', lastBook);

const firstBook = library.shift();
console.log('Value of firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log(library);

// String methods

const fullName = 'Jessica Grayson';

const firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName:', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);

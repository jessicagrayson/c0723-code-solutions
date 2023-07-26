/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

// isUnderFive(number)

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
console.log('Value of isUnderFive:', isUnderFive(5));

// isEven(number)

function isEven(number) {
  const remainder = number % 2;
  if (remainder <= 0) return true;
  else return false;
}

console.log('Value of isEven:', isEven(5));

// startsWithJ(string)

const firstBeatle = 'John Lennon';
const secondBeatle = 'Paul Mccartney';
const thirdBeatle = 'George Harrison';
const fourthBeatle = 'Ringo Starr';

function startsWithJ(string) {
  const firstChar = string[0];
  if (firstChar === 'J') return true;
  else return false;
}

console.log('Value of startsWithJ:', startsWithJ(firstBeatle));
console.log('Value of startsWithJ:', startsWithJ(secondBeatle));
console.log('Value of startsWithJ:', startsWithJ(thirdBeatle));
console.log('Value of startsWithJ:', startsWithJ(fourthBeatle));

// isOldEnoughToDrink(person)

const person = {
  name: 'Ringo',
  age: 83,
};

function isOldEnoughToDrink(person) {
  if (person.age >= 21) return true;
  else return false;
}

console.log('Value of isOldEnoughToDrink:', isOldEnoughToDrink(person));

// isOldEnoughToDrive(person)

function isOldEnoughToDrive(person) {
  if (person.age >= 16) return true;
  else return false;
}

console.log('Value of isOldEnoughToDrive', isOldEnoughToDrive(person));

// isOldEnoughToDrinkAndDrive(person)

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) return false;
}

console.log(
  'Value of isOldEnoughToDrinkAndDrive:',
  isOldEnoughToDrinkAndDrive(person)
);

// categorizeAcidity(pH)

function categorizeAcidity(pH) {
  if (pH === 7) return 'neutral';
  else if (pH < 0) return 'invalid pH level';
  else if (pH < 7) return 'acid';
  else if (pH <= 14) return 'base';
  else return 'invalid pH level';
}

console.log('Value of categorizeAcidity:', categorizeAcidity(6));

// introduceWarnerBro(name)

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return 'We are the warner bros!';
    case 'wakko':
      return 'We are the warner bros!';
    case 'dot':
      return 'I am cute~';
    default:
      return 'Goodnight everybody!';
  }
}

console.log('Value of introduceWarnerBro:', introduceWarnerBro());

// recommendMovie(genre)

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'It: Part I';
    case 'drama':
      return 'Good Will Hunting';
    case 'musical':
      return 'Les Miserables';
    case 'sci-fi':
      return 'Deux Ex Machina';
    default:
      return 'Genre not recognized. Choose betwen action, comedy, horror, drama, music, or sci-fi';
  }
}

console.log('Value of recommendedMovie:', recommendMovie('arthouse'));

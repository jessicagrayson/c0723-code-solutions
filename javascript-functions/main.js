// convertMinutesToSeconds

function convertMinutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

const convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log(convertMinutesToSecondsResults);

// greet

function greet(name) {
  const greeting = 'Hey, ' + name;
  return greeting;
}

const greetResult = greet('Jessica');
console.log(greetResult);

// getArea(width, height)

function getArea(width, height) {
  const area = width * height;
  return area;
}

const areaResult = getArea(99, 100);
console.log(areaResult);

// getFirstName

function getFirstName(person) {
  return person.firstName;
}
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

// getLastElement

const exampleArray = ['propane', 'and', 'propane', 'accessories'];
function getLastElement(array) {
  const lastIndex = array.length - 1;
  return array[lastIndex];
}

console.log(getLastElement(exampleArray));

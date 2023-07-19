/* exported isUpperCased */

// Need to use strictly equals to compare to capitalized string, if it passes then true and if not, false
// need a for loop and an if statement, no else should be needed

function isUpperCased(word) {
  const wordCap = word.toUpperCase();
  return word === wordCap;
}

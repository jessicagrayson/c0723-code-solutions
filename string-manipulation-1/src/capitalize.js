/* exported capitalize */

function capitalize(word) {
  const firstLetter = word[0];
  const firstLetterCap = firstLetter.toUpperCase();
  const curtains = word.slice([1]);
  const toast = firstLetterCap + curtains.toLowerCase();
  return toast;
}

console.log(capitalize('tO'));

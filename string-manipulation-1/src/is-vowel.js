/* exported isVowel */

function isVowel(char) {
  const toast = char.toLowerCase();

  if (
    toast === 'a' ||
    toast === 'e' ||
    toast === 'i' ||
    toast === 'o' ||
    toast === 'u'
  ) {
    return true;
  }
  return false;
}
console.log(isVowel('E'));

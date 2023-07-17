/* exported getWords */

const boba = '';

// function getWords(string) {
//   const toast = string.split(' ');
//   return toast;
// }

// Might be hacky but some kind

function getWords(string) {
  if (string === '') {
    return [];
  } else {
    return string.split(' ');
  }
}

console.log(getWords(boba));

/* exported addSuffixToAll */

const adjectives = ['slow', 'quick', 'loud', 'bad'];

function addSuffixToAll(words, suffix) {
  const adverbs = [];

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i] + suffix;
    adverbs.push(currentWord);
  }
  return adverbs;
}

console.log('addSuffixToAll:', addSuffixToAll(adjectives, 'ly'));

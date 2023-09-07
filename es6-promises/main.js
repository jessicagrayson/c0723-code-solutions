import takeAChance from './take-a-chance.js';

const myName = 'Jessica';

takeAChance(myName)
  .then((result) => {
    console.log(result); // logs the success message
  })
  .catch((error) => {
    console.error(error.message); // logs the error message
  });

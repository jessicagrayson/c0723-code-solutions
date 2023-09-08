import { writeFile } from 'node:fs/promises';

const randomNumber = Math.random();

try {
  await writeFile('random.txt', randomNumber + '\n');
  console.log('a random number has been copied to random.txt');
} catch (error) {
  console.error(error);
}

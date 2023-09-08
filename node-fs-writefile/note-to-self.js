import { writeFile } from 'node:fs/promises';

const note = process.argv[2];

try {
  await writeFile('note.txt', note + '\n');
  console.log('Your note has been written to note.txt');
} catch (error) {
  console.error(error);
}

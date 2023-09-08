import { readFile } from 'node:fs/promises';

const filenames = process.argv.slice(2);

try {
  const promises = filenames.map((filename) => readFile(filename, 'utf8'));
  const contents = await Promise.all(promises);
  console.log(contents);
} catch (error) {
  console.error(error);
}

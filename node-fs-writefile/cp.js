import { writeFile, readFile } from 'node:fs/promises';

const [inFile, outFile] = process.argv.slice(2);

try {
  const contents = await readFile(inFile);
  await writeFile(outFile, contents);
  console.log('Your file has been copied');
} catch (error) {
  console.error(error);
}

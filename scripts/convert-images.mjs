import { readdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const dir = new URL('../public/projects/', import.meta.url).pathname;
const files = (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f));

let savedBefore = 0;
let savedAfter = 0;

for (const file of files) {
  const inPath = join(dir, file);
  const outPath = join(dir, `${parse(file).name}.webp`);
  const before = (await stat(inPath)).size;
  await sharp(inPath)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(outPath);
  const after = (await stat(outPath)).size;
  savedBefore += before;
  savedAfter += after;
  console.log(
    `${file}  ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB  (-${(((before - after) / before) * 100).toFixed(0)}%)`
  );
}

console.log(
  `\nTotal: ${(savedBefore / 1024 / 1024).toFixed(2)}MB → ${(savedAfter / 1024 / 1024).toFixed(2)}MB  (-${(((savedBefore - savedAfter) / savedBefore) * 100).toFixed(0)}%)`
);

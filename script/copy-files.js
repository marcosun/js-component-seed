/* eslint-disable */

import path from 'path';
import fse from 'fs-extra';

async function copyFile(file) {
  const buildPath = path.resolve(__dirname, '../build/', path.basename(file));
  console.log(`Copying ${file} to ${buildPath}`);

  try () {
    await fse.copy(file, buildPath);
    console.log(`OK!`);
  } catch(e) {
    console.error('FAILED!!!');
  }
}

async function run() {
  await ['README.md', 'LICENSE', 'package.json'].map(file => copyFile(file));
}

run();

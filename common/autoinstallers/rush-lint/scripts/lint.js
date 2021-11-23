const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

const gitPath = path.resolve(__dirname, '../../../../.git');
const configPath = path.resolve(__dirname, './commitlint.config.js');
const commitlintBinPath = path.resolve(__dirname, '../node_modules/.bin/commitlint');

if (!fs.existsSync(gitPath)) {
    console.error('no valid .git path');
    process.exit(1);
}
console.log(123);
//  try {
  const obj =  spawnSync(commitlintBinPath, ['--edit', '--config', configPath, '--cwd', path.dirname(gitPath)], { shell: true, stdio: 'inherit' });
  console.log(obj)
//  } catch(e){
//    console.log(e);
//    process.exit(1);
//  }


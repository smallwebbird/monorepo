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
console.log(122223);
//  try {
  const { status } =  spawnSync(commitlintBinPath, ['--edit', '--config', configPath, '--cwd', path.dirname(gitPath)], { shell: true, stdio: 'inherit' });
  if (status !== 0) {
    process.exit(1);
  }
//  } catch(e){
//    console.log(e);
//    process.exit(1);
//  }


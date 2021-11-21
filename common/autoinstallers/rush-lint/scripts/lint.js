const path = require('path');
const execShell = require('child_process').execSync;

const gitPath = path.resolve(__dirname, '../../../../.git');
const commitlintBinPath = path.resolve(__dirname, '../node_modules/.bin/commitlint');
console.log(commitlintBinPath);
const commitlintConfig = path.resolve(__dirname, './commitlint.config.js');

execShell(`node -v`, { stdio: 'inherit' });

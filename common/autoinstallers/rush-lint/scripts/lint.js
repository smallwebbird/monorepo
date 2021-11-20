const path = require('path');
const execShell = require('child_process').execSync;
const argv = process.argv.slice(2);
const args = minimist(argv);

const commitlintBinPath = path.resolve(__dirname, '../node_modules/.bin/commitlint');
const commitlintConfig = path.resolve(__dirname, './commitlint.config.js');

execShell(`${commitlintBinPath} -c -g ${commitlintConfig}`, { stdio: 'inherit' });

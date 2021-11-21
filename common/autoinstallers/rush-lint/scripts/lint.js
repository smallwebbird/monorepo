const path = require('path');
const fs = require('fs');
const execa = require('execa');
const execSync = require('child_process').exec;

const gitPath = path.resolve(__dirname, '../../../../.git');
const configPath = path.resolve(__dirname, './commitlint.config.js');
const commitlintBinPath = path.resolve(__dirname, '../node_modules/.bin/commitlint');

if (!fs.existsSync(gitPath)) {
    console.error('no valid .git path');
    process.exit(1);
}
// console.log(process.cwd(), __dirname);
execSync(`${commitlintBinPath}`, function (err, stdout) {
  console.log(err);
  console.log(stdout);
});

// main();

// async function main() {
//     try {
//         await execa('bash', [commitlintBinPath, '--config', configPath, '--cwd', path.dirname(gitPath), '--edit'], {
//             stdio: 'inherit',
//         });
//     } catch (e) {
//         process.exit(1);
//     }
// }

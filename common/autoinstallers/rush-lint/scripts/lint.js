const path = require('path');
const fs = require('fs');
const execa = require('execa');
const { spawnSync } = require('child_process');

const gitPath = path.resolve(__dirname, '../../../../.git');
const configPath = path.resolve(__dirname, './commitlint.config.js');
const commitlintBinPath = path.resolve(__dirname, '../node_modules/.bin/commitlint');

 try {
  spawnSync(`${commitlintBinPath} --edit --config ${configPath}`, { shell: true, stdio: 'inherit' })
 } catch(e){
   console.log(e)
 }


// if (!fs.existsSync(gitPath)) {
//     console.error('no valid .git path');
//     process.exit(1);
// }
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

const rushLib = require('@microsoft/rush-lib');

const rushConfiguration = rushLib.RushConfiguration.loadFromDefaultLocation();

let packageNames = [];

rushConfiguration.projects.forEach((project) => {
  packageNames.push(project.packageName);
});

packageNames = ['common', ...packageNames, 'all'];

module.exports = {
  packageNames,
};

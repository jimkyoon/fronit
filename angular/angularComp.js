const program = require('commander');
const chalk = require('chalk');

const angularColor = '#b52e31';

const angularComp = (args) => {
  program
    .option('A, Angular [type]', 'Create a new Angular component');
    // more options coming soon

  program.parse(args);

  if (typeof program.Angular === 'string') console.log(chalk.bold.hex(angularColor)('Working!'), `${program.Angular}`);
};

module.exports = angularComp;

const program = require('commander');
const chalk = require('chalk');

const reactColor = '#00d8ff';

const reactComp = (args) => {
  program
    .option('R, React [type]', 'Create a new React component')
    .option('-c, --class', 'Class Component')
    .option('-f, --functional', 'Functional Component');
    // more options coming soon

  program.parse(args);

  if (typeof program.React === 'string') console.log(chalk.bold.hex(reactColor)('Working!'), `${program.React}`);
};

module.exports = reactComp;

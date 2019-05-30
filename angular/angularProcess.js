const program = require('commander');
const chalk = require('chalk');

const angularColor = '#b52e31';

/**
 * Process args through commander for Angular components and send them to template generators
 * @param {Array} args - process.argv, array of inputs
 * @param {String} pwd - process.cwd, string for current directory path
 * @returns {File} a Angular component in .ts or .tsx
 */

const angularProcess = (args, pwd) => {
  program
    .option('A, Angular [type]', 'Create a new Angular component');
    // more options coming soon

  program.parse(args);

  if (typeof program.Angular === 'string') console.log(chalk.bold.hex(angularColor)('Working!'), `${program.Angular}`);

  console.log(chalk.bgRed('ATTENTION!'), chalk.bold.hex(angularColor)('Angular functionality coming soon!'));
};

module.exports = angularProcess;

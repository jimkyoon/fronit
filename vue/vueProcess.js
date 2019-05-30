const program = require('commander');
const chalk = require('chalk');

const vueColor = '#42b883';

/**
 * Process args through commander for Vue components and send them to template generators
 * @param {Array} args - process.argv, array of inputs
 * @param {String} pwd - process.cwd, string for current directory path
 * @returns {File} a Angular component in .vue or .js
 */

const vueProcess = (args, pwd) => {
  program
    .option('V, Vue [type]', 'Create a new Vue component');
    // more options coming soon

  program.parse(args);

  if (typeof program.Vue === 'string') console.log(chalk.bold.hex(vueColor)('Working!'), `${program.Vue}`);

  console.log(chalk.bgRed('ATTENTION!'), chalk.bold.hex(vueColor)('Vue functionality coming soon!'));
};

module.exports = vueProcess;

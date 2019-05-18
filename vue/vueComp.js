const program = require('commander');
const chalk = require('chalk');

const vueColor = '#42b883';

const vueComp = (args) => {
  program
    .option('V, Vue [type]', 'Create a new Vue component');
    // more options coming soon

  program.parse(args);

  if (typeof program.Vue === 'string') console.log(chalk.bold.hex(vueColor)('Working!'), `${program.Vue}`);
};

module.exports = vueComp;

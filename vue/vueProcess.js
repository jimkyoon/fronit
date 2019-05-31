const program = require('commander');
const chalk = require('chalk');

// utility
const pascalFormat = require('../utils/formatPascal');
const formatBlankLines = require('../utils/formatBlankLines');
const createFile = require('../utils/createFile');

const vueColor = '#42b883';

/**
 * Process args through commander for Vue components and send them to template generators
 * @param {Array} args - process.argv, array of inputs
 * @param {String} pwd - process.cwd, string for current directory path
 * @returns {File} a Vue component in .vue or .js
 */

const vueProcess = async (args, pwd) => {
  program
    .option('V, Vue [type]', 'Create a new Vue component');
    // more options coming soon

  program.parse(args);

  const compData = {
    name: '',
    fileType: '',
    extension: '',
  };

  // UNCOMMENT THIS SECTION AFTER FINISHING VUE TEMPLATES
  // // create file after getting template
  // const file = createFile(pwd, compData.name, compData.extension, template);

  // const finish = await file;

  // if (finish) {
  //   console.log(chalk.bold.hex(vueColor)(`Finished building ${compData.name} component!`));
  // } else {
  //   console.log('something happened!');
  // }

  console.log(chalk.bgRed('ATTENTION!'), chalk.bold.hex(vueColor)('Vue functionality coming soon!'));
};

module.exports = vueProcess;

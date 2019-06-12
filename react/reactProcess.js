const chalk = require('chalk');

// react component options processing
const reactCompData = require('./reactCompData');

// template generators
const classComp = require('./componentTypes/class');
const funcComp = require('./componentTypes/functional');

// utility
const formatBlankLines = require('../utils/formatBlankLines');
const createFile = require('../utils/createFile');

const reactColor = '#00d8ff';

/**
 * Process args through commander for React component options, send component data to template generators, then creates files
 * @param {Array} args - process.argv, array of inputs from command line
 * @param {String} pwd - process.cwd, string for current directory path
 * @returns {File} a React file component in .js, .jsx, .ts or .tsx
 */

const reactProcess = async (args, pwd) => {
  // pass args to reactCompData to get an object of all options
  const compData = reactCompData(args);

  // create template based on type of component, passing compData
  let template;
  switch (compData.type) {
    case 'class':
      template = classComp(compData);
      break;
    case 'functional':
      template = funcComp(compData);
      break;
    case 'pure':
      template = classComp(compData);
      break;
    default:
      console.log(chalk.bgRed('Please pick a component type next time!\n'), 'i.e. --class, --functional or --pure\n Component was still created but defaulted to class component!');
  }

  // format to remove blank lines
  template = formatBlankLines(template);

  // create file after getting template
  const file = createFile(pwd, compData.name, compData.extension, template);

  const finish = await file;

  if (finish) {
    console.log(chalk.bold.hex(reactColor)(`Finished building ${compData.name} component!`));
  } else {
    console.log(chalk.bgRed('Something happened!'));
  }
};

module.exports = reactProcess;

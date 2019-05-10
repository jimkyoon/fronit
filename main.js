#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

// library colors
const reactColor = '#00d8ff';
const vueColor = '#42b883';
const angularColor = '#b52e31';

// set up options/flags
program
  .option('R, React [type]', 'Create a new React Component')
  .option('V, Vue [type]', 'Create a new Vue Component')
  .option('A, Angular [type]', 'Create a new Angular Component');

program.parse(process.argv);

// redirect process to respective files
// React
if (program.React === true) {
  console.log('Please give your component a name!');
} else if (typeof program.React === 'string') {
  const name = program.React;
  console.log(chalk.bold.hex(reactColor)('Creating React component!'));
  console.log(chalk.bold.hex(reactColor)(`${name}`));
}
// Vue
if (program.Vue === true) {
  console.log(chalk.bgRed('ATTENTION!'), chalk.bold.hex(vueColor)('Vue functionality coming soon!'));
} else if (typeof program.Vue === 'string') {
  console.log(chalk.bgRed('ATTENTION!'), chalk.bold.hex(vueColor)('Vue functionality coming soon!'));
}
// Angular
if (program.Angular === true) {
  console.log(chalk.bgRed('ATTENTION!'), chalk.bold.hex(angularColor)('Angular functionality coming soon!'));
} else if (typeof program.Angular === 'string') {
  console.log(chalk.bgRed('ATTENTION!'), chalk.bold.hex(angularColor)('Angular functionality coming soon!'));
}

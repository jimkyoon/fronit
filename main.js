#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

// require React, Vue and Angular component creators
const reactComp = require('./react/reactComp');

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
  // if true, that means React flag was called but no name was given
  console.log(chalk.bold.hex(reactColor)('Please give your React component a name!'));
} else if (typeof program.React === 'string') {
  // if name was given, pass commandargs to reactComp
  reactComp(process.argv);
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

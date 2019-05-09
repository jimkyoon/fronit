#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');

program
  .option('r, react')
  .option('R, React')
  .option('v, vue')
  .option('V, Vue')
  .option('a, angular')
  .option('A, Angular');

program.parse(process.argv);

// React
if (program.react === true || program.React === true) {
  console.log('Creating React component!');
}
// Vue
if (program.vue === true || program.Vue === true) console.log(chalk.hex('#42b883')('Vue functionality coming soon!'));
if (program.angular === true || program.Angular === true) console.log(chalk.hex('#b52e31')('Angular functionality coming soon!'));

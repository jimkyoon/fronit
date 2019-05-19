#!/usr/bin/env node

const chalk = require('chalk');

// require React, Vue and Angular component creators
const reactComp = require('./react/reactComp');
// Not using Vue and Angular yet! Work in progress...
const vueComp = require('./vue/vueComp');
const angularComp = require('./angular/angularComp');

const cliArgs = process.argv;

// hand off the arguments to React, Vue or Angular process based off process.argv index 2
if (cliArgs[2] === 'React' || cliArgs[2] === 'R') {
  reactComp(cliArgs);
} else if (cliArgs[2] === 'Vue' || cliArgs[2] === 'V') {
  vueComp(cliArgs);
} else if (cliArgs[2] === 'Angular' || cliArgs[2] === 'A') {
  angularComp(cliArgs);
} else {
  // work on messages based on error/noinput
  console.log(chalk.bgRed('Please read the guide/docs!'));
}

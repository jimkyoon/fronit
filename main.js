#!/usr/bin/env node

const chalk = require('chalk');

// require React, Vue and Angular component creators
const reactProcess = require('./react/reactProcess');
// Not using Vue and Angular yet! Work in progress...
const vueProcess = require('./vue/vueProcess');
const angularProcess = require('./angular/angularProcess');

// grab inputs and directory
const cliArgs = process.argv;
const currentDirectory = process.cwd();

// hand off the arguments to React, Vue or Angular process based off process.argv index 2
if (cliArgs[2] === 'React' || cliArgs[2] === 'R') {
  reactProcess(cliArgs, currentDirectory);
} else if (cliArgs[2] === 'Vue' || cliArgs[2] === 'V') {
  vueProcess(cliArgs, currentDirectory);
} else if (cliArgs[2] === 'Angular' || cliArgs[2] === 'A') {
  angularProcess(cliArgs, currentDirectory);
} else {
  console.log(`
    _____                 _ _ 
   / ___/________  ____ (🏎️ )/_
  / /__/ ___/ __ \\/ __ \\/ / _/
 / ___/ /  / /_/ / / / / / /_  
/_/  /_/   \\____/_/ /_/_/\\__/  
                         
`);
  // work on messages based on error/noinput
  console.log(chalk.bgRed('Please read the guide/docs! Link below!'));
  console.log('https://github.com/orenJim/fronit');
}

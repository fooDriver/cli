#!/usr/bin/env node
//----------------------------------
//* Setup
//----------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const program = require('commander');
const { prompt } = require('inquirer');

// Import Method Library
// TODO

//----------------------------------
//* Questions
//----------------------------------
// TODO
const loginQuestions = [
  {
    type: 'input',
    name: 'username', 
    message: 'Input your username',
  },
  {
    type: 'password',
    name: 'password', 
    message: 'Input your password',
  },
];

//----------------------------------
//* Commands
//----------------------------------
// TODO
// Version info
program
  .version('1.0.0')
  .description('fooDriver CLI');

// User Login
program
  .command('connect')
  .alias('c')
  .description('Connect to fooDriver')
  .action(() => {
    prompt(loginQuestions).then(answers => someMethod(answers)); // TODO <---
  });

//----------------------------------
//* ARGV
//----------------------------------
program.parse(process.argv);

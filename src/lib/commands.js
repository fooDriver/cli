#!/usr/bin/env node
//----------------------------------
//* Setup
//----------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const program = require('commander');
const { prompt } = require('inquirer'); // inquirer.prompt
const superagent = require('superagent');
const sh = require('shelljs');
const opn = require('opn');

//----------------------------------
//* Basic Commands
//----------------------------------
//? Version
program.version('1.0.0').description('fooDriver CLI');

//----------------------------------
//* Global Auth Signup
//----------------------------------

const authLogin = [
  {
    type: 'input',
    name: 'username',
    message: 'Enter your username:'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter your password:'
  }
];

//----------------------------------
//* User Signup
//----------------------------------
//? Questions
const menuSignUp = [
  {
    type: 'input',
    name: 'signinUsername',
    message: 'Enter your admin username:'
  },
  {
    type: 'password',
    name: 'signinPassword',
    message: 'Enter your password:'
  },
  {
    type: 'input',
    name: 'username',
    message: 'Create an username:'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Create a password:'
  },
  {
    type: 'name',
    name: 'name',
    message: 'Enter the first and last name'
  },
  {
    type: 'input',
    name: 'role',
    message: 'assign a role'
  }
];

//? Command
program
  .command('signup')
  .description('SignUp to the fooDriver server')
  .action(() => {
    prompt(menuSignUp).then(answers => {
      superagent
        .post('http://localhost:3000/signup/admin')
        .send({
          username: answers.username,
          password: answers.password,
          name: answers.name,
          role: answers.role
        })
        .auth(answers.signinUsername, answers.signinPassword)
        .then(response => {
          console.log('Signup Successful');
        });
    });
  });

//----------------------------------
//* Check the drivers
//----------------------------------
//? Command
program
  .command('get-driver')
  .description('Grab all the drivers')
  .action(() => {
    prompt(authLogin).then(answers => {
      superagent
        .get('http://localhost:3000/admin/driver-routes')
        .auth(answers.username, answers.password)
        .then(response => {
          console.log(response.text);
        });
    });
  });

//----------------------------------
//* User Signup
//----------------------------------
//? Questions
const menuPantry = [
  {
    type: 'input',
    name: 'signinUsername',
    message: 'Enter your admin username:'
  },
  {
    type: 'password',
    name: 'signinPassword',
    message: 'Enter your password:'
  },
  {
    type: 'input',
    name: 'food',
    message: 'Add your food:'
  }
];

//? Command
program
  .command('add-food')
  .description('Add your food to your pantry')
  .action(() => {
    prompt(menuPantry).then(answers => {
      superagent
        .post('http://localhost:3000/admin/food')
        .send({
          food: answers.food
        })
        .auth(answers.signinUsername, answers.signinPassword)
        .then(response => {
          console.log(response.text);
        });
    });
  });

//----------------------------------
//* User Signup
//----------------------------------
//? Questions
const menuGrab = [
  {
    type: 'input',
    name: 'signinUsername',
    message: 'Enter your admin username:'
  },
  {
    type: 'password',
    name: 'signinPassword',
    message: 'Enter your password:'
  }
];

//? Command
program
  .command('get-food')
  .description('Get your food to your pantry')
  .action(() => {
    prompt(menuGrab).then(answers => {
      superagent
        .get('http://localhost:3000/admin/food')
        .auth(answers.signinUsername, answers.signinPassword)
        .then(response => {
          console.log(response.text);
        });
    });
  });

//----------------------------------
//* Spinning Cube
//----------------------------------
//? Questions
const easterEgg = [
  {
    type: 'password',
    name: 'password',
    message: `Who is Jen's spirit animal?`
  }
];

//? Command
program
  .command('cube')
  .description('Very useful')
  .action(() => {
    prompt(easterEgg).then(answers => {
      if (answers.password === 'Snarf') {
        opn(`https://timinis.github.io/three-js-crash-course/`);
      } else {
        console.log(`THANDER CATS!`);
      }
    });
  });

//----------------------------------
//* ARGV
//----------------------------------
program.parse(process.argv);

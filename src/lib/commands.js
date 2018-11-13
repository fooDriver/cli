#!/usr/bin/env node
//----------------------------------
//* Setup
//----------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const program = require('commander');
const { prompt } = require('inquirer'); // inquirer.prompt
const shell = require('shelljs');
const figlet = require('figlet');
const minimist = require('minimist');
const chalk = require('chalk');

//----------------------------------
//* Basic Commands
//----------------------------------
//? Version
program
  .version('1.0.0')
  .description('fooDriver CLI');

//----------------------------------
//* User Login
//----------------------------------
//? Questions
const menuLogin = [
  {
    type: 'input',
    name: 'username', 
    message: 'Enter your username:',
  },
  {
    type: 'password',
    name: 'password', 
    message: 'Enter your password:',
  },
];

//? Command
program
  .command('login')
  .description('Login to the fooDriver server')
  .action(() => {
    prompt(menuLogin)
      .then(() => console.log('You are now connected to the fooDriver server'));
    // prompt(menuLogin).then(answers => login(answers)); // TODO <---
  });

//----------------------------------
//* Add Pantry Item
//----------------------------------
//? Questions
const menuAddPantryItem = [
  {
    type: 'input',
    name: 'pantryItem', 
    message: 'What item would you like to add to the pantry?',
    default: 'singular nouns only',
  },
];

//? Command
program
  .command('additem')
  .description('Add a new item to the pantry')
  .action(() => {
    prompt(menuAddPantryItem)
      .then(() => console.log('Adding item to pantry...'));
    // prompt(menuAddPantryItem).then(answers => addPantryItem(answers)); // TODO <---
  });

//----------------------------------
//* Add User (Register)
//----------------------------------
//? Questions
const menuAddUser = [
  {
    type: 'input',
    name: 'username', 
    message: 'Choose a username:',
  },
  {
    type: 'list',
    name: 'role', 
    message: 'Choose the user role:',
    choices: [
      'user',
      'donator',
      'driver',
      'admin',
    ],
  },
  {
    type: 'password',
    name: 'password', 
    message: 'Specify a password:',
  },
];

//? Command
program
  .command('adduser')
  .description('Add a new user to the database')
  .action(() => {
    prompt(menuAddUser)
      .then(() => console.log('User created'));
    // prompt(menuAddUser).then(answers => addUser(answers)); // TODO <---
  });

//----------------------------------
//* Find Pantry Item (by name)
//----------------------------------
//? Questions
const menuFindPantryItem = [
  {
    type: 'input',
    name: 'pantryItem', 
    message: 'What item are you looking for?',
    default: 'use a singular noun',
  },
];

//? Command
program
  .command('finditem')
  .description('Find an item in the pantry')
  .action(() => {
    prompt(menuFindPantryItem)
      .then(() => console.log('Searching the pantry for your item...'));
    // prompt(menuFindPantryItem).then(answers => findPantryItem(answers)); // TODO <--- prints the item object
  });

//----------------------------------
//* Find User (by Name)
//----------------------------------
//? Questions
const menuFindUser = [
  {
    type: 'input',
    name: 'username', 
    message: 'Who are you looking for?',
    default: 'specify a username',
  },
];

//? Command
program
  .command('finduser')
  .description('Find a user in the database')
  .action(() => {
    prompt(menuFindUser)
      .then(() => console.log('Searching the database...'));
    // prompt(menuFindUser).then(answers => findUser(answers)); // TODO <---
  });

//----------------------------------
//* List All Pantry Items
//----------------------------------
//? Command
program
  .command('listpantry')
  .description('List all pantry items by name and ID')
  .action(() => console.log('Returning all records...'));
//.action(() => listAllUsers()); // TODO <---

//----------------------------------
//* List All Users (by username and role)
//----------------------------------
//? Command
program
  .command('listusers')
  .description('List all users by username, role and ID')
  .action(() => console.log('Returning all user records...'));
//.action(() => listAllUsers()); // TODO <---

//----------------------------------
//* Remove Pantry Item
//----------------------------------
//? Questions
const menuRemovePantryItem = [
  {
    type: 'input',
    name: 'pantryItemID', 
    message: 'What item would you like to remove?',
    default: 'ID',
  },
];

//? Command
program
  .command('removeitem')
  .description('Remove an item from the pantry')
  .action(() => {
    prompt(menuRemovePantryItem)
      .then(() => console.log('Removing the item from the pantry...'));
    // prompt(menuRemovePantryItem).then(answers => removePantryItem(answers)); // TODO <---
  });

//----------------------------------
//* Remove User (by ID)
//----------------------------------
//? Questions
const menuRemoveUserRecord = [
  {
    type: 'input',
    name: 'userid', 
    message: 'Enter a valid user ID to remove a record:',
    default: 'mongo ID',
  },
];

//? Command
program
  .command('removeuser')
  .description('Remove a user record')
  .action(() => {
    prompt(menuRemoveUserRecord)
      .then(() => console.log('Removing the user record...'));
    // prompt(menuRemoveUserRecord).then(answers => removeUserRecord(answers)); // TODO <---
  });

//----------------------------------
//* Update Pantry Item
//----------------------------------
//? Questions
const menuUpdatePantryItem = [
  {
    type: 'input',
    name: 'pantryItemID', 
    message: 'What item are you looking for?',
    default: 'ID',
  },
  {
    type: 'input',
    name: 'pantryItem', 
    message: 'What would you like to rename this item as?',
    default: 'singular nouns only',
  },
];

//? Command
program
  .command('updateitem')
  .description('Update an item in the pantry')
  .action(() => {
    prompt(menuUpdatePantryItem)
      .then(() => console.log('Searching the pantry for your item...'));
    // prompt(menuUpdatePantryItem).then(answers => updatePantryItem(answers)); // TODO <---
  });

//----------------------------------
//* Update User (by ID)
//----------------------------------
//? Questions
const menuUpdateUserRecord = [
  {
    type: 'input',
    name: 'userid', 
    message: 'Enter a valid user ID to update a record:',
    default: 'mongo ID',
  },
  {
    type: 'input',
    name: 'username', 
    message: 'Choose a username:',
  },
  {
    type: 'list',
    name: 'role', 
    message: 'Choose the user role:',
    choices: [
      'user',
      'donator',
      'driver',
      'admin',
    ],
  },
  {
    type: 'password',
    name: 'password', 
    message: 'Specify a password:',
  },
];

//? Command
program
  .command('updateuser')
  .description('Update a user record')
  .action(() => {
    prompt(menuUpdateUserRecord)
      .then(() => console.log('Performing the requested actions...'));
    // prompt(menuUpdateUserRecord).then(answers => updateUserRecord(answers)); // TODO <---
  });

//----------------------------------
//* ARGV
//----------------------------------
program.parse(process.argv);

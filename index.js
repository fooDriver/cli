//----------------------------------
//* Setup
//----------------------------------
// Safety Goggles ON
'use strict';

// Dependencies
const shell = require('shelljs');
const figlet = require('figlet');
const minimist = require('minimist');
const chalk = require('chalk');
const mongoose = require('mongoose');

//----------------------------------
//* Welcome Menu
//----------------------------------
//? Stretch Goal

//----------------------------------
//* DB Connection
//----------------------------------
// TODO: REVIEW
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/foodriver', {
  useNewUrlParser:true,
  useCreateIndex: true,
  useFindAndModify: false,
});

//----------------------------------
//* Import Models
//----------------------------------
// TODO
//? require users

//? require items

//----------------------------------
//* Method Library
//----------------------------------
// TODO
//? Item: Create

//? Item: Find

//? Item: Update

//? Item: Remove

//? Item: List All

//? User: Set Login Credentials (.env)

//? User: Create (Register)

//? User: Find (by Name)

//? User: Update (by ID)

//? User: Remove (by ID)

//? User: List All

//----------------------------------
//* Export Method Library
//----------------------------------
// TODO

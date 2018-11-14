//----------------------------------
//* Setup
//----------------------------------
// Safety Goggles ON
'use strict';
console.clear();

// Dependencies
const figlet = require('figlet');
const sh = require('shelljs');
const commands = require('./src/lib/commands.js');

//----------------------------------
//* Welcome Menu
//----------------------------------
figlet('fooDriver CLI', function(err, banner) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(banner);
  console.log('\nType \'fooDriver --help\' for a full list of commands.\n');
  
  // sh.exec('./src/lib/node commands.js --version');
  process.exit();
});
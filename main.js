let readline = require('readline');
let commandProcessor = require('./command_processor');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function (line) {
    commandProcessor(line);
});
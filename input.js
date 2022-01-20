const { connect } = require("./play");

let connection;


// setup interface to handle user input from stdin
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};


const handleUserInput = function(key) {
  console.log(key)
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up')
  }
  if (key === 's') {
    connection.write('Move: down')
  }
  if (key === 'a') {
    connection.write('Move: left')
  }
  if (key === 'd') {
    connection.write('Move: right')
  }
  if (key === 'l') {
    connection.write('Say: MOVE!')
  }
  if (key === 'k') {
    connection.write('Say: OUTTA')
  }
  if (key === 'j') {
    connection.write('Say: MY WAY')
  }
}

module.exports = { setupInput }
const net = require("net");


const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });


  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Player 1 incoming");
  });

  return conn;
};

connect();

module.exports = { connect };
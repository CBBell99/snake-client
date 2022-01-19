const net = require("net");


const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("The connection is made");
    conn.write('Name: CBB')
  });

  conn.on('data', (data) => {
    console.log(data.toString());
  })



  return conn;
};

connect();
module.exports = { connect };
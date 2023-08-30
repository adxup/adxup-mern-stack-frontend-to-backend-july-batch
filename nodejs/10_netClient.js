const net = require("net");
const client = new net.Socket();

client.connect(1337, "127.0.0.1", function () {
  console.log("client connected to server");
  client.write(`data passed - and connection closed`);
});

client.on("data", function (data) {
  console.log(`received data from server: ${data}`);
});

console.log(`the server and client connection succeeded`);

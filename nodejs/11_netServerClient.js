const net = require("net");

const server = net.createServer(function (socket) {
  socket.write("creating a bridge between two end points");
  socket.pipe(socket);
});

const client = new net.Socket();
client.connect(1337, "127.0.0.1", function () {
  console.log("client connected to server");
  client.write(`data passed - and connection closed`);
});

client.on("data", function (data) {
  console.log(`received data from server: ${data}`);
});

server.listen(1337, "127.0.0.1");
console.log(`the server and client connection succeeded`);

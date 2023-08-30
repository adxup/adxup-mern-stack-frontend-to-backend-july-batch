let fs = require("fs");
let data = "";

let readerStream = fs.createReadStream("html_notes.txt");
readerStream.setEncoding("utf-8");

readerStream.on("data", function (chunck) {
  data += chunck;
});

readerStream.on("end", function () {
  console.log(data);
});

readerStream.on("error", function (err) {
  console.log(err);
});

console.log("reading the data concept using readableStream");

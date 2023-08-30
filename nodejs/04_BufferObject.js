var buf = new Buffer.alloc(10); // 10 octets
var buf = new Buffer([54, -97, 65, 23, -578]);
var buf = new Buffer("the nodejs is built on Google's v8 engine");
console.log(`the no of octets: ${buf.length}`);

var buf = new Buffer.alloc(26);
for (var i = 0; i < 26; i++) {
  buf[i] = i + 65;
}

console.log(`buf: ${buf.toString("ascii")}`);
console.log(`buf: ${buf.toString("ascii", 2, 8)}`);
console.log(`buf: ${buf.toString("utf-8", 2, 8)}`);
console.log(`buf: ${buf.toString(undefined, 2, 8)}`);

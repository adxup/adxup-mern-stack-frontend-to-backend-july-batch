const dns = require("dns");

dns.lookup("yahoo.com", (err, address, family) => {
  if (err) console.log(err);
  console.log(
    `lookup of facebook.com address: ${address} and family: ${family}`
  );
});

dns.resolve4("yahoo.com", (err, addresses) => {
  if (err) console.log(err);
  console.log(`resolve4 addresses of yahoo.com: ${addresses}`);
});

dns.lookupService("31.13.79.35", 22, (err, hostname, service) => {
  if (err) console.log(err);
  console.log(`hostname: ${hostname}, and service: ${service}`);
});

console.log(`the dns module methods program ends`);

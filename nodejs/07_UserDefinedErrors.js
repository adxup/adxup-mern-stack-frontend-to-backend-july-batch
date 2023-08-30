// exception handling or user defined errors
try {
  const a = 1;

  var c = 0;
  if (a + b) {
    console.log(`c: ${c}`);
  } else {
    throw new Error("c is not a valid value");
  }
} catch (err) {
  console.log(`err: ${err}`);
} finally {
  console.log(`finally block is executed`);
}

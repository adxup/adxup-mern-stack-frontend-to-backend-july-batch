// setTimeout()
/*
setTimeout(function () {
  console.log(`setTimeout is executing in just 1 sec`);
}, 1000);
*/

// setInterval()
/*
setInterval(function () {
  console.log(`setInterval is executing in just 1 sec`);
}, 1000);
*/

/*
let i = 0;
setInterval(function () {
  console.log(`the i: ${i}`);
  i++;
}, 1000);
*/

// recursive function
/*let recurvsiveFunc = function () {
  console.log(`the recursiveFunc execution`);
  setInterval(recurvsiveFunc, 1000);
};

recurvsiveFunc();
*/

// setImmediate()
let execFunc = function () {
  setTimeout(function () {
    console.log(`the setTimeout func executes`);
  }, 0);

  setImmediate(function () {
    console.log(`the setImmediate func executes`);
  });
};

execFunc();

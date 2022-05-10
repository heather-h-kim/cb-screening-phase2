/**
 * 
 * @param {*} x 
 * 
 * any type of parameters are allowed, parameter is called x
 */

const f = (x = 0) => {
  //The function f takes in the parameter x, and the default value of x is 0.
  console.log('x:', x)
  //console log the value of x
  setImmediate(process.exit, 0)
  //Process.exit will be executed after the current event loop finishes.
  queueMicrotask(() => f(x + 1))
  //When queueMicrotask is called, the callback function () => f(x+1) is added to the microtask queue, and the newly-added microtask executes before the next task is run.
  //The callback function keeps on adding 1 to the variable x and console logs at line 10.
  //The event loop runs endlessly, using up the memory. setImmediate on line 12 never gets to be executed because the event loop keeps on running
}

console.log(f());


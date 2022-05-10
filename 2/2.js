/**
 * 
 * @param {*} x 
 * 
 * any type of parameters are allowed, parameter is called x
 */

const f = (x = 0) => {
  //the function f takes in the parameter x, and the default value of x is 0
  console.log('x:', x)
  //console log the value of x
  setImmediate(process.exit, 0)
  queueMicrotask(() => f(x + 1))
  //anonymous function that adds 1 to x is executed
}

console.log(f());


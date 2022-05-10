/**
 * 
 * @param {*} x 
 */
const f = (x = 0) => {
  console.log('x:', x)
  setImmediate(process.exit, 0)
  queueMicrotask(() => f(x + 1))
}

console.log(f());


// hint: there is more than 1 way to click on something
/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @param {*} z 
 */
const f = (x, y, z) => {
  let p
  x.addEventListener('click', () => {
    p = false
    queueMicrotask(() => p = true)
  })
  x.addEventListener('click', () => {
    p ? y() : z()
  })
}



const test1 = () => {
  console.log('hello');
  
}

const test2 = () => {
  console.log('good bye');
  
}

f(x, test1, test2);

// hint: there is more than 1 way to click on something
/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @param {*} z 
 * 
 * any type of parameters 
 * parameter names are x, y, and z
 */
const f = (x, y, z) => {
  //function f takes in the parameters x, y, and z
  let p
  // declare the variable p
  x.addEventListener('click', () => {
    p = false
    //x can be any DOM element. When x is clicked, anonymous function that sets p to false is executed
    queueMicrotask(() => p = true)
    // the anonymous function that sets p to true is executed
  })
  x.addEventListener('click', () => {
    p ? y() : z()
  })
  //When x is clicked, the anonymous function is executed. if p is true, function y is invoked. if p is false, function z is invoked
}



const test1 = () => {
  console.log('hello');
  
}

const test2 = () => {
  console.log('good bye');
  
}

f(x, test1, test2);

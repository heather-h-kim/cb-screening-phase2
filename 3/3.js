// hint: there is more than 1 way to click on something
/**
 * 
 * @param {*} x 
 * @param {*} y 
 * @param {*} z 
 * 
 * any type of parameters are allowed.
 * parameter names are x, y, and z.
 */
const f = (x, y, z) => {
  //Function f takes in the parameters x, y, and z.
  let p
  // Declare the variable p.
  x.addEventListener('click', () => { p = false  
    //x can be any DOM element. Clicking x fires the anonymous function that sets p to false.
    queueMicrotask(() =>  p = true)
    // Then queueMicrotask is called, the anonymous function that sets p to true is added to the queue and executed before the next task is run.
    // If click action is simulated, queueMicrotask cannot run because Javascript execution stack it not empty yet. Javascript need to run the next task, which is line 26, then the microtask can be executed.
    // In this case, p is set to false 
  })
  x.addEventListener('click', () => {
    p ? y() : z()
  })
  //When x is clicked, the anonymous function is executed. If p is true, function y is invoked. If p is false, function z is invoked.
  //when x is actually clicked, p is true, so the function y will be executed.
  //When the click is simulated, p is false, so the function z will be executed.
}




const test1 = () => {
  console.log('hello');
  
}

const test2 = () => {
  console.log('good bye');
  
}




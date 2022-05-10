/**
 *
 * provides the name, type, and description of a function parameter 
 * the function can take in any type of parameters and the parameter's name is args
 * ... means that the parameter can be repeated = multiple parameters
 * @param  {...any} args 
 */

const f = (...args) => {
// The function f takes in any number of parameters 
  let a = 1, b = 0, c
  // Initialize the variable a and assign 1 to it, initialize the variable b and assign 0 to it, and declare the variable c.
  while (
  // While loop with an empty statement, which means it performs no action.
  // The comma operator evaluates each operand and returns the value of the last operand.
  // The loop stops when the last operand a===a is false.
    c = a,
    // c is assigned to a, which is 1 at first
    // When a becomes a *= args[b], c will be a*args[b]
    !~~args[b] && (a *= args[b]),
    // ~~ removes fractional values of the args at index b, thus ~args[b] is always 0 if args[b] is greater than -1 and less than 1.
    // Otherwise, ~~args[b] is always an integer
    // ! converts a value to its opposite boolean. All numbers other than 0 are truthy thus !any number other than 0 is false. 
    // 0 is falsy thus !0 is true.
    // && returns the value of the first falsy. If all values are truthy, the value of the last operand is returned.
    // If args[b] is greater than -1 and less than 1, the first operand is true. The second operand a *= args[b] is truthy. All values are truthy thus a becomes a*args[b].
    // If args[b] is equal to or greater than 1, or equal to or less than -1, the first operand is false. The first falsy value, false is returned. 
    // In this case, a is still 1 because a *= args[b] is not executed.
    // When args[b] does not exist (if there are no more parameters), args[b] is undefined, thus !~~args[b] is true. a * undefined is NaN, which is falsy. 
    b++,
    // Add 1 to b, which means moving on to the next parameter.
    a === a
    // If a is a number, a === a is true, thus the loop continues.
    // If a is NaN, a === a is false. The last operand is false so the loop stops.
  );

  return c
  //c is assigned a, so the value of a is returned
}

// console.log(f(3,0.2, 4, 0.9));


// const test = (a) => {
//  return a === a
// }

// console.log(test(NaN));





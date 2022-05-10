/**
 *
 * provides the name, type, and description of a function parameter 
 * the function can take in any type of parameters and the parameter's name is args. 
 * the parameter can be repeated
 * @param  {...any} args 
 */

// the function f takes in any number of parameters 
const f = (...args) => {
  // initialize variable a and assign 1 to it, variable b and assign 0 to it, and declare c
  let a = 1, b = 0, c
  // while loop with an empty statement, which means it performs no action
  // the comma operator evaluates each operand and returns the value of the last operand
  while (
    // c is assigned to a, which is 1 at first
    // when a becomes a *= args[b], c will be a*args[b]
    c = a,
    // ~~ removes fractional values of the args at index b, thus ~args[b] is always 0 if args[b] is greater than -1 and less than 1, otherwise, always an integer
    //! converts a value to its opposite boolean. All numbers other than 0 are truthy thus !any number other than 0 is false. 0 is falsy thus !0 is true
    // && returns the value of the first falsy. If all values are truthy, the value of the last operand is returned
    // if args[b] is greater than -1 and less than 1, the first operand is true. The second operand a *= args[b] is truthy. All values are truthy thus a becomes a*args[b]
    // if args[b] is equal to or greater than 1, or equal to or less than -1, the first operand is false. The first falsy, which is false is returned. While loop conditions are not true so the loop stops
    // when args[b] does not exist, args[b] is undefined, thus !~~args[b] is true. a * undefined is NaN, which is falsy. Thus line 25 becomes false, then the loop stops
    !~~args[b] && (a *= args[b]),
    // b is now 1, which means moving on to the next args
    b++,
    // a equals a, so the value is true
    a === a
  );

  return c
}

console.log(f(3,0.2));


// const test = (a) => {
//  return a * undefined
// }

// console.log(test(1));





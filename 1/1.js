/**
 * 
 * @param  {...any} args 
 */
const f = (...args) => {
  let a = 1, b = 0, c
  while (
    c = a,
    !~~args[b] && (a *= args[b]),
    b++,
    a === a
  );
  return c
}

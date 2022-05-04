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


/**
 * Execute promise callbacks one after an other
 * and pass values.
 *
 * Examples:
 *
 *  chain(
 *    value => Promise.resolve('hello'),
 *    value => Promise.resolve(value + ' world!')
 *  ).then(console.log)
 *  // => hello world!
 *
 * @return {Promise}
 * @public
 */

module.exports = (...args) => {
  return args.reduce((promise, next) => {
    return promise.then(next)
  }, Promise.resolve())
}

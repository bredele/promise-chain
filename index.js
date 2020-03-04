

module.exports = (...args) => {
  return args.reduce((promise, next) => {
    return promise.then(next)
  }, Promise.resolve())
}

/**
 * Dependencies
 */

const test = require('tape')
const chain = require('..')

test('should execute promise callback', assert => {
  assert.plan(1)
  chain(
    () => Promise.resolve('hello world')
  ).then(data => assert.equal(data, 'hello world'))
})

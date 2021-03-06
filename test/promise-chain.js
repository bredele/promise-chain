/**
 * Dependencies
 */

const test = require('tape')
const chain = require('..')

test('should execute promise callback and return promise', assert => {
  assert.plan(1)
  chain(
    () => Promise.resolve('hello world')
  ).then(data => assert.equal(data, 'hello world'))
})

test('should execute multiple promise callbacks one after an other and pass value', assert => {
  assert.plan(1)
  chain(
    () => Promise.resolve('hello'),
    value => Promise.resolve(value + ' world')
  ).then(data => assert.equal(data, 'hello world'))
})

test('should stop promises resolution when one promise is rejected', assert => {
  assert.plan(1)
  chain(
    () => Promise.resolve('#1'),
    () => Promise.reject('#2'),
    () => Promise.resolve('#3').then(val => assert.equal(val, '#3'))
  ).then(null, () => assert.ok('rejected at #2'))
})

test('should pass error when promise is rejected', assert => {
  assert.plan(1)
  chain(
    () => Promise.resolve('#1'),
    () => Promise.reject('#2'),
    () => Promise.resolve('#3')
  ).then(null, err => assert.equal(err, '#2'))
})

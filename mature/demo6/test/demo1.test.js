const demo1 = require('../demo1')
const should = require('should')

describe('test/demo1.test.js', function () {
  it('should equal 0 when n === 0', function () {
    demo1.fibonacci(0).should.equal(0)
  })

  it('should equal 1 when n === 1', function () {
    demo1.fibonacci(1).should.equal(1)
  })

  it('should equal 55 when n === 10', function () {
    demo1.fibonacci(10).should.equal(55)
  })

  it('should throw when n > 10', function () {
    (function () {
      demo1.fibonacci(11)
    }).should.throw('n should <= 10')
  })

  it('should throw when n < 0', function () {
    (function () {
      demo1.fibonacci(-1)
    }).should.throw('n should >= 0')
  })

  it('should throw when n isnt Number', function () {
    (function () {
      demo1.fibonacci('呵呵')
    }).should.throw('n should be a Number')
  })
})
var expect = require('chai').expect
var test = require('./../../../service/test.js')

describe(`Test Service`, () => {
  describe(`Test 'testServiceFunctionThatDoSomething' function`, () => {
    it(`should exist`, () => {
      expect(!test.testServiceFunctionThatDoSomething).to.not.equal(true)
    })

    it(`should return a promise`, () => {
      const promise = test.testServiceFunctionThatDoSomething()
      expect(promise).to.be.an.instanceof(Promise)
    })

    it(`should return 2 when passed with 1,1 on param`, async () => {
      const result = await test.testServiceFunctionThatDoSomething(1, 1)
      expect(result).to.equal(2)
    })

    it(`should return 5 when passed with 3,2 on param`, async () => {
      const result = await test.testServiceFunctionThatDoSomething(3, 2)
      expect(result).to.equal(5)
    })
  })
})

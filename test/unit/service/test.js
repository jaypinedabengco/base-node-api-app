import { expect } from 'chai'
import test from './../../../service/test.js'

describe.only(`Test Service`, () => {
  describe(`testServiceFunctionThatDoSomething function`, () => {
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

  describe(`testServiceFunctionThatDoSomething2 function`, () => {
    it(`should exist`, () => {
      expect(!test.testServiceFunctionThatDoSomething2).to.not.equal(true)
    })

    it(`should return a promise`, () => {
      const promise = test.testServiceFunctionThatDoSomething2()
      expect(promise).to.be.an.instanceof(Promise)
    })

    it(`should return 2 when passed with 1,1 on param`, async () => {
      const result = await test.testServiceFunctionThatDoSomething2(1, 1)
      expect(result).to.equal(2)
    })

    it(`should return 5 when passed with 3,2 on param`, async () => {
      const result = await test.testServiceFunctionThatDoSomething2(3, 2)
      expect(result).to.equal(5)
    })
  })

  describe(`addUserFromTestDB function`, () => {
    // get user dao
    // validate passed value if valid
    it(`should validate passed value as valid`)
  })
})

var expect = require('chai').expect
var config = require('config')

describe('Dynamo DB config', () => {
    const { dynamo } = config
    const DYNAMO_ENDPOINT = process.env.DYNAMO_ENDPOINT
  
    it(`'dynamo' exist on config`, () => {
      expect(!dynamo).to.not.equal(true)
    })
  
    it(`'DYNAMO_ENDPOINT' exist on Systems Environment Variable`, () => {
      expect(!DYNAMO_ENDPOINT).to.not.equal(true)
    })
  
    it(`'dynamo.endpoint' should be the same with the 'DYNAMO_ENDPOINT' from system environment`, () => {
      expect(DYNAMO_ENDPOINT).is.equal(dynamo.endpoint)
    })
  })
  
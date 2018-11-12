var expect = require('chai').expect
var config = require('config')

describe('Build DB config', () => {
  const { build } = config
  it(`'build' exist on config`, () => {
    expect(!build).to.not.equal(true)
  })
})

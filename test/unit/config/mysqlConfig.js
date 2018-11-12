var expect = require('chai').expect
var config = require('config')

describe('Mysql DB config', () => {
  const { mysql } = config
  const MYSQL_HOST = process.env.MYSQL_HOST
  const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD
  const MYSQL_USER = process.env.MYSQL_USER

  it(`'mysql' exist on config`, () => {
    expect(!mysql).to.not.equal(true)
  })

  it(`'MYSQL_HOST' exist on Systems Environment Variable`, () => {
    expect(!MYSQL_HOST).to.not.equal(true)
  })

  it(`'MYSQL_PASSWORD' exist on Systems Environment Variable`, () => {
    expect(!MYSQL_PASSWORD).to.not.equal(true)
  })

  it(`'MYSQL_USER' exist on Systems Environment Variable`, () => {
    expect(!MYSQL_USER).to.not.equal(true)
  })

  it(`'mysql.host' should be the same with the 'MYSQL_HOST' from system environment`, () => {
    expect(MYSQL_HOST).is.equal(mysql.host)
  })

  it(`'mysql.password' should be the same with the 'MYSQL_PASSWORD' from system environment`, () => {
    expect(MYSQL_PASSWORD).is.equal(mysql.password)
  })

  it(`'mysql.user' should be the same with the 'MYSQL_USER' from system environment`, () => {
    expect(MYSQL_USER).is.equal(mysql.user)
  })
})

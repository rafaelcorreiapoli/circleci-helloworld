const chai = require('chai')
const expect = chai.expect

describe('My first test', () => {
  it('Should pass', () => {
    expect(1 + 1).to.equal(2)
  })
})

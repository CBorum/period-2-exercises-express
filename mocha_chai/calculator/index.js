var assert = require('assert')
var expect = require('chai').expect
var calculator = require('./calculator')

describe('calculator', () => {
    describe('#plus()', () => {
        it('should return the sum 5', () => {
            expect(calculator.plus(2,3)).to.equal(5)
        })
    })
    describe('#minus()', () => {
        it('should return the sum 123', () => {
            expect(calculator.minus(246,123)).to.equal(123)
        })
    })
    describe('#miltiply()', () => {
        it('should return the sum of 25', () => {
            expect(calculator.multiply(5,5)).to.equal(25)
        })
    })
    describe('#divide()', () => {
        it('should return an error if the second parameter is 0', () => {
            expect(calculator.divide(10,0)).to.throw(Error)
            // expect(calculator.divide(10,0)).to.be.an('error')
        })
        it('should return the divided sum', () => {
            expect(calculator.divide(6,2)).to.equal(3)
        })
    })
})

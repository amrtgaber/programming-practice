const expect = require('chai').expect;
const checkBalanced = require('./check-balanced');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(checkBalanced) ).filter( method => method !== 'constructor' );

const balanced = require('./check-balanced-tests').balanced;
const notBalanced = require('./check-balanced-tests').notBalanced;

describe('Chapter 4.4: Check Balanced', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            describe('returns true', function() {
                balanced.forEach( (test, index) => {
                    it(`balanced${index + 1}`, function() {
                        expect( checkBalanced[method]( test ) ).to.be.true;
                    });
                });
            });

            describe('returns false', function() {
                notBalanced.forEach( (test, index) => {
                    it(`notBalanced${index + 1}`, function() {
                        expect( checkBalanced[method]( test ) ).to.be.false;
                    });
                });
            });
        });
    });
});

const expect = require('chai').expect;
const validateBst = require('./validate-bst');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(validateBst) ).filter( method => method !== 'constructor' );

const bst = require('./validate-bst-tests').bst;
const notBst = require('./validate-bst-tests').notBst;

describe('Chapter 4.5: Validate BST', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            describe('returns true', function() {
                bst.forEach( (test, index) => {
                    it(`bst${index + 1}`, function() {
                        expect( validateBst[method]( test ) ).to.be.true;
                    });
                });
            });

            describe('returns false', function() {
                notBst.forEach( (test, index) => {
                    it(`notBst${index + 1}`, function() {
                        expect( validateBst[method]( test ) ).to.be.false;
                    });
                });
            });
        });
    });
});

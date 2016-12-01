const expect = require('chai').expect;
const isUnique = require('./is-unique');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(isUnique) ).filter( method => method !== 'constructor' );

const uniqueTestStrings = [
    '',
    ' ',
    'a',
    'abcdef',
    'abc def',
    '\n'
];

const nonUniqueTestStrings = [
    'aa',
    'abcdefa',
    '  ',
    ' abcdef ',
    '\n\n'
];

describe('Chapter 1.1: Is Unique', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            describe('returns true', function() {
                uniqueTestStrings.forEach( str => {
                    it(str, function() {
                        expect( isUnique[method](str) ).to.be.true;
                    });
                });
            });

            describe('returns false', function() {
                nonUniqueTestStrings.forEach( str => {
                    it(str, function() {
                        expect( isUnique[method](str) ).to.be.false;
                    });
                });
            });
        });
    });
});

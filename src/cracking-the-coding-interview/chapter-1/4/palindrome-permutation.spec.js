const expect = require('chai').expect;
const palindromePermutation = require('./palindrome-permutation');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(palindromePermutation) ).filter( method => method !== 'constructor' );

const palindromes = [
    '',
    'a',
    'aa',
    'aaa',
    '1234321',
    'acacbb',
    'ttaacco',
    'jikorkjroei',
    'abababababab'
];

const notPalindromes = [
    'ab',
    '1234',
    'ababcd',
    'abcdefg',
    'ajbiehg',
    'baaaaaaac',
    'baaaacaaaa'
];

describe('Chapter 1.4: Palindrome Permutation', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            describe('returns true', function() {
                palindromes.forEach( string => {
                    it(string, function() {
                        expect( palindromePermutation[method]( string ) ).to.be.true;
                    });
                });
            });

            describe('returns false', function() {
                notPalindromes.forEach( string => {
                    it(string, function() {
                        expect( palindromePermutation[method]( string ) ).to.be.false;
                    });
                });
            });
        });
    });
});

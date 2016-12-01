const expect = require('chai').expect;
const checkPermutation = require('./check-permutation');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(checkPermutation) ).filter( method => method !== 'constructor' );

const permutations = [
    ['', ''],
    ['a', 'a'],
    ['abcdefg', 'gfedcba'],
    ['aaa', 'aaa'],
    ['1234', '3142'],
    ['aabbcc', 'abcabc'],
    ['white space', 'space white'],
    ['@#$?!', '$#!?@']
];

const notPermutations = [
    ['', ' '],
    ['a', 'b'],
    ['abcdefg', 'fedcba'],
    ['aaa', 'aaaa'],
    ['1234', '7777'],
    ['aabbcc', 'abcaba'],
    ['white space', ' spacewhite '],
    ['@#$?!', '$#!?@!!!!!!!']
];

describe('Chapter 1.2: Check Permutation', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            describe('returns true', function() {
                permutations.forEach( pair => {
                    it(pair.toString(), function() {
                        expect( checkPermutation[method]( pair[0], pair[1] ) ).to.be.true;
                    });
                });
            });

            describe('returns false', function() {
                notPermutations.forEach( pair => {
                    it(pair.toString(), function() {
                        expect( checkPermutation[method]( pair[0], pair[1] ) ).to.be.false;
                    });
                });
            });
        });
    });
});

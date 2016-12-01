'use strict';

const expect = require('chai').expect;
const oneAway = require('./one-away');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(oneAway) ).filter( method => method !== 'constructor' );

const oneAwayStrings = [
    ['', ''],
    ['a', 'a'],
    ['abc', 'aac'],
    ['abc', 'bbc'],
    ['abc', 'aba'],
    ['abcd', 'abd'],
    ['abcd', 'abc'],
    ['abcd', 'bcd'],
    ['abcd', 'abcde'],
    ['abcd', 'eabcd'],
    ['abcd', 'abecd']
];

const notOneAwayStrings = [
    ['', 'aa'],
    ['abc', 'aaa'],
    ['abc', 'bbb'],
    ['abc', 'a'],
    ['abcd', 'aef'],
    ['abcd', 'aabd'],
    ['abcd', 'abcdef'],
    ['abcd', 'efbcd'],
    ['abcd', 'ae'],
    ['abcd', 'ad'],
    ['abcd', 'abecde']
];

describe('Chapter 1.5: One Away', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            describe('returns true', function() {
                oneAwayStrings.forEach( pair => {
                    it(pair.toString(), function() {
                        expect( oneAway[method]( pair[0], pair[1] ) ).to.be.true;
                    });
                });
            });

            describe('returns false', function() {
                notOneAwayStrings.forEach( pair => {
                    it(pair.toString(), function() {
                        expect( oneAway[method]( pair[0], pair[1] ) ).to.be.false;
                    });
                });
            });
        });
    });
});

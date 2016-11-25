'use strict';

const expect = require('chai').expect;
const isUnique = require('./is-unique');

describe('isUnique', function() {
    it('returns true for ""', function() {
        expect( isUnique.naive('') ).to.be.true;
    });

    it('returns true for "a"', function() {
        expect( isUnique.naive('a') ).to.be.true;
    });

    it('returns true for "abcdef"', function() {
        expect( isUnique.naive('abcdef') ).to.be.true;
    });

    it('returns false for "aa"', function() {
        expect( isUnique.naive('aa') ).to.be.false;
    });
});

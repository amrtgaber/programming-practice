'use strict';

const expect = require('chai').expect;
const urlify = require('./urlify');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(urlify) ).filter( method => method !== 'constructor' );

const tests = [
    ['', ''],
    ['abc', 'abc'],
    ['ab cd  ', 'ab%20cd'],
    ['ab cd ef    ', 'ab%20cd%20ef'],
    ['abcd   ', 'abcd%20'],
    [' abcd  ', '%20abcd'],
    [' abcd     ', '%20abcd%20'],
    ['ab  cd    ', 'ab%20%20cd'],
    ['         ', '%20%20%20']
];

describe('Chapter 1.3: Urlify', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            tests.forEach( pair => {
                it(`${pair[0]} => ${pair[1]}`, function() {
                    // pass string as char array, then rejoin into string
                    let urlifiedString = urlify[method]( pair[0].split(''), pair[0].length ).join('');
                    expect( urlifiedString ).to.equal( pair[1] );
                });
            });
        });
    });
});

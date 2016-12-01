const expect = require('chai').expect;
const stringCompression = require('./string-compression');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(stringCompression) ).filter( method => method !== 'constructor' );

const testStrings = [
    ['', ''],
    ['a', 'a'],
    ['abc', 'abc'],
    ['aaaabbbcc', 'a4b3c2'],
    ['aaabbccaa', 'a3b2c2a2'],
    ['aabbccdd', 'aabbccdd'],
    ['aaabbbcccdddabc', 'a3b3c3d3a1b1c1'],
    ['aaabbbcdeeefff', 'a3b3c1d1e3f3'],
    ['abcccdddeeefff', 'a1b1c3d3e3f3']
];

describe('Chapter 1.6: String Compression', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            testStrings.forEach( pair => {
                it(pair.toString(), function() {
                    expect( stringCompression[method]( pair[0] ) ).to.equal( pair[1] );
                });
            });
        });
    });
});

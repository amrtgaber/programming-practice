const expect = require('chai').expect;
const tripleStep = require('./triple-step');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(tripleStep) ).filter( method => method !== 'constructor' );

const tests = [
    [0, 1],
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 7],
    [5, 13],
    [6, 24],
    [7, 44],
    [8, 81],
    [9, 149],
    [10, 274],
    [11, 504],
    [12, 927]
];

describe('Chapter 8.1: Triple Step', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            tests.forEach( pair => {
                it(`${pair[0]} steps have ${pair[1]} possible ways`, function() {
                    expect( tripleStep[method]( pair[0] ) ).to.equal( pair[1] );
                });
            });
        });
    });
});

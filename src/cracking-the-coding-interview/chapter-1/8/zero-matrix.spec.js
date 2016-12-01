const expect = require('chai').expect;
const zeroMatrix = require('./zero-matrix');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(zeroMatrix) ).filter( method => method !== 'constructor' );

const tests = require('./zero-matrix-tests');

describe('Chapter 1.8: Zero Matrix', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            tests.forEach( pair => {
                let testTitle = '\n';
                for( let i = 0; i < pair[0].length; i++ ) {
                    testTitle += `\t${pair[0][i]}\t${pair[1][i]}\n`;
                }

                it(testTitle, function() {
                    expect( zeroMatrix[method]( pair[0] ) ).to.deep.equal( pair[1] );
                });
            });
        });
    });
});

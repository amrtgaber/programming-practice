'use strict';

const expect = require('chai').expect;
const rotateMatrix = require('./rotate-matrix');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(rotateMatrix) ).filter( method => method !== 'constructor' );

const tests = [
    [
        [
            [ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ]
        ],
        [
            [ 7, 4, 1 ],
            [ 8, 5, 2 ],
            [ 9, 6, 3 ]
        ]
    ]
];

describe('Chapter 1.6: Rotate Matrix', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            tests.forEach( pair => {
                let testTitle = '\n';
                for( let i = 0; i < pair[0].length; i++ ) {
                    testTitle += `\t${pair[0][i]}\t${pair[1][i]}\n`;
                }

                it(testTitle, function() {
                    expect( rotateMatrix[method]( pair[0] ) ).to.deep.equal( pair[1] );
                });
            });
        });
    });
});

const expect = require('chai').expect;
const robotInAGrid = require('./robot-in-a-grid');

const methods = Object.getOwnPropertyNames( Object.getPrototypeOf(robotInAGrid) ).filter( method => method !== 'constructor' );

const path = require('./robot-in-a-grid-tests').path;
const noPath = require('./robot-in-a-grid-tests').noPath;

describe('Chapter 8.2: Robot in a Grid', function() {
    methods.forEach( method => {
        describe(`${method}()`, function() {
            path.forEach( pair => {
                it('has path', function() {
                    expect( robotInAGrid[method]( pair[0] ) ).to.deep.equal( pair[1] );
                });
            });
        });

        describe(`${method}()`, function() {
            noPath.forEach( test => {
                it('no path', function() {
                    expect( robotInAGrid[method]( test ) ).to.be.null;
                });
            });
        });
    });
});
